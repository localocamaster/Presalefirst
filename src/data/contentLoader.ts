/**
 * 고객 프로젝트 콘텐츠 로더
 * public/content/projects/{projectId}/config.json 에서 JSON을 불러와
 * 템플릿 기본 데이터와 병합합니다.
 * 고객이 자료(사진, 영상, 문구)를 보내면 config.json만 수정하면 됩니다.
 */

import type { PremiumTemplateData } from '../templates/premiumTypes';
import type { TemplateData } from './templateData';
import { premiumSamples } from './premiumSamples';
import { templateSamples } from './templateData';

const CONTENT_BASE = '/content/projects';

export interface ContentProjectEntry {
  projectId: string;
  templateId: string;
  projectName: string;
  enabled?: boolean;
}

export interface ContentRegistry {
  projects: ContentProjectEntry[];
}

let registryCache: ContentRegistry | null = null;

/** 프로젝트 레지스트리 조회 (캐시) */
export async function getContentRegistry(): Promise<ContentRegistry> {
  if (registryCache) return registryCache;
  try {
    const res = await fetch(`${CONTENT_BASE}/projectRegistry.json`);
    if (!res.ok) throw new Error('Registry not found');
    registryCache = await res.json();
    return registryCache!;
  } catch {
    return { projects: [] };
  }
}

/** content 기반 프로젝트인지 확인 */
export async function hasContentProject(projectId: string): Promise<boolean> {
  const reg = await getContentRegistry();
  return reg.projects.some((p) => p.projectId === projectId && p.enabled !== false);
}

/** content config.json 로드 */
async function fetchProjectConfig(projectId: string): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(`${CONTENT_BASE}/${projectId}/config.json`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/** 이미지 경로 처리: "main01.jpg" → "/images/projects/xxx/main01.jpg" */
function resolveImagePath(basePath: string, path: string): string {
  if (!path) return path;
  if (path.startsWith('http') || path.startsWith('/')) return path;
  const base = basePath.replace(/\/$/, '');
  return `${base}/${path}`;
}

/** 객체/배열 내 이미지 경로 재귀 처리 */
function resolvePaths(obj: unknown, basePath: string): unknown {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => resolvePaths(item, basePath));
  }
  const result: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === 'image' || k === 'src' || k === 'backgroundImage' || k === 'mainImage' || k === 'subVisualImage' || k === 'modelHouseImage' || k === 'siteImage' || k.endsWith('Image')) {
      result[k] = typeof v === 'string' ? resolveImagePath(basePath, v) : v;
    } else if (k === 'slides' || k === 'items' || k === 'sections' || k === 'features') {
      result[k] = resolvePaths(v, basePath);
    } else {
      result[k] = resolvePaths(v, basePath);
    }
  }
  return result;
}

/** 프리미엄형: content config + base 템플릿 병합 */
export async function loadPremiumContent(
  templateId: string,
  projectId: string
): Promise<PremiumTemplateData | null> {
  const base = premiumSamples[templateId] as PremiumTemplateData | undefined;
  if (!base) return null;

  const config = await fetchProjectConfig(projectId);
  if (!config) return null;

  const basePath = (config.imageBasePath as string) || `/images/projects/${projectId}`;
  const resolved = resolvePaths(config, basePath) as Record<string, unknown>;

  const merged: PremiumTemplateData = {
    ...base,
    id: (config.projectId as string) || projectId,
    projectName: (config.projectName as string) || base.projectName,
    projectNameEn: (config.projectNameEn as string) || base.projectNameEn,
    brandLine: (config.brandLine as string) || base.brandLine,
    contactPhone: (config.contactPhone as string) || base.contactPhone,
  };

  if (resolved.hero) Object.assign(merged.hero!, resolved.hero);
  if (resolved.overview) Object.assign(merged.overview!, resolved.overview);
  if (resolved.premium) Object.assign(merged.premium!, resolved.premium);
  if (resolved.map) Object.assign(merged.map!, resolved.map);
  if (resolved.registration) Object.assign(merged.registration!, resolved.registration);
  if (resolved.videos) Object.assign(merged.videos!, resolved.videos);
  if (resolved.theme) Object.assign(merged.theme!, resolved.theme);

  return merged;
}

/** 모던형(zenith 등): content config + base 템플릿 병합 */
export async function loadTemplateContent(
  templateId: string,
  projectId: string
): Promise<TemplateData | null> {
  const base = templateSamples[templateId] as TemplateData | undefined;
  if (!base) return null;

  const config = await fetchProjectConfig(projectId);
  if (!config) return null;

  const basePath = (config.imageBasePath as string) || `/images/projects/${projectId}`;
  const resolved = resolvePaths(config, basePath) as Record<string, unknown>;

  return {
    ...base,
    id: (config.projectId as string) || projectId,
    projectName: (config.projectName as string) || base.projectName,
    projectNameEn: (config.projectNameEn as string) || base.projectNameEn,
    brandLine: (config.brandLine as string) || base.brandLine,
    tagline: (config.tagline as string) || base.tagline,
    location: (config.location as string) || base.location,
    address: (config.address as string) || base.address,
    contactPhone: (config.contactPhone as string) || base.contactPhone,
    contactKakao: (config.contactKakao as string) || base.contactKakao,
    types: (resolved.types as TemplateData['types']) || base.types,
    presaleDate: (config.presaleDate as string) || base.presaleDate,
    modelHouse: (resolved.modelHouse as TemplateData['modelHouse']) || base.modelHouse,
    features: (config.features as string[]) || base.features,
    sections: (resolved.sections as TemplateData['sections']) || base.sections,
    theme: {
      ...base.theme,
      ...(resolved.theme as object),
    },
  } as TemplateData;
}
