import { useParams, useSearchParams } from 'react-router-dom';
import { loadProjectData } from '../data/projectLoader';
import { getProjectConfig } from '../data/projects/projectRegistry';
import TemplateLayout from '../templates/TemplateLayout';

const validSlugs = ['zenith', 'luxia', 'ssy', 'dalseo'] as const;

export default function Demo() {
  const { slug, projectId: projectIdParam } = useParams();
  const [searchParams] = useSearchParams();
  const projectIdFromQuery = searchParams.get('project') ?? undefined;
  const projectId = projectIdParam ?? projectIdFromQuery;

  // /p/:projectId 경로: projectConfig에서 templateId 추출
  // /demo/:slug 경로: slug가 templateId
  let templateId: (typeof validSlugs)[number] | null = null;
  if (projectIdParam) {
    const config = getProjectConfig(projectIdParam);
    templateId = config?.templateId ?? null;
  } else if (slug && validSlugs.includes(slug as (typeof validSlugs)[number])) {
    templateId = slug as (typeof validSlugs)[number];
  }

  const data = templateId ? loadProjectData(templateId, projectId) : null;

  if (!data) {
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

  return <TemplateLayout data={data} theme={templateId!} />;
}
