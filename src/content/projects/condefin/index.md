---
name: CondeFin
tagline: Controle financeiro pessoal, offline-first e freemium, publicado na App Store.
category: lab
status: live
period: 2026 – hoje
role: App, backend e publicação
stack:
  - React Native
  - Expo
  - TypeScript
  - Supabase
  - NativeWind
links:
  site: https://condefin.oconde.dev
  store: https://apps.apple.com/app/id6760158274
cover: ./desktop.webp
mobile: ./mobile.webp
featured: 4
order: 8
---

## O problema

Eu queria um app de finanças que funcionasse no avião e sincronizasse quando voltasse o sinal, sem assinatura obrigatória e sem vender meus dados.

## O que eu construí

Um app em Expo com arquitetura offline-first: tudo grava no aparelho e sincroniza com o Supabase; modelo freemium com assinatura; atualizações por OTA. Está publicado na App Store, com a landing e as páginas legais em condefin.oconde.dev.

## Decisões que valem contar

- Supabase no lugar de um backend próprio, para publicar antes e operar menos.
- Atualizações OTA pelo EAS: correção pequena chega sem passar pela revisão da loja.
- Ficha da loja, capturas e textos legais versionados no repositório, junto do código.
