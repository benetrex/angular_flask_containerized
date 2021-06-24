FROM node:15

RUN npm install -g @angular/cli@11.2.14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . /app

CMD ng build --prod
