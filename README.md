# express-socketio-fakerjs-mongodb
Backend for a products API, simple chatbox, and an endpoint with data mocking for test purposes, made with Express, Socket.io, Faker.js, and MongoDB.

API live demo: https://ecommerceapicoder.herokuapp.com/

## Endpoints:
Products:
| Method       | Route          | Description  |
| ------------- |:-------------:| -----:|
| GET     |https://ecommerceapicoder.herokuapp.com/api/productos/listar/ |List all products |
| GET     |https://ecommerceapicoder.herokuapp.com/api/productos/listar/id |List a product by id, if a product doesn't exist return an error message |
| GET     |https://ecommerceapicoder.herokuapp.com/api/productos/view-test |List a product by id, if a product doesn't exist return an error message |
| POST    |https://ecommerceapicoder.herokuapp.com/api/productos/agregar/ | Add a product by passing a JSON Body |
| PUT     |https://ecommerceapicoder.herokuapp.com/api/productos/actualizar/id | Updates a product by passing the product's id and a JSON Body |
| DELETE |https://ecommerceapicoder.herokuapp.com/api/productos/borrar/id |Delete a product from the product list by passing the product's id |

Product's JSON Body template: 
```Typescript
{
    "title": string,
    "price": number,
    "thumbnail": string,
}
```
Messages:
| Method       | Route          | Description  |
| ------------- |:-------------:| -----:|
| GET     |https://ecommerceapicoder.herokuapp.com/api/mensajes/listar/ |List all products |
| POST    |https://ecommerceapicoder.herokuapp.com/api/mensajes/agregar/ | Add a product by passing a JSON Body |

Message's JSON Body template: 
```Typescript
{
    "email": string,
    "message": string,
    "date": string,
    "time": string
}
```
