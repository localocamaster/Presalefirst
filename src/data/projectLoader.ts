import type { TemplateData } from './templateData';
import { templateSamples } from './templateData';
import type { ProjectConfig } from './projectSchema';
import { getProjectConfig } from './projects/projectRegistry';

/**
 * 템플릿 기본 데이터 + 고객 프로젝트 설정을 병합하여 TemplateData 반환
 * @param templateId - zenith | luxia | ssy | dalseo
 * @param projectId - 고객 프로젝트 ID (없으면 샘플 데이터 사용)
 */
export function loadProjectData(
  templateId: 'zenith' | 'luxia' | 'ssy' | 'dalseo',
  projectId?: string
): TemplateData | null {
  const base = templateSamples[templateId];
  if (!base) return null;

  if (!projectId) {
    return base;
  }

  const config = getProjectConfig(projectId);
  if (!config || config.templateId !== templateId) {
    return base;
  }

  return mergeProjectConfig(base, config);
}

function mergeProjectConfig(base: TemplateData, config: ProjectConfig): TemplateData {
  return {
    ...base,
    id: config.projectId,
    projectName: config.projectName,
    projectNameEn: config.projectNameEn ?? base.projectNameEn,
    brandLine: config.brandLine ?? base.brandLine,
    tagline: config.tagline,
    location: config.location,
    address: config.address,
    types: config.types,
    presaleDate: config.presaleDate,
    modelHouse: config.modelHouse,
    contactPhone: config.contactPhone,
    contactKakao: config.contactKakao ?? base.contactKakao,
    features: config.features,
    navItems: config.navItems,
    sections: config.sections,
    theme: {
      primary: config.theme.primary,
      headerBg: config.theme.headerBg ?? base.theme.headerBg,
      footerText: config.theme.footerText,
    },
  };
}
