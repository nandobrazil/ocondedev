---
name: AnunciaBem
tagline: Plataforma multi-tenant para lojistas publicarem o catálogo em vitrine própria e em canais como a OLX.
category: lab
status: preview
period: 2025 – 2026
role: Produto, código e infra
stack:
  - NestJS
  - Prisma
  - PostgreSQL
  - Angular
  - Astro
  - Cloudflare Workers
  - Redis
links:
  site: https://anunciabem.com.br
cover: ./desktop.webp
mobile: ./mobile.webp
gallery:
  - src: ./app.webp
    caption: Entrada do painel do lojista em app.anunciabem.com.br
order: 7
---

## O problema

Lojistas pequenos mantêm o catálogo numa planilha e republicam os anúncios na OLX um a um, respondendo o chat pelo celular. Quando o anúncio vence, o produto some.

## O que eu construí

A segunda versão da plataforma: catálogo por loja, vitrine própria publicada na borda, integração com a OLX com chat, modelos de anúncio e agendamento de publicações, painéis administrativos e landing. Multi-tenant de ponta a ponta, com backup diário no R2.

## Decisões que valem contar

- As vitrines rodam em Cloudflare Workers: a loja continua no ar mesmo se o cluster cair.
- A versão 1 ficou só com o banco, migrado linha a linha para a v2 antes de desligar.
- Redis com usuário ACL e banco próprios dentro da plataforma compartilhada da VPS, sem instância dedicada.
