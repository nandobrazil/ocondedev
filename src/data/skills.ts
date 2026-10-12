export type SkillLevel = 'daily' | 'solid' | 'used';

export interface Skill {
  name: string;
  level: SkillLevel;
  note: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const levelLabel: Record<SkillLevel, string> = {
  daily: 'uso todo dia',
  solid: 'uso bem',
  used: 'já usei',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    items: [
      { name: 'Angular', level: 'daily', note: 'Desde a versão 6; hoje na 21, com signals e componentes standalone' },
      { name: 'TypeScript', level: 'daily', note: 'Em tudo que escrevo no front e no Node' },
      { name: 'SvelteKit', level: 'daily', note: 'arvorede.link, Radar e os painéis novos' },
      { name: 'Astro', level: 'solid', note: 'Este site e as docs do Radar' },
      { name: 'Next.js', level: 'solid', note: 'Site da Frinfo e o roteiro da Europa' },
      { name: 'Tailwind CSS', level: 'solid', note: 'Painéis e landings' },
      { name: 'NgRx e RxJS', level: 'solid', note: 'Estado e fluxos reativos em apps corporativos' },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'C# e .NET', level: 'daily', note: 'Do .NET Framework 3.5 ao .NET 10; APIs, Azure Functions e o SDK .NET do Radar' },
      { name: 'Node.js e NestJS', level: 'daily', note: 'API do Tredi, AnunciaBem, CondePromo e o SDK Node do Radar' },
      { name: 'Go', level: 'solid', note: 'Backend do VendeFlow e o Hub da VPS' },
      { name: 'Python', level: 'solid', note: 'SDK Python do Radar e automações' },
      { name: 'Java e Spring Boot', level: 'used', note: 'Setor público e consultoria, 2020 a 2023' },
    ],
  },
  {
    title: 'Dados',
    items: [
      { name: 'PostgreSQL', level: 'daily', note: 'Banco de tudo; WAL-G com restauração em ponto no tempo em produção' },
      { name: 'Redis', level: 'daily', note: 'Filas, cache e ACL por projeto' },
      { name: 'Prisma e Drizzle', level: 'daily', note: 'Migrations em Node e SvelteKit' },
      { name: 'SQL Server e MySQL', level: 'solid', note: 'Sistemas corporativos' },
      { name: 'MongoDB', level: 'used', note: 'Projetos de 2020 a 2022' },
    ],
  },
  {
    title: 'Infra e operação',
    items: [
      { name: 'Kubernetes', level: 'daily', note: 'Dois clusters k3s que eu opero: produção e laboratório' },
      { name: 'Docker', level: 'daily', note: 'Imagens multi-stage para tudo que publico' },
      { name: 'GitHub Actions', level: 'daily', note: 'Pipelines com runners próprios e imagens no GHCR' },
      { name: 'Traefik e cert-manager', level: 'solid', note: 'Ingress, TLS automático e middlewares' },
      { name: 'Cloudflare', level: 'solid', note: 'DNS, Workers e R2' },
      { name: 'Google Cloud', level: 'solid', note: 'Cloud Run para os workers do FollowFlow, GCS para os backups de produção' },
      { name: 'Azure', level: 'solid', note: 'Functions e DevOps no trabalho' },
    ],
  },
  {
    title: 'Observabilidade',
    items: [
      { name: 'Radar', level: 'daily', note: 'Minha plataforma de uptime, logs, erros e alertas, com SDKs em três linguagens' },
      { name: 'OpenTelemetry', level: 'solid', note: 'Traces distribuídos no Radar' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'React Native e Expo', level: 'solid', note: 'Dois apps publicados na App Store: CondeFin e Tredi' },
      { name: 'Flutter', level: 'used', note: 'Estudos e protótipos' },
    ],
  },
  {
    title: 'IA e agentes',
    items: [
      { name: 'MCP', level: 'daily', note: 'Servidores MCP no Radar, no CondePromo e numa ferramenta interna de suporte' },
      { name: 'Agentes com Claude', level: 'daily', note: 'Automação de operação e revisão de código no dia a dia' },
      { name: 'Playwright', level: 'daily', note: 'Automação de navegador no FollowFlow, em testes de ponta a ponta e nos prints deste site' },
    ],
  },
];
