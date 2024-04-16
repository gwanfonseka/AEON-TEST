## AEON - Frontend Developer Test

### Introduction

This document serves as a comprehensive setup guide to help you get started with the developer assignment application which is built with **Next.Js - App Router**. This will walk you through the installation process, and provide tips on how to maximize your use of the application.

### Installation

- Clone the Github repository
- Navigate to Project directory
- Install dependencies by running `npm install`

### Run the application locally

- To run the application locally run the command `npm run dev`
- Launch `http://localhost:3000`

### Instructions of functionality

This assignment contains of three different implementations and following are the sections,

- Calculator
- Navigation bar
- Two Sum function

#### Calculator

- This is a separate page in the implemented application.
- Once you run the application locally, this will be the landing page you see first or go to the route http://localhose:3000/answers/calculator to view the interface.
- The main functionality is to accept two numbers and the calculator will add both numbers and provide the total as the answer.
- This implementation is type safe implementation, so input fields will only accept numbers.
- Apart from the addition, you also can clear out the calculator wo it's initial state.
- Please note that this interface is not responsive with smaller devices.

#### Navigation bar

- This is a separate page in the implemented application.
- Please use the route http://localhose:3000/answers/navbar to view the interface.
- Please note that links in this navbar will redirect you to the calculator page.
- Search input is just a static input and not functining (as per the given requirements)
- The navigation bar in responsive with mobile devices.
- You will see a hamburger button and a close button to toggle the main menu.

#### Two Sum function

- This implementation is also another page, yet it doesn't have any interface visible.
- This is a function to resolve a specific problem/algorithm.
- Please visit http://localhose:3000/answers/answer3 route and you will see the answers in the console. Since this is a server side function you have to check the console you are running the application, not the browser developer tool console.
- Given assumptions in the requirement,
    - Given array of integers are sorted in ascending order.
    - The array of numbers and the target number is guaranteed to have exactly one pair of numbers that add up to the target. There won't be any test cases where there are multiple pairs that add up to the target, or any test cases where there is no pair that adds up to the target.
