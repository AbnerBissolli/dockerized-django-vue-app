# Dockerized Django & Vue.js App

This repository contains a Dockerized setup for a Django backend and a Vue.js frontend application.

## Quick Start

1. **Clone the Repo**

    ```bash
    git clone https://github.com/AbnerBissolli/dockerized-django-vue-app.git
    cd dockerized-django-vue-app
    ```

2. **Set Up Environment**

    ```bash
    cp example.env .env
    ```
    > **Warning!** The provided credentials are unsafe. Update this file with your credentials.

3. **Build and Run**

    ```bash
    docker-compose build
    docker-compose up
    ```

4. **Initialize Django**

    ```bash
    docker-compose exec backend python manage.py migrate
    docker-compose exec backend python manage.py collectstatic --noinput
    docker-compose exec backend python manage.py createsuperuser
    ```

## Test the Application

- **Frontend:** [http://localhost:3000/](http://localhost:3000/) and [http://localhost:3000/Login](http://localhost:3000/Login)
- **Backend:** [http://localhost:8000/](http://localhost:8000/) and [http://localhost:8000/admin](http://localhost:8000/admin)
- **Database:**

    ```bash
    docker-compose exec database psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}
    ```

    Replace `${POSTGRES_USER}` and `${POSTGRES_DB}` with your `.env` variables. Example:

    ```bash
    docker-compose exec database psql -U myuser -d mydatabase
    ```
