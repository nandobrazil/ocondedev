import {Component} from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}

interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  responsibilities: string[];
}

@Component({
  selector: 'c-resume',
  templateUrl: 'resume.html',
  styleUrls: ['resume.scss'],
})
export class ResumeComponent {
  year = (new Date().getFullYear() - 2019);
  skills: Skill[] = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'C#', icon: '#' },
    { name: '.NET', icon: '•NET' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Azure Functions' },
    { name: 'Azure DevOps' },
    { name: 'Microservices' },
    { name: 'NgRx' },
    { name: 'RxJS' },
    { name: 'SQL Server' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot' },
    { name: 'Git' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes' },
    { name: 'Angular Material' },
    { name: 'PrimeNG' },
    { name: 'Tailwind CSS' },
    { name: 'SCSS' },
    { name: 'ESB' },
    { name: 'Saga Pattern' },
    { name: 'Agile/Scrum' },
    { name: 'Jenkins' },
    { name: 'Oracle' },
    { name: 'RabbitMQ' },
    { name: 'Google Cloud' }
  ];

  workHistory: Job[] = [
    {
      title: 'Desenvolvedor Fullstack Pl',
      company: 'Fretefy',
      location: '🇧🇷 Curitiba, Paraná, Brasil',
      type: 'Tempo Integral · Híbrido',
      period: 'Fev 2025 - Presente',
      responsibilities: [
        'Atuando em uma empresa de tecnologia especializada em soluções SaaS para o setor logístico.',
        'Desenvolvendo sistemas integrados para gestão de transporte (TMS), gestão de pátio (YMS) e gestão de entregas (DMS).',
        'Construindo soluções escaláveis usando Angular, C#, .NET Framework e Azure Functions.',
        'Implementando arquitetura de microsserviços com ESB e Saga Pattern.',
        'Trabalhando com NgRx para gerenciamento de estado e RxJS para programação reativa.'
      ]
    },
    {
      title: 'Desenvolvedor Fullstack Pl',
      company: 'DNA Specialty',
      location: '🇧🇷 Remoto',
      type: 'Tempo Integral',
      period: 'Mai 2023 - Fev 2025 · 1 ano 10 meses',
      responsibilities: [
        'Desenvolvi soluções para o segmento de medicamentos de alta complexidade.',
        'Criei modelos inovadores para comercialização entre indústrias e instituições de saúde.',
        'Construí aplicações fullstack usando Angular 7+ e .NET C#.',
        'Implementei integração contínua com Azure DevOps.',
        'Trabalhei com banco de dados MySQL e metodologias Ágeis (Kanban).'
      ]
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'DNA Specialty',
      location: '🇧🇷 Ribeirão Preto, São Paulo, Brasil',
      type: 'Tempo Integral',
      period: 'Out 2022 - Abr 2023 · 7 meses',
      responsibilities: [
        'Focado no desenvolvimento front-end com tecnologias web modernas.',
        'Trabalhei com metodologias Ágeis e Azure DevOps.',
        'Desenvolvi aplicações web com integração MySQL.',
        'Implementei APIs e consumi serviços RESTful.'
      ]
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Totem TI',
      location: '🇧🇷 Cuiabá, Mato Grosso, Brasil',
      type: 'Terceirizado',
      period: 'Jul 2022 - Jun 2024 · 2 anos',
      responsibilities: [
        'Trabalhei em múltiplos projetos focados em soluções para o setor público.',
        'Desenvolvi aplicações frontend usando Angular 6+.',
        'Implementei ajustes de backend e novas funcionalidades usando Java e Spring Boot.',
        'Apliquei boas práticas em gerenciamento de banco de dados e desenvolvimento TypeScript.'
      ]
    },
    {
      title: 'Desenvolvedor Fullstack',
      company: 'Totem TI',
      location: '🇧🇷 Cuiabá, Mato Grosso, Brasil',
      type: 'Freelance',
      period: 'Dez 2021 - Jun 2022 · 7 meses',
      responsibilities: [
        'Desenvolvi soluções para o setor público como desenvolvedor freelance.',
        'Trabalhei principalmente como desenvolvedor frontend usando Angular 6+.',
        'Implementei funcionalidades de backend e correções de bugs usando Java e Spring Boot.'
      ]
    },
    {
      title: 'Desenvolvedor de Software',
      company: 'Totem TI',
      location: '🇧🇷 Cuiabá, Mato Grosso, Brasil',
      type: 'Tempo Integral',
      period: 'Set 2021 - Nov 2021 · 3 meses',
      responsibilities: [
        'Trabalhei em soluções de TI para ajudar clientes a se tornarem mais ágeis e competitivos.',
        'Recebi treinamento em Java, Spring, Angular, Jira e Bitbucket.',
        'Aprendi e apliquei práticas de desenvolvimento de software empresarial.'
      ]
    },
    {
      title: 'CEO & Fundador',
      company: 'Frinfo Consultoria',
      location: '🇧🇷 Curitiba, Paraná, Brasil',
      type: 'Tempo Integral · Remoto',
      period: 'Abr 2021 - Ago 2023 · 2 anos 5 meses',
      responsibilities: [
        'Fundei uma consultoria de software para desenvolver soluções personalizadas de alta qualidade.',
        'Gerenciei relacionamentos com clientes e entreguei software eficiente e escalável.',
        'Trabalhei com Angular 10+, Java/Spring Boot, C#, Oracle, MySQL.',
        'Implementei práticas DevOps usando Jenkins, Docker e Kubernetes.',
        'Projetei e desenvolvi soluções com PostgreSQL, Tailwind CSS e PrimeNG.'
      ]
    },
    {
      title: 'Consultor de Soluções Customizadas II',
      company: 'Capgemini',
      location: '🇧🇷 Salvador, Bahia, Brasil',
      type: 'Tempo Integral',
      period: 'Mar 2022 - Jul 2022 · 5 meses',
      responsibilities: [
        'Trabalhei em parcerias para transformar a gestão empresarial através da tecnologia.',
        'Alocado no Banco do Brasil, o maior banco da América Latina.',
        'Desenvolvi soluções com ênfase em Java, JSP e jQuery.'
      ]
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Rocket IT',
      location: '🇧🇷 Florianópolis, Santa Catarina, Brasil',
      type: 'Terceirizado · Remoto',
      period: 'Fev 2020 - Ago 2021 · 1 ano 7 meses',
      responsibilities: [
        'Trabalhei como desenvolvedor frontend terceirizado para consultoria de software.',
        'Desenvolvi com as versões mais recentes do Angular (14+).',
        'Implementei funcionalidades de backend usando Java e Spring Boot.',
        'Apliquei metodologias Ágeis (Scrum) com Jira para gerenciamento de projetos.',
        'Usei CI/CD com Jenkins, Google Cloud, Storage, RabbitMQ, SQL Server e PostgreSQL.',
        'Estudei e desenvolvi projetos com Next.js.'
      ]
    },
    {
      title: 'Desenvolvedor de Software',
      company: 'Air Software TI',
      location: '🇧🇷 Cuiabá, Mato Grosso, Brasil',
      type: 'Meio Período',
      period: 'Jun 2015 - Mai 2016 · 1 ano',
      responsibilities: [
        'Trabalhei em uma startup focada em gestão do setor público.',
        'Desenvolvi módulos para contabilidade, inventário e gestão acadêmica.',
        'Criei novas funcionalidades para módulos existentes.',
        'Mantive módulos construídos com Web Forms, SQL Server e VB.NET.'
      ]
    }
  ];
}
