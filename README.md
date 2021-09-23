# express-socketio-fakerjs-mongodb
Backend for a products API, simple chatbox, and an endpoint with data mocking for test purposes, made with Express, Socket.io, Faker.js, and MongoDB.

API live demo: https://desafio22.herokuapp.com/

## Endpoints:
Data Mocking:

Method: `GET`
##
Include query parameter `cant` and the number of products to be generated - Example 1 (Returns 3 products):
```Typescript
/api/productos/vista-test?cant=3
```
##
If query parameter value is 0 - Example 2 (Returns a message saying there are no products):
```Typescript
/api/productos/vista-test?cant=0
```
##
Without query parameter - Example 3 (Returns 10 products by default):
```Typescript
/api/productos/vista-test
```
##
Products:
| Method       | Route          | Description  |
| ------------- |:-------------:| -----:|
| GET     |https://desafio22.herokuapp.com/api/productos/listar/ |List all products |
| GET     |https://desafio22.herokuapp.com/api/productos/listar/id |List a product by id, if a product doesn't exist return an error message |
| POST    |https://desafio22.herokuapp.com/api/productos/agregar/ | Add a product by passing a JSON Body |
| PUT     |https://desafio22.herokuapp.com/api/productos/actualizar/id | Updates a product by passing the product's id and a JSON Body |
| DELETE |https://desafio22.herokuapp.com/api/productos/borrar/id |Delete a product from the product list by passing the product's id |


Product's JSON Body template: 
```Typescript
{
    "title": string,
    "price": number,
    "thumbnail": string,
}
```
##
Messages:
| Method       | Route          | Description  |
| ------------- |:-------------:| -----:|
| GET     |https://desafio22.herokuapp.com/api/mensajes/listar/ |List all products |
| POST    |https://desafio22.herokuapp.com/api/mensajes/agregar/ | Add a product by passing a JSON Body |

Message's JSON Body template: 
```Typescript
{
    "email": string,
    "message": string,
    "date": string,
    "time": string
}
```
