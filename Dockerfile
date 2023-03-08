FROM node:latest AS development

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install Node dependencies
RUN yarn install  --only=development

COPY . .

RUN yarn build


FROM node:latest AS production

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --only=production



COPY . .
COPY --from=development /usr/src/app/prisma ./prisma
COPY --from=development /usr/src/app/dist ./dist

# LABEL "Ebenezar Blind <ebenezarbukosia@gmail.com>" \
#     Description="Lightweight container with Node 19 based on Alpine Linux"

EXPOSE 5000

CMD npm run start:prod
