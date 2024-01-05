FROM node:20.10.0 as build

LABEL Maintainer="OkanUlu"
LABEL project="portfolio"
LABEL version="v0.1.0"
LABEL type="ui"

WORKDIR /app

COPY . .

RUN npm install -f

RUN npm run build

FROM nginx:1.19

ENV NODE_ENV=production

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/certificate.crt /etc/nginx/certificate.crt
COPY ./nginx/private-key.key /etc/nginx/private-key.key

COPY --from=build /app/build /usr/share/nginx/html