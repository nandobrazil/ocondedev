---
name: Tredi
tagline: App de treino e dieta para alunos e profissionais, com sincronização offline e vínculo entre contas.
category: product
status: live
period: 2026 – hoje
role: Produto, app, web, API e operação
stack:
  - React Native
  - Expo
  - React
  - NestJS
  - TypeScript
  - PostgreSQL
  - Kubernetes
links:
  site: https://tredi.oconde.dev
  store: https://apps.apple.com/app/tredi-treino-e-dieta/id6820290912
cover: ./desktop.webp
coverLight: ./desktop-light.webp
mobile: ./mobile.webp
mobileLight: ./mobile-light.webp
gallery:
  - src: ./editor-light.webp
    caption: Editor de programa de treino na web, tema claro. Cada mudança é salva na hora, mesmo com a rede caindo.
  - src: ./editor-dark.webp
    caption: O mesmo editor no tema escuro (dados de demonstração).
featured: 2
order: 2
---

## O problema

Personal trainers e nutricionistas mandam planos por PDF e WhatsApp, o aluno perde o fio em uma semana, e os apps existentes ou são pesados demais ou cobram por aluno. Eu queria algo que funcionasse na academia sem sinal e que o profissional conseguisse acompanhar de verdade.

## O que eu construí

Um app para o aluno (treinos do dia, dieta, avaliações físicas, progresso, vídeos dos exercícios) e para o profissional (montar planos, acompanhar alunos, avaliar), com vínculo entre as duas pontas e notificações push. A API em NestJS cuida do sync offline, dos planos, das avaliações e dos vínculos. O app está publicado na App Store.

Na web, uma landing estática, a área da conta (perfil, sessões, solicitações, exportar os próprios dados) e, para o profissional, alunos, convites e um editor de programas de treino. Para a equipe, um backoffice com login em duas etapas para responder as solicitações dos usuários.

## Decisões que valem contar

- Sync offline-first por fila de mudanças: o aluno treina sem internet e o servidor resolve o que chegou depois.
- O editor web não guarda rascunho no navegador: cada alteração vai para a API por uma fila que junta o que foi digitado, reenvia quando a rede volta e pausa se a sessão vence. Perder o treino montado foi a reclamação mais citada contra os concorrentes.
- A landing usa as reclamações mais comuns em cerca de 800 avaliações de apps concorrentes como chamadas, sem citar marcas e só com o que o app já faz.
- Os vídeos dos exercícios ficam em disco no servidor, com cópia semanal no Google Cloud Storage, em vez de um bucket pago por requisição.
- Banco no Postgres de produção com restauração em ponto no tempo desde outubro de 2026.
- Sem staging, por decisão de custo: a imagem é publicada por commit e voltar de versão é um clique no Redeploy.
