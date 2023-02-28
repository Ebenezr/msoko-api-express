FROM node:19-alpine AS development

WORKDIR /app

COPY package.json yarn.lock /app/

# COPY prisma ./prisma/
# Install Node dependencies
COPY . .

RUN yarn install  --only=development


# Install prisma CLI
# RUN yarn global add prisma

# COPY .env.example ./prisma/.env
# Generate local prisma client
# RUN npx prisma generate deploy

# run seed data
# RUN npx prisma db seed
# Copy source files

FROM node:19-alpine AS production
# Build the application

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --only=production

RUN yarn build

COPY . .
COPY --from=development /app/prisma ./prisma
COPY --from=development /app/dist ./dist

# LABEL "Ebenezar Blind <ebenezarbukosia@gmail.com>" \
#     Description="Lightweight container with Node 19 based on Alpine Linux"

# Set environment variables for your PostgreSQL and Redis databases
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5432
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=kapaoil_DB
ENV REDIS_HOST=localhost
ENV REDIS_PORT=6379
ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/kapaoil_DB?schema=public
ENV CLOUDINARY_CLOUD_NAME=dbkeoqmg5
ENV CLOUDINARY_API_KEY=784643547226384
ENV CLOUDINARY_API_SECRET=8kI5-lZFW4b6dRhbXS0PI1hO51Y

EXPOSE 5000

CMD ["node", "dist/index.js"]
