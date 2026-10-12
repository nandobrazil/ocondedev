---
name: Radar
tagline: Uptime, logs, erros agrupados, traces e alertas dos meus apps, com SDKs em três linguagens e MCP.
category: product
status: live
period: 2026 – hoje
role: Produto, código, infra e operação
stack:
  - SvelteKit
  - TypeScript
  - PostgreSQL
  - Drizzle
  - OpenTelemetry
  - Starlight
  - Kubernetes
links:
  docs: https://radar.oconde.dev/docs/
  status: https://status.oconde.dev/radar
  package: https://www.npmjs.com/package/@oconde/radar
cover: ./desktop.webp
mobile: ./mobile.webp
gallery:
  - src: ./status.webp
    caption: Página pública de status, uma por projeto
  - src: ./source-context.webp
    caption: Docs do trecho de código que acompanha cada erro
  - src: ./sdk-nestjs.webp
    caption: Guia de instalação no NestJS
featured: 1
order: 1
---

## O problema

Tenho mais de uma dúzia de apps no ar, em duas VPS, e cada um tinha o próprio jeito de avisar que quebrou: um log perdido no pod, um e-mail genérico ou simplesmente nada. As ferramentas prontas cobram por volume ou por host, e nenhuma conversa com os agentes de IA que eu uso para operar tudo isso.

## O que eu construí

Um painel só, para todos os projetos: monitores de uptime com página pública de status, logs centralizados com busca por texto, nível e requisição, erros agrupados por assinatura com o trecho exato do código e a release em que apareceram, traces OpenTelemetry, tarefas agendadas que avisam quando deixam de rodar, limites por contagem de erros, e alertas por e-mail e push no celular.

Em cima disso, um servidor MCP: o Claude investiga um incidente lendo erros, logs e traces direto do Radar, e um guia de instrumentação por stack ensina a ligar um app novo em minutos. Os SDKs cobrem Node.js e NestJS, Python, e .NET do Framework 3.5 ao .NET 10.

## Decisões que valem contar

- A ingestão roda separada do painel. O app do cliente continua mandando eventos mesmo enquanto o painel está em deploy.
- O SDK nunca derruba quem o usa: sem dependências, envio em lote com backoff, e qualquer exceção interna vira no máximo um log.
- Docs públicas em Starlight e status pages públicas por projeto, porque o Radar vigia inclusive a si mesmo.
- Agrupamento de erros por assinatura estável, não por mensagem, para a mesma falha com IDs diferentes não virar cem ocorrências.

## Números

Seis projetos monitorados, três SDKs, dois canais de alerta, quatro páginas de status públicas.
