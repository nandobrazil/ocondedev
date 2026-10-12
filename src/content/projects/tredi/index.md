---
name: Tredi
tagline: App de treino e dieta para alunos e profissionais, com sincronização offline e vínculo entre contas.
category: product
status: live
period: 2026 – hoje
role: Produto, app, API e operação
stack:
  - React Native
  - Expo
  - NestJS
  - TypeScript
  - PostgreSQL
  - Kubernetes
links:
  site: https://tredi.oconde.dev
cover: ./desktop.webp
mobile: ./mobile.webp
featured: 2
order: 2
---

## O problema

Personal trainers e nutricionistas mandam planos por PDF e WhatsApp, o aluno perde o fio em uma semana, e os apps existentes ou são pesados demais ou cobram por aluno. Eu queria algo que funcionasse na academia sem sinal e que o profissional conseguisse acompanhar de verdade.

## O que eu construí

Um app para o aluno (treinos do dia, dieta, avaliações físicas, progresso, vídeos dos exercícios) e para o profissional (montar planos, acompanhar alunos, avaliar), com vínculo entre as duas pontas e notificações push. A API em NestJS cuida do sync offline, dos planos, das avaliações e dos vínculos. O app está publicado na App Store.

## Decisões que valem contar

- Sync offline-first por fila de mudanças: o aluno treina sem internet e o servidor resolve o que chegou depois.
- Os vídeos dos exercícios ficam em disco no servidor, com cópia semanal no Google Cloud Storage, em vez de um bucket pago por requisição.
- Banco no Postgres de produção com restauração em ponto no tempo desde outubro de 2026.
- Sem staging, por decisão de custo: a imagem é publicada por commit e voltar de versão é um clique no Redeploy.
