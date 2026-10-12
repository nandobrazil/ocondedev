export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    company: 'Fretefy',
    role: 'Desenvolvedor Full-stack Pleno',
    period: 'Fev 2025 – hoje',
    location: 'Curitiba, PR',
    type: 'Tempo integral · Híbrido',
    summary: 'SaaS para logística: gestão de transporte, pátio e entregas.',
    bullets: [
      'Sistemas de gestão de transporte (TMS), pátio (YMS) e entregas (DMS) em Angular, C#, .NET e Azure Functions.',
      'Arquitetura de microsserviços com ESB e Saga Pattern; NgRx e RxJS no front.',
      'Ferramenta interna de suporte com servidor MCP, para a equipe consultar a operação em linguagem natural.',
    ],
  },
  {
    company: 'DNA Specialty',
    role: 'Desenvolvedor Full-stack Pleno',
    period: 'Mai 2023 – Fev 2025',
    location: 'Remoto',
    type: 'Tempo integral',
    summary: 'Comercialização de medicamentos de alta complexidade entre indústrias e instituições de saúde.',
    bullets: [
      'Sistema de gestão do ciclo licitatório conectando indústrias farmacêuticas e hospitais.',
      'Aplicações full-stack em Angular 7+ e .NET C#, com MySQL.',
      'Integração contínua no Azure DevOps e Kanban no dia a dia.',
    ],
  },
  {
    company: 'DNA Specialty',
    role: 'Desenvolvedor Front-end',
    period: 'Out 2022 – Abr 2023',
    location: 'Ribeirão Preto, SP',
    type: 'Tempo integral',
    summary: 'Front-end das aplicações web da empresa.',
    bullets: [
      'Interfaces em Angular consumindo APIs REST, com Azure DevOps e métodos ágeis.',
    ],
  },
  {
    company: 'Totem TI',
    role: 'Desenvolvedor Front-end',
    period: 'Jul 2022 – Jun 2024',
    location: 'Cuiabá, MT',
    type: 'Terceirizado',
    summary: 'Soluções para o setor público.',
    bullets: [
      'Front-end em Angular 6+ em vários projetos de governo.',
      'Ajustes de back-end e funcionalidades novas em Java e Spring Boot.',
    ],
  },
  {
    company: 'Totem TI',
    role: 'Desenvolvedor Full-stack',
    period: 'Dez 2021 – Jun 2022',
    location: 'Cuiabá, MT',
    type: 'Freelance',
    summary: 'Setor público, como freelancer.',
    bullets: [
      'Front-end em Angular 6+, back-end e correções em Java e Spring Boot.',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Consultor de Soluções Customizadas II',
    period: 'Mar 2022 – Jul 2022',
    location: 'Salvador, BA',
    type: 'Tempo integral',
    summary: 'Alocado no Banco do Brasil.',
    bullets: [
      'Soluções em Java, JSP e jQuery para o maior banco da América Latina.',
    ],
  },
  {
    company: 'Totem TI',
    role: 'Desenvolvedor de Software',
    period: 'Set 2021 – Nov 2021',
    location: 'Cuiabá, MT',
    type: 'Tempo integral',
    summary: 'Entrada na empresa, com formação em Java, Spring e Angular.',
    bullets: [
      'Treinamento em Java, Spring, Angular, Jira e Bitbucket aplicado em projetos de clientes.',
    ],
  },
  {
    company: 'Frinfo Consultoria',
    role: 'Fundador',
    period: 'Abr 2021 – Ago 2023',
    location: 'Curitiba, PR',
    type: 'Tempo integral · Remoto',
    summary: 'Consultoria de software própria, com clientes de vários segmentos.',
    bullets: [
      'Soluções sob medida em Angular 10+, Java/Spring Boot, C#, Oracle, MySQL e PostgreSQL.',
      'DevOps com Jenkins, Docker e Kubernetes; interfaces com Tailwind CSS e PrimeNG.',
      'Relacionamento com clientes, proposta, entrega e operação.',
    ],
  },
  {
    company: 'Rocket IT',
    role: 'Desenvolvedor Front-end',
    period: 'Fev 2020 – Ago 2021',
    location: 'Florianópolis, SC',
    type: 'Terceirizado · Remoto',
    summary: 'Consultoria de software, com projetos em Angular e Java.',
    bullets: [
      'Angular nas versões mais recentes da época e back-end em Java com Spring Boot.',
      'Scrum com Jira; CI/CD com Jenkins; Google Cloud, Storage, RabbitMQ, SQL Server e PostgreSQL.',
      'Primeiros projetos com Next.js.',
    ],
  },
  {
    company: 'Air Software TI',
    role: 'Desenvolvedor de Software',
    period: 'Jun 2015 – Mai 2016',
    location: 'Cuiabá, MT',
    type: 'Meio período',
    summary: 'Startup de gestão para o setor público.',
    bullets: [
      'Módulos de contabilidade, inventário e gestão acadêmica em Web Forms, VB.NET e SQL Server.',
    ],
  },
];
