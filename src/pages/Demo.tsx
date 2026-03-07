import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { loadProjectData } from '../data/projectLoader';
import { getProjectConfig } from '../data/projects/projectRegistry';
import TemplateLayout from '../templates/TemplateLayout';
import CategoryLayout from '../templates/CategoryLayout';
import Category2Layout from '../templates/Category2Layout';
import PremiumLayout from '../templates/PremiumLayout';
import PremiumSubLayout from '../templates/PremiumSubLayout';
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
  const { slug, subpage, projectId: projectIdParam } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const projectIdFromQuery = searchParams.get('project') ?? undefined;
  const projectId = projectIdParam ?? projectIdFromQuery;
  const isComplexRoute = location.pathname.includes('/complex/');
  const isUnitRoute = location.pathname.includes('/unit/');

  // Premium template check
  if (slug && premiumTemplates.has(slug)) {
    const premiumData = premiumSamples[slug];
    if (premiumData) {
      // Premium subpage (사업안내 등)
      if (subpage && premiumData.subPages?.some(sp => sp.pageId === subpage)) {
        return <PremiumSubLayout data={premiumData} slug={slug} subpageId={subpage} />;
      }
      return <PremiumLayout data={premiumData} slug={slug} />;
    }
  }

  // Category2 template check (multi-page + SNB)
  if (slug && category2Templates.has(slug)) {
    const category2Data = category2Samples[slug];
    if (category2Data) {
      return <Category2Layout data={category2Data} />;
    }
  }

  // Category template check (with optional business subpage)
  if (slug && categoryTemplates.has(slug)) {
    const categoryData = categorySamples[slug];
    if (categoryData) {
      return <CategoryLayout data={categoryData} subpage={isComplexRoute || isUnitRoute ? undefined : subpage} complexSubpage={isComplexRoute ? subpage : undefined} unitSubpage={isUnitRoute ? subpage : undefined} />;
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
