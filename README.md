# Logistics Horizon - RouteFinder

- [Logistics Horizon - RouteFinder](#logistics-horizon---routefinder)
  - [**Description**](#description)
  - [**Screenshots**](#screenshots)
  - [**Diagrams and Documents**](#diagrams-and-documents)
    - [Business Case](#business-case)
    - [Risk Register](#risk-register)
    - [Frontend Diagrams](#frontend-diagrams)
      - [Wireframes](#wireframes)
        - [Main Page](#main-page)
        - [Order Page](#order-page)
      - [Component Diagram](#component-diagram)
    - [Backend Diagrams](#backend-diagrams)
      - [Entity Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
      - [Class Diagram (UML)](#class-diagram-uml)
        - [Models](#models)
        - [API Layers](#api-layers)
  - [**Setup and Installation**](#setup-and-installation)
  - [**Tech Stack and Dependencies**](#tech-stack-and-dependencies)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [API Route Endpoints](#api-route-endpoints)
  - [**MVP, Extensions and Summary**](#mvp-extensions-and-summary)
    - [MVP](#mvp)
    - [Extensions](#extensions)
    - [Summary](#summary)
  - [**_Colllaborators_**](#colllaborators)

## **Description**

This Capstone project aims aims to solve the business problem for a mock company called Rainforest Retail, which were having logistic issues of orders being manually sent to the warehouse and having vans that covered a specific route on a specific day regardless of the delivery amount. If a van had no room the delivery was delayed to the day after and there were uneven distribution of orders so that one van might be empty while another may be full, meaning those deliveries would have to wait untill the next time that van drove along that route again. This resulted in poor utlization of the delivery vehicles and resulted in deliveries being delayed during busy periods.

Our app planned to solve this by optimizing the usage of delivery vehicles to ensure that the vans would have adaptable routes based on the amount of orders. We would build a digital interface for the driver, so they could see what route they were assigned to and what orders are assigned to that route.In addition we pllaned on optimizing the delivery route to ensure the fastest delivery time and to optimize the orders assigned between all the vans so that they weren't half empty or overfilled so that they're being utlized effectively.

This app generates a route based on a number of orders with co-ordinates assiged to them and displays it on a map interface similar to google maps, which a driver can use to navigate and deliver those orders.

## **Screenshots**

![Display_route](<Screenshot 2023-10-04 at 13.44.42.png>)
![Order_page](<Screenshot 2023-10-04 at 13.43.29.png>)
![Order_modal](<Screenshot 2023-10-04 at 13.45.05.png>)

## **Diagrams and Documents**

### Business Case

[Business Case](../../../../Downloads/Capstone_Business_Case.pdf)

### Risk Register

[Risk Register](<../../../../Downloads/Capstone Risk Register - Simple Business Risk Register.pdf>)

### Frontend Diagrams

#### Wireframes

##### Main Page

![Wireframe_mainPage](<Capstone Wireframe.png>)

##### Order Page

![Wireframe_orderPage](<Capstone Wireframe order page.png>)

#### Component Diagram

![Component Diagram](component_diagram_final.png)

### Backend Diagrams

#### Entity Relationship Diagram (ERD)

![ERD](erd_diagram_final.png)

#### Class Diagram (UML)

##### Models

![Models](models_final.png)

##### API Layers

![API Layers](API_layers_final.png)

## **Setup and Installation**

This project was done using Spring for the backend and React for the frontend. After cloning the backend repository a database should be created called logisitcs_db and you should run the program on IntelliJ IDEA. This will start the server code and you can use Postman to generate to look at the routes for the API.

After running the server on the backend you will need to clone the frontend repository and do an npm i to install the relevant dependencies, you can run the program using visual studio code and use npm run dev to start the server. You will need a mapbox API key in order for the routes to be generated, which is free to use for about 100,000 requests per month and it is reccomended you create an enviroment variable (.env file) outside the source folder and store the api key as:
VITE_APIKEY = 'your mapbox key'.

## **Tech Stack and Dependencies**

This is the tech stack what was used for this project. To run this project you will need to install IntelliJ IDEA, JDK 17, postgresSQL and visual studio code.

### Backend

- IntelliJ IDEA
- JDK 17
- Maven
- postgresSQL
- Spring Boot 3.1.4
- Spring Data JPA
- Spring Web
- PostgresSQL Driver
- Spring DevTools

### Frontend

- Visual Studio Code
- React 18.2.0
- React Modal
- React Router
- Mapbox API

## API Route Endpoints

| Controller | Mapping | Path                                           | Description                                                                                     | Output                                   |
| ---------- | ------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Order      | GET     | localhost:8080/orders                          | show all orders                                                                                 | Returns a list of all orders             |
|            | GET     | localhost:8080/orders/{id}                     | index show order with id={id}                                                                   | Returns the order with id={id}           |
|            | PATCH   | localhost:8080/orders{id}/&status=STATUS       | sets order delivery status true or false                                                        | Sets order to delivered or not delivered |
| Route      | GET     | localhost:8080/routes                          | show all roots                                                                                  | returns a list of all routes             |
|            | GET     | localhost:8080/routes/{id}                     | index show route with id={id}                                                                   | returns the route with id={id}           |
|            | GET     | localhost:8080/routes/all/waypoints            | gets all waypoints from a route                                                                 |                                          |
|            | POST    | localhost:8080/routes                          | creates a route                                                                                 |                                          |
|            | PATCH   | localhost:8080/routes/{routeId}/assign/{vanId} | Assigns a specific route to a specific van via their id values                                  |                                          |
|            | PATCH   | localhost:8080/routes/{id}                     | Allows for routes distance to be updated by passing in routeId and then passing in the distance |                                          |
|            | DELETE  | localhost:8080/routes/{id}                     | Deletes route with Id ={id}                                                                     |                                          |
| Van        | GET     | localhost:8080/vans                            | show all vans                                                                                   |                                          |
|            | GET     | localhost:8080/vans/{id}                       | index show van with id={id}                                                                     |                                          |

## **MVP, Extensions and Summary**

### MVP

- [x] Load in orders from Backend
- [x] Select orders on Frontend for routes and populate list of orders in each route
- [x] Generate route on the Frontend
- [x] Display route on map with waypoints
- [x] Select delivery point to show more information

### Extensions

- [x] Delete Mapping for Route
- [x] Ability to create new Route
- [ ] Search functionality
- [ ] Adding tests
- [ ] Edit vans
- [ ] Use distance matrix to work out most optimised routes for number of orders and vehicles
- [ ] Add capacity constraints based on vehicle capacity
- [ ] Optimize route with Optimization API

### Summary

We were successful in completing our MVP and a some of our extensions. Our group managed to succesfully display multiple routes on a webpage with a number of labelled orders assosciated with those routes and the ability to mark those orders as delivered. The main extensions we would like to add is the optimization of those routes so that they are in fact the most optimal path for the driver to take, we also had permission to use the Mapbox v2 API that was in closed beta which would give us the ability to optimise multiple routes at once and display them on the map.

Unfortunately we recieved that permission late into our project so we were unable to implement those features, also we would like to be able to use reverse geocoding in order to convert geographic co-ordinates into location names. Another thing we would like to add is unit testing and end to end testing in our application, as well as some general refactoring to make the codebase easier to extend, in addition we were considering incorporating a login page for the driver with authentication.

## **_Colllaborators_**

- Callum [cbattenplowright](https://github.com/cbattenplowright)
- Kevin [Kibiko](https://github.com/Kibiko)
- Rohaib [rohaib1](https://github.com/rohaib1)
- Zaiyad [Zaiyad7](https://github.com/Zaiyad7)
- Michaelson [mikeycb96](https://github.com/mikeycb96)
