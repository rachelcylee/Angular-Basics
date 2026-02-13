# Housing App (Angular Tutorial)

A simple housing listing application built while following the official Angular tutorial.
Original source/tutorial: https://angular.dev/tutorials/first-app

## Tech Stack
- Angular
- TypeScript
- Angular Router
- Reactive Forms
- json-server (mock backend)

## Features
- List view of housing locations
- Detail page with dynamic route parameter (`/details/:id`)
- Search filter by city
- Mock REST API using json-server

## How to Run
1. Clone the repository:
   ```bash
   git clone [https://github.com/rachelcylee/Angular-Basics] 
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
    ```bash
    ng serve
    ```
4. Start mock API:
    ```bash
    json-server --watch db.json --port 3000
    ```
5. Navigate to `http://localhost:4200/`

