
Table of contents
=================

  * [Getting Started](#getting-started)
  * [The Basics](#The Basics)
  * [Components & Databinding](#components-and-databinding)
    * [databinding](#)
  * [Directives](#directives)
  * [Services & Dependency Injection](#services-and-dependency-injection)
  * [Routing](#routing)
  * [Observables](#observables)
  * [Forms](#forms)
  * [Pipes](#pipes)
  * [Http](#http)
  * [Authentication](#authentication)
  * [Optimizations & NgModules](#optimizations-and-ngmodules)
  * [Deployment](#deployment)


Getting Started
============

The Angular CLI [docs](https://github.com/angular/angular-cli/wiki)

To install the Angular CLI:

`sudo npm install -g @angular/cli`

Creating New Application
```
ng new my-project
cd my-project
ng serve
or 
ng serve --port {Port Number}
````

#### To set yarn as default package manager
```
ng set --global packageManager=yarn
```

Importing Bootstrap css to porject 

`npm install --save bootstrap`
```javascript
.angular-cli.json

"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
]
```

The Basics
============

Components and Databinding
============

Directives
============

Services and Dependency Injection
============

Routing
============

Observables
============

Forms
============

Pipes
============

Http
============

Authentication
============

Optimizations and NgModules
============

Deployment
============
