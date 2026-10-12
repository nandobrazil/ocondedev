---
name: DevTools
tagline: Geradores, validadores e conversores para o dia a dia de dev, num PWA que funciona offline.
category: product
status: live
period: 2026 – hoje
role: Código
stack:
  - Angular 21
  - TypeScript
  - Tailwind CSS
  - PWA
links:
  site: https://tools.oconde.dev
cover: ./desktop.webp
mobile: ./mobile.webp
gallery:
  - src: ./gerador-cpf.webp
    caption: Gerador de CPF, com máscara e cópia em um toque
  - src: ./validador-cnpj.webp
    caption: Validador de CNPJ
featured: 6
order: 5
---

## O problema

Toda semana eu precisava de um CPF válido para um teste, de um cron explicado, de uma regex conferida ou de um JSON formatado, e cada coisa vivia num site diferente, cheio de anúncio e mandando meus dados para um servidor qualquer.

## O que eu construí

Um site só com 45 ferramentas: geradores (CPF, CNPJ, GUID, CNH, certidões), validadores, ferramentas de texto, conversores, cron parser, testador de regex e um cliente HTTP. Busca rápida, favoritos, tema claro e escuro, e instalável como app no celular, funcionando sem internet.

## Decisões que valem contar

- Tudo roda no navegador: nenhum dado sai da máquina de quem usa.
- URLs limpas por rota, sem `#`, com o nginx devolvendo o app para qualquer caminho.
- Service worker com prefetch dos arquivos principais; a atualização aparece na próxima abertura.
- Mudou de oconde.dev para tools.oconde.dev em outubro de 2026, quando o domínio principal virou este portfólio; os endereços antigos redirecionam.
