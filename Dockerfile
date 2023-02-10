FROM node:19-alpine

# switch to node user
# USER node

WORKDIR /app
# set ownership and permissions
# RUN chown -R node:node /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/

COPY . .

EXPOSE 5000

CMD ["/app/startup.sh"]
