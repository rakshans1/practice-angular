
Table of contents
=================

  * [Getting Started](#getting-started)
  * [The Basics](#the-basics)
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
Angular app bootstrap process

We pass AppModule to main.ts

`platformBrowserDynamic().bootstrapModule(AppModule)`

amd app.module passes all the components needed to run the app



Components and Databinding
============

Creating new Components 

Add to the declaration array in app.module.ts

```
declarations: [
  AppComponent,
  YourNewComponent
]
```
Creating Components with cli

`ng generate component servers`
or 
`ng g c servers`

Databinding is communication between ts code (Business Login) and html files

Types of binding 

1.String Binding = Value from ts to html
2.Event Binding = Event (eg: Click event) from html to ts 
3. Two-way-binding = Combination of both

String Interpolation =  `{{stringName}}`
Property Binding = `[disabled]="stringName"`

Event Bindng = `(click)="methodName()"`

Two-way-binding = `[(ngModel)]="varibleName"`

Directives
============
Instructions in the DOM

structural directive has *

```
*ngIf="variableName"
*ngFor="let server of servers"
*ngFor="let server of servers; let i = index"
```

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
