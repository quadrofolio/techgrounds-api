# Node.js Rest APIs with Express & MySQL example

Create MySQL database: techgrounds

Create table customer:
```bash
CREATE TABLE IF NOT EXISTS `customers` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
Change the config/db.config.js to use your mysql login credentials.

## Features:
- **cors** to be able to use xmlhttprequests(ajax) from another domain/server
- uses gzip **compression** for faster/smaller server responses
- **CRUD** actions (create, read, update, delete) on customer model
- uses **morgan** to log requests to stdOut
- uses **http-errors** for creating standard http errors
- uses **nodemon** to monitor file changes which restart the server

## Project setup
```
npm install
```

### Run
```
production:
npm run start

development:
npm run start:dev
```

# Test API
Open the API on http://localhost:3000/customers

Use postman or similar to create request to test the API

## CRUD actions
- **create**: POST localhost:3000/customers
- **findAll**: GET localhost:3000/customers
- **findOne**: GET localhost:3000/customers/:id
- **update**: PUT localhost:3000/customers/:id
- **delete**: DELETE localhost:3000/customers/:id
- **deleteAll**: DELETE localhost:3000/customers

## create
post to localhost:3000/customers
```bash
{
	"email": "joost@pxlwidgets.com",
	"name": "Joost Klaver",
	"active": true
}
```

## read
get to localhost:3000/customers

## update:
put to localhost:3000/:id
```bash
{
	"email": "joost+somethingelse@pxlwidgets.com",
}
```

## delete:
delete to localhost:3000/:id




