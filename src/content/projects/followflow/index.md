---
name: FollowFlow
tagline: Painel para limpar quem você segue no Instagram, em rodadas lentas e com créditos por uso.
category: lab
status: preview
period: 2026 – hoje
role: Produto e código
stack:
  - TypeScript
  - PostgreSQL
  - Playwright
  - Google Cloud Run
  - Mercado Pago
  - Extensão Chrome
links:
  site: https://seguimores.oconde.dev
cover: ./desktop.webp
mobile: ./mobile.webp
order: 6
---

## O problema

Deixar de seguir quem não segue de volta, à mão, leva horas e, feito em rajada, rende bloqueio do Instagram. Os serviços que prometem fazer isso pedem a senha da conta.

## O que eu construí

Uma extensão coleta a lista de seguidores e seguindo direto do navegador da pessoa; o painel cruza as listas e mostra quem não segue de volta; a limpeza acontece em rodadas lentas, em workers do Cloud Run, um container por execução. Cobrança por créditos pagos com Pix, primeira análise grátis e um tour para quem chega.

## Decisões que valem contar

- O Mercado Pago aceita um webhook por aplicativo, e ele já está em uso por outro produto meu, então o Pix aqui confirma por consulta periódica.
- Rodadas lentas em horário humano, com limite por rodada, para a conta não parecer um robô.
- Está em prévia: só eu uso, com autocadastro aberto, até ter a primeira limpeza paga por alguém de fora.
