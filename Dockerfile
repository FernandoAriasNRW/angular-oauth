FROM alpine AS build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx

COPY --from=build /app/dist/ang-dockerized-app /share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
