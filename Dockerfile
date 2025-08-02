FROM node:lts

WORKDIR /app

COPY package*.json .

RUN --mount=type=cache,target=/root/.npm npm ci

RUN npm install

COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]

