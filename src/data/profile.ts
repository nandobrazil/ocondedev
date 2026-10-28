export const profile = {
  name: 'Fernando Conde',
  title: 'Engenheiro de software full-stack',
  city: 'Curitiba, Brasil',
  since: 2015,
  headline: { before: 'Construo ', accent: 'produtos inteiros', after: ' e opero a infra que os sustenta.' },
  highlights: [
    { title: 'Do banco ao deploy.', detail: 'Produto, código, infra e operação na mesma mão.' },
    { title: 'Angular e .NET no dia a dia.', detail: 'Node, Go, Python e SvelteKit nos meus produtos.' },
    { title: 'Dois apps na App Store.', detail: 'E agentes de IA rodando em produção.' },
  ],
  focus: ['Angular', '.NET', 'SvelteKit', 'Go', 'Kubernetes', 'Agentes de IA'],
  intro: [
    'Construo produtos inteiros: do banco de dados ao deploy, com a infra que eu mesmo opero.',
    'Angular e TypeScript desde 2019, .NET e C# desde 2015; hoje também Node, Go, Python, Kubernetes, dois apps publicados na App Store e agentes de IA em produção.',
  ],
  email: 'me@oconde.dev',
  links: {
    github: 'https://github.com/nandobrazil',
    linkedin: 'https://linkedin.com/in/nandobrazil',
    tools: 'https://tools.oconde.dev',
  },
  stats: [
    { value: `${new Date().getFullYear() - 2015}+`, label: 'anos programando' },
    { value: '14', label: 'projetos próprios' },
    { value: '2', label: 'apps na App Store' },
    { value: '3', label: 'SDKs publicados' },
  ],
};
