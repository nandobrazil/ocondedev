---
name: SDKs do Radar
tagline: Bibliotecas para Node.js, Python e .NET mandarem erros, logs, requisições e tarefas para o Radar.
category: library
status: live
period: 2026 – hoje
role: Autor
stack:
  - TypeScript
  - NestJS
  - Python
  - C#
  - .NET
  - ASP.NET Core
  - GitHub Actions
links:
  package: https://www.npmjs.com/package/@oconde/radar
  repo: https://github.com/nandobrazil/radar-sdk
  docs: https://radar.oconde.dev/docs/
cover: ./desktop.webp
mobile: ./mobile.webp
order: 14
---

## O problema

Cada app precisava reportar ao Radar com o mínimo de código e zero risco de derrubar o próprio app. E a minha vida profissional é em .NET, do Framework antigo ao mais novo, então o SDK tinha que cobrir isso tudo.

## O que eu construí

Três SDKs. O de Node.js e NestJS, publicado no npm como `@oconde/radar`, captura erros com o trecho de código e o contexto da requisição. O de Python cobre erros, logs, requisições e tarefas agendadas. O de C# vai do .NET Framework 3.5 ao .NET 10: middleware para ASP.NET Core, adaptadores para `ILogger`, Serilog, NLog e log4net, e testes rodando em Linux e Windows no CI.

## Decisões que valem contar

- Sem dependências em nenhuma das três linguagens.
- Envio em lote com backoff que dorme de verdade, depois de pegar a thread de envio a 100% de CPU numa revisão.
- Um atributo que falha ao ser lido nunca derruba o evento inteiro.
- Os SDKs de Python e .NET estão prontos e revisados, mas só vão para o PyPI e o NuGet quando houver quem use; o pipeline de publicação já existe.
