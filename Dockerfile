# Base image
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package và cài deps
COPY package*.json ./
COPY yarn.lock* ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

# Copy toàn bộ project
COPY . .

# Build Next.js
RUN npm run build

# ---------- Production stage ----------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

# Copy từ build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
