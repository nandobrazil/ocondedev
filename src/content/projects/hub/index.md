---
name: Hub
tagline: Espelho ao vivo do cluster, um cartão por namespace com endereços, memória, CPU e estado, sem cadastro manual.
category: infra
status: live
period: 2026 – hoje
role: Código
host: hub.oconde.dev
stack:
  - Go
  - API do Kubernetes
  - HTML
  - CSS
  - JavaScript
links: {}
cover: ./desktop.webp
order: 12
---

## O problema

Com muitos namespaces num cluster só, eu perdia a conta do que rodava onde, quanto cada coisa consumia e, pior, do que cada projeto era. Uma planilha de inventário fica velha no dia seguinte.

## O que eu construí

Um binário em Go só com a biblioteca padrão. Ele fala com a API do Kubernetes por uma ServiceAccount só de leitura, agrega por namespace (endereços, prontidão, memória e CPU em uso, disco pedido, imagens, idade) e guarda o retrato por 15 segundos. Cada namespace carrega título, descrição, categoria, repositório e nota operacional como anotações, e um projeto publicado amanhã aparece sozinho. Tem busca, filtro por categoria, ficha detalhada e um modo local com fixture para desenvolver sem cluster.

## Decisões que valem contar

- O inventário é o próprio cluster: nada de banco, nada de cadastro.
- Uma política admite namespace novo só com título e descrição, para o cartão nunca sair vazio.
- Dois mebibytes de memória, atrás do basic auth do Traefik.
