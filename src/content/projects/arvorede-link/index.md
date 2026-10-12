---
name: arvorede.link
tagline: Páginas de links de afiliado com contagem de cliques, workspace por usuário e domínio próprio.
category: product
status: live
period: 2026 – hoje
role: Produto, código, infra e operação
stack:
  - SvelteKit
  - TypeScript
  - PostgreSQL
  - Cloudflare
  - GitHub Actions
  - Kubernetes
links:
  site: https://arvorede.link
cover: ./desktop.webp
mobile: ./mobile.webp
featured: 3
order: 3
---

## O problema

Quem vende por afiliação precisa de uma página de links que conte os cliques de cada link, aceite mídia e não custe uma mensalidade em dólar. As opções prontas escondem a métrica atrás do plano pago ou enfeitam a página com a marca delas.

## O que eu construí

Cada usuário tem um workspace, uma página pública em `/<handle>` e links com redirecionamento em `/<handle>/go/<slug>` que registram o clique. Tem upload de mídia, tour guiado para quem chega, e uma repaginação em vidro em andamento. No ar desde setembro de 2026.

## Decisões que valem contar

- Foi o primeiro app a ganhar a camada de produção da minha infra: Postgres com WAL-G e restauração em qualquer ponto dos últimos 34 dias.
- Staging na branch `develop`, atrás de senha e sem indexação; produção só recebe o mesmo commit por merge fast-forward, então nunca roda código que o staging não rodou.
- Imagem no GHCR por commit, com Redeploy de uma versão anterior em um clique, inclusive pelo celular.
- DNS no Cloudflare sem proxy, porque o certificado é do cluster e o redirecionamento de cliques precisa ver o IP real.
