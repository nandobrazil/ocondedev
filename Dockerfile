FROM node:22-alpine AS builder
WORKDIR /app
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-headers.inc /etc/nginx/conf.d/headers.inc
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
