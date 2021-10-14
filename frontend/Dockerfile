FROM node:lts

WORKDIR /src
COPY package*.json ./
RUN npm ci

CMD ["npm", "run", "dev"]
