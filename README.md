# oconde.dev

Portfólio do Fernando Conde: site estático em Astro servido por nginx em https://oconde.dev.

## Comandos

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run shots      # prints dos projetos (Playwright); `npm run shots -- radar` captura um só
npm run smoke -- http://127.0.0.1:8089   # smoke contra a imagem Docker rodando
```

## Acrescentar um projeto

1. Criar `src/content/projects/<slug>/index.md` com o frontmatter do schema em `src/content.config.ts`.
2. Acrescentar a URL em `scripts/shots.config.mjs` e rodar `npm run shots -- <slug>`; ou colocar `desktop.svg` na pasta quando não há página pública.
3. `npm run build` valida o schema.

## Imagem e deploy

`docker build -t ocondedev:local . && docker run -p 127.0.0.1:8089:80 ocondedev:local`. O push na `master` publica pelo GitHub Actions: imagem no GHCR, `kubectl apply -f infra/oconde.yaml` e `kubectl set image` no cluster da VPS de dev. Hosts, redirecionamentos e o Ingress estão descritos em `docs/superpowers/specs/2026-10-12-portfolio-oconde-dev-design.md`.
