---
name: Sites privados
tagline: Mais de dez sites de uso pessoal, para controles, planos e eventos da minha vida, que eu mesmo uso todo dia.
category: personal
status: private
period: 2021 – hoje
role: Código e operação
stack:
  - Next.js
  - SvelteKit
  - Angular
  - NestJS
  - SQLite
  - PostgreSQL
  - PWA
  - Kubernetes
links: {}
cover: ./desktop.webp
mobile: ./mobile.webp
order: 15
---

## O problema

Toda planilha que eu mantinha virava uma bagunça em um mês, e todo app pronto resolvia 80% do que eu precisava e cobrava pelos outros 20%. Para as coisas da minha vida, descobri que sai mais barato e dura mais escrever um site pequeno, com login, do meu jeito, e deixar rodando no meu cluster.

## O que eu construí

São mais de dez sites privados, atrás de login, cada um com um banco pequeno e deploy pelo mesmo pipeline dos produtos. Alguns exemplos:

- **Titan**, PWA para acompanhar um protocolo de cutting: dieta, treino, cardio, suplementação e checklist diário, com geração de dieta por IA. Foi o protótipo do que virou o Tredi, que hoje está na App Store.
- **Confetti**, confirmação de presença de um evento de agosto de 2026, com lista de convidados e painel para o anfitrião. Arquivado depois da festa, com o código aberto no GitHub.
- **Roteiro Europa**, o plano de 20 dias por Paris, Suíça e Itália, com um Modo Viagem que mostra as paradas de cada dia, o Maps, os apps e os alertas do que não pode falhar. É o print desta página.
- **Fyn**, controle de finanças pessoais em Angular e NestJS, que antecedeu o CondeFin.
- **go.oconde.dev**, encurtador de links que roda inteiro num Cloudflare Worker, sem servidor.
- **Hub**, o espelho do cluster que também está nesta lista de projetos.

## Decisões que valem contar

- Cada site nasce de um modelo comum (login, banco, deploy, cartão no Hub), então sair do zero leva uma tarde.
- SQLite num volume persistente quando o banco é de duas pessoas; Postgres compartilhado quando precisa de mais.
- O que deixa de ser usado é arquivado com dump e registro no histórico, não apagado no susto.
- Um site pessoal que dá certo vira produto: foi o caminho do Titan para o Tredi e do Fyn para o CondeFin.
