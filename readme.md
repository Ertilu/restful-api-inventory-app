# RESTful API Computer Inventory App

![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-ISC-yellowgreen.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>
<p align="center">
  <a href="https://www.mysql.com/">
    <img alt="database" title="database management" src="https://seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg">
  </a>
</p>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.
- Visual Studio Code - Download and Install [VS Code](https://code.visualstudio.com/Download) - Code editor that i use to create this project.

## Installation
### Clone
```
$ git clone https://github.com/4Tune-Light/Computer-Inventory-App.git
$ cd Computer-Inventory-App
$ npm install
```

### Create Environment Variable
```
$ cp .env.example .env
$ nano .env
```

```
PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASS = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"

### Start Development Server
```
$ npm start
```

## Documentation

### USER Routes

#### POST Request
```
 1. "/user/register" => Create user and return token. 
    a. Required Body: 
       1) name: string
       2) username: string
       3) email: string
       4) password: string
       *) date_created: (auto created)
       *) date_updated: (auto created)

 2. "/user/login" => Log In user and return token. 
    a. Required Body:
       1) username: string
       2) password: string
```

#### GET Request
```
 1. "/user" => User page. 
Display welcome "your name"
```

### PRODUCT Routes

#### GET Request
```
 1. "/product" => Display products, with default pagination {page: 1, limit: 4}. 
    a. Possible Query:
       1) search -> {input: column name}, search products that have {input} in their title according to product name in the database.
       2) sortby -> {input: column name or category or quantity or date updated}, sort products based on {input}.
       3) sort   -> {input: asc / desc}, sort products ascending or descending based on {input}.
       4) page	 -> {input: number}, display page based on {input} **note: you must correct value number**.
       5) limit  -> {input: number}, config how many product displayed on page **note: you must correct value number**.

 2. "/product/{name}" => Display product with {name}.
```

#### POST Request
```
 1. "/product" => Create product and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: 
       1) name: string
       2) description: string
       3) image: string //image url
       4) id_category: number
       5) quantity: number
       *) date created and updated: (auto created)
```

#### PUT Request
```
 1. "product/{id}" => Update product with {id} and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: 
       1) name: string
       2) description: string
       3) image: string //image url
       4) id_category: number
       5) quantity: number
        *) date created and updated: (auto created)
 ```

#### PATCH Request
```
 1. "/product" => Add or reduce product quantity according to name that user input in required body.
    a. Required Header : { auth: token }
    b. Required Body: { operation: add / reduce, name: product that you want add.reduce, quantity: how many quantity that you want add/reduce }
```

#### DELETE Request
```
 1. "product" => Delete product with id according to id in required body.
  a. Required Header : { auth: token }
    b. Required Body: { id: what product that you want to delete }
```


### CATEGORY Routes

#### GET Request
```
 1. "category" => Display categories. 

```

#### POST Request
```
 1. "category" => Create category and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: { name: string }
```

#### PUT Request
```
 1. "category" => Update category with id in reques body and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: { id: what category that you want to update, name: string }
```

#### DELETE Request
```
 1. "category" => Delete category with id in request body.
```


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")