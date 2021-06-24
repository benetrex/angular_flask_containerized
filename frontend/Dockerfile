FROM node:15 as build

RUN npm install -g @angular/cli@11.2.14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN ng build --prod

FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html
