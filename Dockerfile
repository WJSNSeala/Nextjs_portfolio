FROM node:18-alpine AS base

RUN corepack enable && corepack prepare yarn@4.5.1 --activate

FROM base AS deps
WORKDIR /app
COPY . .
RUN yarn config set nodeLinker node-modules
RUN yarn install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app .
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000 
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]