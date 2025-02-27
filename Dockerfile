# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY web/package*.json ./
RUN npm install
COPY web/ .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf 