# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

# RUN npm build

CMD [ "npm", "start" ]
