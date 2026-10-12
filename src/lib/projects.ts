import type { CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectStatus = Project['data']['status'];
export type ProjectCategory = Project['data']['category'];

export const statusLabel: Record<ProjectStatus, string> = {
  live: 'No ar',
  preview: 'Prévia',
  frozen: 'Congelado',
  archived: 'Arquivado',
  private: 'Privado',
};

export const categoryLabel: Record<ProjectCategory, string> = {
  product: 'Produtos',
  lab: 'Laboratório',
  infra: 'Infra e ferramentas',
  library: 'Bibliotecas',
  personal: 'Pessoal',
};

export const categoryOrder: ProjectCategory[] = ['product', 'lab', 'infra', 'library', 'personal'];

export const linkLabel: Record<keyof Project['data']['links'], string> = {
  site: 'Site',
  docs: 'Docs',
  status: 'Status',
  repo: 'Repositório',
  package: 'Pacote',
  store: 'App Store',
};

export const sortProjects = (projects: Project[]) => [...projects].sort((a, b) => a.data.order - b.data.order);

export const featuredProjects = (projects: Project[]) =>
  projects
    .filter((project) => project.data.featured !== undefined)
    .sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0))
    .slice(0, 6);

export const relatedProjects = (projects: Project[], current: Project, count = 3) => {
  const others = sortProjects(projects).filter((project) => project.id !== current.id);
  const sameCategory = others.filter((project) => project.data.category === current.data.category);
  const rest = others.filter((project) => project.data.category !== current.data.category);
  return [...sameCategory, ...rest].slice(0, count);
};

export const projectHost = (project: Project) => {
  if (project.data.host) return project.data.host;
  const url = project.data.links.site ?? project.data.links.docs ?? project.data.links.status;
  return url ? new URL(url).host : project.data.name.toLowerCase();
};
