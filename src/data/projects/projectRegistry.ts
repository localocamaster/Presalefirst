import type { ProjectConfig } from '../projectSchema';
import { zenithExample } from './zenith-example';

/**
 * 고객 프로젝트 레지스트리
 * 새 고객 추가 시:
 * 1. projects/{projectId}.ts 파일 생성 (zenith-example.ts 참고)
 * 2. 아래 projectConfigs에 등록
 */
export const projectConfigs: Record<string, ProjectConfig> = {
  'zenith-example': zenithExample,
};

export function getProjectConfig(projectId: string): ProjectConfig | null {
  return projectConfigs[projectId] ?? null;
}
