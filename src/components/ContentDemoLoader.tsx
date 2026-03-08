import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TemplateLayout from '../templates/TemplateLayout';
import PremiumLayout from '../templates/PremiumLayout';
import PremiumSubLayout from '../templates/PremiumSubLayout';
import {
  getContentRegistry,
  loadPremiumContent,
  loadTemplateContent,
} from '../data/contentLoader';
import { loadProjectData } from '../data/projectLoader';
import { getProjectConfig } from '../data/projects/projectRegistry';

type TemplateTheme = 'zenith' | 'luxia' | 'ssy' | 'dalseo';

const themeMap: Record<string, TemplateTheme> = {
  zenith: 'zenith',
  luxia: 'luxia',
  ssy: 'ssy',
  dalseo: 'dalseo',
};

const premiumTemplates = new Set(['premium-forest', 'premium-parkview', 'premium-freshhouse', 'premium-priel', 'premium-oceancity']);

export default function ContentDemoLoader() {
  const { projectId, subpage } = useParams();
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [content, setContent] = useState<{
    type: 'premium' | 'template';
    data: unknown;
    templateId: string;
    theme?: TemplateTheme;
  } | null>(null);

  useEffect(() => {
    if (!projectId) {
      setStatus('error');
      return;
    }

    let cancelled = false;

    async function load() {
      const reg = await getContentRegistry();
      const entry = reg.projects.find((p) => p.projectId === projectId && p.enabled !== false);

      if (entry) {
        if (premiumTemplates.has(entry.templateId)) {
          const data = await loadPremiumContent(entry.templateId, projectId);
          if (!cancelled && data) {
            setContent({ type: 'premium', data, templateId: entry.templateId });
            setStatus('ready');
            return;
          }
        } else {
          const data = await loadTemplateContent(entry.templateId, projectId);
          if (!cancelled && data) {
            const theme = themeMap[entry.templateId] || 'zenith';
            setContent({ type: 'template', data, templateId: entry.templateId, theme });
            setStatus('ready');
            return;
          }
        }
      }

      if (!cancelled) {
        const config = getProjectConfig(projectId);
        if (config) {
          if (premiumTemplates.has(config.templateId)) {
            const data = await loadPremiumContent(config.templateId, projectId);
            if (data) {
              setContent({ type: 'premium', data, templateId: config.templateId });
              setStatus('ready');
              return;
            }
          }
          const templateData = loadProjectData(config.templateId, projectId);
          if (templateData) {
            const theme = config.templateId === 'category' ? undefined : (config.templateId as TemplateTheme);
            if (theme) {
              setContent({ type: 'template', data: templateData, templateId: config.templateId, theme });
              setStatus('ready');
              return;
            }
          }
        }
        setStatus('error');
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-pulse text-gray-500">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (status === 'error' || !content) {
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

  if (content.type === 'premium') {
    const data = content.data as Parameters<typeof PremiumLayout>[0]['data'];
    const slug = content.templateId;
    const hasSubpage = subpage && data.subPages?.some((sp: { pageId: string }) => sp.pageId === subpage);
    if (hasSubpage && subpage) {
      return <PremiumSubLayout data={data} slug={slug} subpageId={subpage} />;
    }
    return <PremiumLayout data={data} slug={slug} />;
  }

  if (content.type === 'template' && content.theme) {
    return <TemplateLayout data={content.data as Parameters<typeof TemplateLayout>[0]['data']} theme={content.theme} />;
  }

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
