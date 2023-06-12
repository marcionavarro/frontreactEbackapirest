FROM node:14.5.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./dist .

EXPOSE 3001

CMD ["npm", "start"]