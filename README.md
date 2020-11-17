# Pokenmon


##api
Install the dependencies with
`poetry install`
(or via pip)

The backend folder is in api/
Run the migrations with
`python manage.py migrate`

Create an admin with
`python manage.py createsuperuser`

Then run the server with
`python manage.py runserver`

Log on to the admin at
`localhost:8000/admin/`

Create a user to test in the admin



## Frontend

In the frontend directory, install dependencies:
`yarn install` 

you can run:
### `yarn start`

Runs the front end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn build`

Builds the app for production to the `build` folder.\
Css is purged with purgeCSS

