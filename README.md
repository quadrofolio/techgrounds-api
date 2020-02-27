# Node.js Rest APIs with Express & MySQL example

Create MySQL database: techgrounds
Then import the /database/techgrounds.sql file

- Install mysql on Windows: https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html
- Install mysql on Mac: https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html
- Install mysql on Linux: https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html

Now you just need a tool to interact with your database:
- All platforms: https://dbeaver.io/

## In your code:
Change the config/db.config.js to use your mysql login credentials.


# Express API Features:
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

Use [postman](https://www.postman.com/) or CURL to create request to test the API

## CRUD actions
- **create**: POST localhost:3000/customers
- **findAll**: GET localhost:3000/customers
- **findOne**: GET localhost:3000/customers/:id
- **update**: PUT localhost:3000/customers/:id
- **delete**: DELETE localhost:3000/customers/:id
- **deleteAll**: DELETE localhost:3000/customers

## POST
post to localhost:3000/customers
```bash
{
	"email": "joost@pxlwidgets.com",
	"name": "Joost Klaver",
	"active": true
}
```

## GET
get to localhost:3000/customers

## UPDATE
put to localhost:3000/:id
```bash
{
	"email": "joost+somethingelse@pxlwidgets.com",
}
```

## DELETE
delete to localhost:3000/:id

## Further reading:
- See the docs directory for:
  - Express _ Introduction
  - Express _ Get methods and Route parameters
  - AJAX _ Axios GET request

## Readup on the packages used in this repository:
- https://www.npmjs.com/package/mysql
- https://www.npmjs.com/package/http-errors
- https://www.npmjs.com/package/compression
- https://www.npmjs.com/package/morgan
- https://www.npmjs.com/package/nodemon
- https://www.npmjs.com/package/cors
- https://time2hack.com/creating-rest-api-in-node-js-with-express-and-mysql/
- https://bezkoder.com/node-js-rest-api-express-mysql/





