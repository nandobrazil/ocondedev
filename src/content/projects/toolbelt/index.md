---
name: Toolbelt
tagline: Seis utilitários da barra de menus do Mac num app só, com ~13 MB de memória e 0% de CPU parado.
category: product
status: preview
period: 2026 – hoje
role: Produto, código e publicação
host: toolbelt.oconde.dev
stack:
  - Swift
  - AppKit
  - SwiftUI
  - Accessibility API
  - ScreenCaptureKit
  - Python
links:
  site: https://toolbelt.oconde.dev
  repo: https://github.com/nandobrazil/toolbelt
cover: ./desktop.webp
mobile: ./mobile.webp
featured: 7
order: 4
---

## O problema

Meu Mac rodava Ice, AltTab, Flycut, Rectangle, um monitor de memória e scripts para trocar de conta do Claude Code. Seis processos, seis configurações, atalhos brigando entre si, e num MacBook com notch metade dos ícones da barra sumia atrás da câmera sem nenhum jeito de alcançar.

## O que eu construí

Um app de barra de menus em Swift que junta tudo num processo só, com cada módulo ligando e desligando à parte:

- **Barra de menus:** esconde os ícones que não cabem, inclusive os que ficam atrás do notch, e mostra todos num painel abaixo do cinto.
- **Alternar janelas:** ⌥⇥ lista as janelas de todos os apps, com busca e ações de teclado; também assume o ⌘⇥ no lugar do alternador do macOS.
- **Área de transferência:** ⌥⌘V abre o histórico de textos, imagens e prints sem tirar o foco do app em uso.
- **Janelas:** atalhos ⌃⌥ estilo Rectangle para metades, terços, cantos e troca de monitor.
- **Monitor do sistema:** RAM, swap e disco, com alerta quando apertam e um relatório completo do Mac.
- **Contas do Claude Code:** várias contas lado a lado, com o uso da janela de 5 horas e um terminal preso a cada uma.

O app se atualiza sozinho: confere uma vez por dia se há versão nova, avisa no painel do cinto e numa notificação do sistema, e instala com um clique depois de conferir o SHA-256 e a assinatura Developer ID do pacote.

## Decisões que valem contar

- Leveza como requisito: nada de polling. O app reage a eventos do sistema (arquivo mudou, app ativou, horário do próximo reset) e fica em 0% de CPU quando ninguém usa.
- Distribuição fora da App Store, porque o sandbox dela bloqueia a Acessibilidade de que o alternador e a barra dependem. O caminho é Developer ID, notarização da Apple, binário universal e DMG.
- O atualizador é próprio, em vez do Sparkle: menos memória e o aviso integrado ao painel. A segurança vem do hash no manifesto e da exigência de assinatura do mesmo desenvolvedor.
- O app consulta um endereço no meu domínio, que redireciona para onde os arquivos estiverem; dá para trocar a hospedagem sem lançar versão nova.
- A landing é uma página estática num nginx no cluster de produção, com imagem por commit e rollback de um clique.
- Release sem mão humana: subir a versão na `main` faz o GitHub Actions testar no macOS 14, 15 e 26, assinar, notarizar, publicar o DMG e atualizar o cask do Homebrew.
- Falhas e travamentos vão para o [Radar](/projetos/radar/), outro projeto meu, só com a permissão de quem usa.
- Código aberto, sob GPL-3.0: quem dá Acessibilidade a um app precisa poder ler o que ele faz.
