FROM node:12.18.3
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]