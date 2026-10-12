---
name: Frinfo
tagline: O site da minha consultoria de software e um autenticador OTP web, aberto e sem instalação.
category: infra
status: live
period: 2021 – hoje
role: Fundador e desenvolvedor
stack:
  - Next.js
  - TypeScript
  - HTML
  - CSS
  - JavaScript
  - Kubernetes
links:
  site: https://frinfo.com.br
  repo: https://github.com/nandobrazil/otp-auth
cover: ./desktop.webp
mobile: ./mobile.webp
gallery:
  - src: ./otp.webp
    caption: OTP Authenticator em auth.frinfo.com.br
order: 13
---

## O problema

A consultoria que fundei em 2021 precisava de um site institucional, e eu queria gerar códigos TOTP no navegador, em qualquer máquina, sem instalar app nenhum.

## O que eu construí

O site da Frinfo em Next.js e o OTP Authenticator: uma página em HTML, CSS e JavaScript puros que gera os códigos no próprio navegador, com o código aberto no GitHub.

## Decisões que valem contar

- Os dois são estáticos e baratos: imagens no GHCR, deploy por GitHub Actions, nginx no cluster.
- O autenticador não manda a chave para lugar nenhum; tudo acontece no cliente.
