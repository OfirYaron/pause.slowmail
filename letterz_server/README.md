###How to start the server

    cd letterz_server

    # virtualenv is recommended
    virtualenv env --no-site-packages -p python3
    source env/bin/activate

    # install requirements
    pip install -r requirements

    # migrate and createsuper user to use the admin @   localhost:8000/admin
    python manage.py migrate
    python manage.py createsuperuser

    # run the server @ localhost:8000
    python manage.py runserver
