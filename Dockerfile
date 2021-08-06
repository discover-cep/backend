FROM node:alpine 

WORKDIR /app

COPY package.json ./

COPY scripts ./scripts

RUN SKIP_BUILD=1 yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]