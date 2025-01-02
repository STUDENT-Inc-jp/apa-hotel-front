# ========== Stage 1: Build ==========
FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# ここでは "npm run build" だけ。next export はしない。
RUN npm run build

# ========== Stage 2: Run ==========
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 8080
ENV PORT=8080
# SSR 起動
CMD ["npm", "start", "--", "-p", "8080"]
