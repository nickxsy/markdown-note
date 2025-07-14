## Команды для запуска локально через Docker

1. Для сборки контейнера: `docker build -t vite-docker-image:0 .`
2. Для запуска контейнера: `docker run --name vite-docker-container -d -p 3000:8000 vite-docker-image:0.1`
3. Удалить контейнер: `docker rm -f vite-docker-container`
