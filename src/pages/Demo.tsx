import { useParams, useSearchParams } from 'react-router-dom';
import { loadProjectData } from '../data/projectLoader';
import { getProjectConfig } from '../data/projects/projectRegistry';
import TemplateLayout from '../templates/TemplateLayout';

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

export default function Demo() {
  const { slug, projectId: projectIdParam } = useParams();
  const [searchParams] = useSearchParams();
  const projectIdFromQuery = searchParams.get('project') ?? undefined;
  const projectId = projectIdParam ?? projectIdFromQuery;

  let templateSlug: string | null = null;
  let theme: TemplateTheme | null = null;

  if (projectIdParam) {
    const config = getProjectConfig(projectIdParam);
    if (config) {
      templateSlug = config.templateId;
      theme = config.templateId;
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
