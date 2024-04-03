FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build /app/dist /share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
