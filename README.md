# Rule of Thumb™️

The Rule of Thumb™️ app is build on top of Vue 2 and Strapi

## Requirements

You will need

* [`docker`](https://docs.docker.com/engine/install/)
* [`docker-compose`](https://docs.docker.com/compose/install/)

## Installation

### Run Docker
`docker-compose up --build`

Docker will build both, Vue and the and Strapi containers. You can go to the vue service at `http://localhost:8080` and the Strapi service at `http://localhost:1337`

### Create the Strapi admin user
Go to `http://localhost:1337/admin`, follow the signup wizard and write something that is ease to remember. Keep in mind that it will be not possible to recover the account if you lose the login credentials.

> For a quick start you can copy paste this in the signup wizard `email: admin@admin.com / password:Pass123456`

### Grant permissions for Strapi API
- Go to `http://localhost:1337/admin/settings/users-permissions/roles`
- Select `Public`
- In the `Permissions` section select all the checkboxes
- Click on save

### Upload content
In the sidebar, go to the `Categories` and `Rulings` sections to upload any content. You will need to upload some categories first and then rulings in order to have some options in the categories dropdown selector.
### Import content (optional)
If you dont want to manually upload data you can also import the sample data that is inside this repo
- Download `sample_data` from the repo.
- Go to the strapi admin panel `http://localhost:1337/admin`
- Go to `http://localhost:1337/admin/plugins/import-export-content/import`
- Select `Ruligns` at the `Import destination` dropdown
- upload the `categories_21_11_2021.json`
- Click `analize`
- Uncheck the option `Upload as a draft`
- Do the same for the `rulings...` json
Is still necessary to manually upload images. Go to each ruling and add images.
### Check the vue project
Go to `http://localhost:8080`

## Troubleshooting
- If a `403` error appears in the browser console, dont forget to grant permissions for Strapi API 
- If you forget to uncheck the option `Upload as a draft`, you will need to go to each collection and click the `Publish` button
- After import, check that the categories are assigned correctly in each ruling