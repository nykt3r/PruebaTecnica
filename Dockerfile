FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY .env .env
EXPOSE 8020
CMD ["npm", "start"]