FROM node:19-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock /app/

# Install Node dependencies
RUN yarn install

# Copy source files
COPY . .

# Generate local prisma client
RUN yarn prisma generate && yarn build

# Second stage: Copy only necessary files to a smaller image
FROM node:19-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/
COPY --from=builder /app/node_modules /app/node_modules

LABEL Maintainer="Ebenezar Blind <ebenezarbukosia@gmail.com>" \
    Description="Lightweight container with Node 19 based on Alpine Linux"

# Environment vars
ARG NODE_ENV=development
ENV NODE_CONFIG_STRICT_MODE=1
ENV NODE_ENV=$NODE_ENV
ENV APP_NAME=express-ts-ddd
ENV APP_LOG_LEVEL=debug
ENV COGNITO_USER_POOL=""
ENV COGNITO_CLIENT_ID=""
ENV COGNITO_REGION=""

EXPOSE 5000

CMD ["/app/startup.sh"]
