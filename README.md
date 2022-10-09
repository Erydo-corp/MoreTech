### Команды для Docker - Backend

Запуск проекта
~~~
docker-compose up -d --build 
~~~

Уничтожить контейнеры

~~~
docker-compose down 
~~~

Остановить контейнеры

~~~
docker-compose stop 
~~~

Создание суперпользователя

~~~
docker-compose run backend sh -c "python manage.py createsuperuser"
~~~

[Ссылка на работающий проект](http://127.0.0.1:8000/)

Frontend 

В папке frontend

~~~
npm run dev
# or
yarn dev
~~~