###Dependencies

Make sure redis is installed and running (on its default port 6379)

    redis-server

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
    # and the queue worker
    python manage.py runserver & python manage.py rqworker default

### eMail configurations

You will have to add some environment variable, preferably to the activate script of your virtual environment. Add the following at the end of the script, with corrected values of course :-)

    export ADMIN = "your_name"
    export ADMIN_EMAIL = "your@email.com"

    # The easiest way I've found is to open a gmail account for the purpose
    # of sending emails to the admins
    export EMAIL_HOST_USER = "site@gmail.com"
    export EMAIL_HOST_PASSWORD = "site_email_password"
