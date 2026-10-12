export interface GithubRepo {
  name: string;
  description: string;
  url: string;
  language: string;
}

export const githubRepos: GithubRepo[] = [
  { name: 'radar-sdk', description: 'SDK do Radar para Node.js e NestJS', url: 'https://github.com/nandobrazil/radar-sdk', language: 'TypeScript' },
  { name: 'radar-sdk-python', description: 'SDK Python do Radar', url: 'https://github.com/nandobrazil/radar-sdk-python', language: 'Python' },
  { name: 'radar-sdk-dotnet', description: 'SDK do Radar para C# e .NET, do Framework 3.5 ao .NET 10', url: 'https://github.com/nandobrazil/radar-sdk-dotnet', language: 'C#' },
  { name: 'otp-auth', description: 'Autenticador OTP simples, só HTML, CSS e JS', url: 'https://github.com/nandobrazil/otp-auth', language: 'JavaScript' },
  { name: 'confetti', description: 'Confirmação de presença de um evento, em SvelteKit e SQLite (arquivado)', url: 'https://github.com/nandobrazil/confetti', language: 'Svelte' },
  { name: 'hcim-guide-plugin', description: 'Plugin para RuneLite com o guia HCIM do B0aty', url: 'https://github.com/nandobrazil/hcim-guide-plugin', language: 'Java' },
  { name: 'f-editor', description: 'Editor de texto rico para Angular 18', url: 'https://github.com/nandobrazil/f-editor', language: 'TypeScript' },
  { name: 'estoque-facil-web', description: 'SaaS de controle de estoque em Angular', url: 'https://github.com/nandobrazil/estoque-facil-web', language: 'TypeScript' },
  { name: 'saas-chat-app', description: 'Chat com tradução em tempo real, em Next.js', url: 'https://github.com/nandobrazil/saas-chat-app', language: 'TypeScript' },
  { name: 'plataformafy', description: 'App mobile para gestão de ganhos em plataformas', url: 'https://github.com/nandobrazil/plataformafy', language: 'TypeScript' },
  { name: 'BibliotecaDev', description: 'Biblioteca de livros essenciais de programação', url: 'https://github.com/nandobrazil/BibliotecaDev', language: 'Markdown' },
];
