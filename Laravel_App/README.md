we can use docker images to create a laravel project without installing aything related to laravel in our local mechine.

1. create a src folder in same hierarchy of dockerfiles,env,nginx folder

2. run the below to create a project:
    docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
3. run the below command to migaret the DB.(if reuired)
    docker-compose run --rm artisan migrate
4. run the below command to build and run the app at 8000 port on local host.
    docker-compose up -d --build server