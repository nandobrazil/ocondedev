export const profile = {
  name: 'Fernando Conde',
  title: 'Engenheiro de software full-stack',
  city: 'Curitiba, Brasil',
  since: 2015,
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
