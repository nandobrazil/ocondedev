---
name: VendeFlow
tagline: Um vídeo pronto, publicado em várias plataformas a partir de um painel só.
category: lab
status: frozen
period: "2026"
role: Produto e código
host: vendeflow.oconde.dev
stack:
  - Go
  - PostgreSQL
  - FFmpeg
  - SvelteKit
  - nginx
  - OAuth
links: {}
cover: ./desktop.webp
mobile: ./mobile.webp
order: 9
---

## O problema

Quem produz vídeo curto exporta uma vez e sobe quatro vezes: YouTube, TikTok, Instagram, Shopee. Cada plataforma com o próprio formato, limite e tela de upload.

## O que eu construí

Um backend em Go que recebe o vídeo, ajusta o formato com FFmpeg, autentica em cada plataforma por OAuth e publica, com fila, retentativas e status por destino. O painel em SvelteKit mostra tudo, e uma sugestão de título e descrição por IA, com provedor trocável e cota mensal, ajuda a preencher.

## Decisões que valem contar

- Go para ter um binário pequeno orquestrando FFmpeg, sem runtime pesado no servidor.
- YouTube Shorts funciona de verdade; Instagram tem OAuth em modo de desenvolvimento; TikTok espera a auditoria do app, que é o que mantém o projeto congelado.
- Vídeos num volume local de 20 GB e migrations como passo manual, para o deploy nunca mexer no banco sem eu olhar.
