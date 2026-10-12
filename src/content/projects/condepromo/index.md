---
name: CondePromo
tagline: Motor de descoberta de promoções do Mercado Livre com curadoria, publicação por canal e gateway de agentes.
category: lab
status: frozen
period: 2025 – 2026
role: Produto, código e operação
host: promo.oconde.dev
stack:
  - NestJS
  - SvelteKit
  - PostgreSQL
  - Redis
  - Cloudflare Workers
  - MCP
  - Agentes Claude
links: {}
cover: ./desktop.webp
mobile: ./mobile.webp
order: 10
---

## O problema

Achar promoção de verdade no meio de milhares de anúncios, confirmar que o produto é o que diz ser e publicar com link de afiliado na hora certa é trabalho de gente, todo dia, e cansa em uma semana.

## O que eu construí

Grupos de busca editáveis (categorias, palavras-chave, frequência), um pipeline que resolve a identidade do produto e lê os sinais oficiais do Mercado Livre, agentes revisores que dão opinião sobre cada candidato, aprovação do operador no cartão e publicação por canal no Telegram com link curto. Em volta, um gateway de agentes em que um único GET entrega o contexto inteiro e um servidor MCP só de leitura.

## Decisões que valem contar

- Determinístico primeiro, IA opcional: o pipeline funciona sem modelo nenhum, e a IA entra onde melhora a decisão.
- Revisor com janela de 30 minutos e rejeição terminal, congelado para medir contra a base antes de calibrar.
- O produto para clientes está congelado desde outubro de 2026; o painel segue servindo o operador, e a cobrança por Stripe espera o primeiro cliente real.
