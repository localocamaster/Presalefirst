import { useParams, useSearchParams } from 'react-router-dom';
import { loadProjectData } from '../data/projectLoader';
import { getProjectConfig } from '../data/projects/projectRegistry';
import TemplateLayout from '../templates/TemplateLayout';
import CategoryLayout from '../templates/CategoryLayout';
import Category2Layout from '../templates/Category2Layout';
import PremiumLayout from '../templates/PremiumLayout';
import { categorySamples } from '../data/categorySamples';
import { category2Samples } from '../data/category2Samples';
import { premiumSamples } from '../data/premiumSamples';

type TemplateTheme = 'zenith' | 'luxia' | 'ssy' | 'dalseo';

const themeMap: Record<string, TemplateTheme> = {
  zenith: 'zenith',
  hangang: 'zenith',
  songpa: 'zenith',
  luxia: 'luxia',
  apgujeong: 'luxia',
  yongsan: 'luxia',
  ssy: 'ssy',
  haeundae: 'ssy',
  gwangan: 'ssy',
  dalseo: 'dalseo',
  suseong: 'dalseo',
  gimpo: 'dalseo',
};

const categoryTemplates = new Set(Object.keys(categorySamples));
const category2Templates = new Set(Object.keys(category2Samples));
const premiumTemplates = new Set(Object.keys(premiumSamples));

export default function Demo() {
  const { slug, projectId: projectIdParam } = useParams();
  const [searchParams] = useSearchParams();
  const projectIdFromQuery = searchParams.get('project') ?? undefined;
  const projectId = projectIdParam ?? projectIdFromQuery;

  // Premium template check
  if (slug && premiumTemplates.has(slug)) {
    const premiumData = premiumSamples[slug];
    if (premiumData) {
      return <PremiumLayout data={premiumData} />;
    }
  }

  // Category2 template check (multi-page + SNB)
  if (slug && category2Templates.has(slug)) {
    const category2Data = category2Samples[slug];
    if (category2Data) {
      return <Category2Layout data={category2Data} />;
    }
  }

  // Category template check
  if (slug && categoryTemplates.has(slug)) {
    const categoryData = categorySamples[slug];
    if (categoryData) {
      return <CategoryLayout data={categoryData} />;
    }
  }

  let templateSlug: string | null = null;
  let theme: TemplateTheme | null = null;

  if (projectIdParam) {
    const config = getProjectConfig(projectIdParam);
    if (config) {
      templateSlug = config.templateId;
      theme = config.templateId === 'category' ? null : config.templateId as TemplateTheme;
    }
  } else if (slug && themeMap[slug]) {
    templateSlug = slug;
    theme = themeMap[slug];
  }

  const data = templateSlug ? loadProjectData(templateSlug, projectId) : null;

  if (!data || !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">데모를 찾을 수 없습니다</h1>
          <a href="/samples" className="text-primary font-semibold hover:underline">
            샘플 목록으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return <TemplateLayout data={data} theme={theme} />;
}
