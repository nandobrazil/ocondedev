FROM node:22.4.0-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build-prod
FROM nginx:alpine
COPY --from=builder /app/dist/ocondedev/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
