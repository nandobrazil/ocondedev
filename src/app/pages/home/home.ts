import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const FRONTEND_SINCE = 2019;
const BACKEND_SINCE = 2022;

@Component({
  selector: 'c-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [RouterLink]
})
export class HomeComponent {
  yearFront = new Date().getFullYear() - FRONTEND_SINCE;
  yearBack = new Date().getFullYear() - BACKEND_SINCE;
  featuredProjects: Project[] = [
    {
      title: 'Sistema Inteligente de Gestão de Licitações',
      description: 'Solução completa para gestão do ciclo licitatório conectando indústrias farmacêuticas e instituições de saúde.',
      technologies: ['Angular 20', 'TypeScript', '.NET C#', 'MySQL', 'Redis'],
      icon: '🏘️'
    },
    {
      title: 'SaaS Gestão de Anúncios',
      description: 'Solução automatizada para gestão em massa de anúncios OLX incluindo chat integrado, templates e agendamento de publicações.',
      technologies: ['Angular 20', 'TypeScript', 'NodeJS', 'NestJS', 'PostgreSQL'],
      icon: '🎨'
    }
  ];

  topSkills: string[] = [
    '.NET C#', 'Azure DevOps Server', 'Azure Functions', 'Micro services', 'Angular',
    'TypeScript', 'Git', 'NgRx', 'RxJS', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Node.js',
    'Tailwind', 'Docker', 'Redis', 'HTML', 'CSS', 'JavaScript', 'SCSS'
  ];

  stats: Stat[] = [
    { value: `${this.yearFront}+`, label: 'Anos de experiência', icon: '⏱️' },
    { value: '30+', label: 'Projetos', icon: '🚀' },
    { value: '6', label: 'Empresas', icon: '🏢' }
  ];
}
