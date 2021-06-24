FROM node:15

RUN npm install -g @angular/cli@11.2.14

WORKDIR /app

COPY local_repo ./local_repo/

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ng build --prod
