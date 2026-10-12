---
name: Plataforma das VPS
tagline: Dois clusters k3s que eu opero, com produção restaurável em qualquer ponto no tempo e um laboratório para o novo.
category: infra
status: live
period: 2025 – hoje
role: Arquitetura e operação
host: duas VPS · k3s
stack:
  - Kubernetes (k3s)
  - Traefik
  - cert-manager
  - PostgreSQL 17
  - WAL-G
  - Redis 7
  - Cloudflare
  - GitHub Actions
  - Google Cloud Storage
links: {}
cover: ./desktop.svg
featured: 5
order: 11
---

## O problema

Uma dúzia de projetos pequenos não paga banco gerenciado e cluster próprio para cada um. Mas o dado que um usuário real confiou a um app não pode se perder, e eu não queria que um laboratório derrubasse a produção.

## O que eu construí

Duas VPS. A de produção só com apps de usuário real e a infra compartilhada; a de desenvolvimento com laboratórios, stagings, projetos novos e o meu ambiente de trabalho. Em cada uma, um k3s com Traefik e cert-manager, um Postgres e um Redis compartilhados com banco, papel e usuário ACL por projeto. Na produção, uma camada à parte: Postgres com WAL-G mandando cada segmento para o Google Cloud Storage, base backup diário e dump por banco, o que permite restaurar qualquer instante dos últimos 34 dias.

Cada repositório tem pipeline no GitHub Actions com runner próprio na VPS, imagem no GHCR por commit e verificação depois do deploy. O Hub espelha o cluster, e cada namespace carrega título, descrição e notas operacionais como anotações. Os procedimentos viraram runbooks que os agentes de IA seguem para operar.

## Decisões que valem contar

- Camada de produção separada em vez de subir tudo de nível: só quem tem usuário real paga o custo do backup contínuo.
- Regra inviolável de banco, escrita depois de perder um staging: nunca apontar banco real para um parâmetro que a ferramenta trata como descartável.
- Nenhuma mudança está concluída até o cartão no Hub estar correto; o cluster recusa namespace sem anotações.
- Builds pesados têm teto de CPU e memória porque dividem o nó com a produção.

## Números

Duas VPS, mais de vinte namespaces, quatro apps com usuário real em produção, 34 dias de histórico restaurável.
