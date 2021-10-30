<!-- Please update value in the {}  -->

<h1 align="center">Profeedback</h1>

<div align="center">
  <h3>
    <a href="https://profeedback.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/jose-a-dlc05/product-feedback-app-BE">
      Code Repo
    </a>
    <span> | </span>
    <a href="https://www.figma.com/file/JzCnGNxTt8cO96tNlRHxsc/product-feedback-app?node-id=0%3A1">
      Design
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)

<!-- OVERVIEW -->

## Overview

![ProFeedback](https://drive.google.com/uc?export=view&id=1oH6fC99UyifvMYKzaqOx-3l0-bfo4cae)
![ProFeedback](https://drive.google.com/uc?export=view&id=1OMKoFAujLU8nMw9M_zeGDTVXuyP5J-I4)


ProFeedback is a product feedback portal where users can submit any suggestions, bugs occurring in their app, and also for IT personnel to utilize as a tool to overview any changes they have to make based on popularity of feedback and address it accordingly.

- Where can I see your demo?

  You can see the demo by going to this [link here.](https://profeedback.netlify.app)

- What was your experience?

  I don't think I had too much trouble except for when I went through deploying the app to Heroku. There was an issue with how I had named the files which Heroku was pointing an error to, but it was not necessarily clear in its error message. So with a couple of eyes, we were able to figure it out and fix it. 

- What have you learned/improved?

  The folder structure and the way I have the files and modules communicate with each other is something to point out here. The project is a lot bigger than what I had initially thought, so learning to plan out the features and how long each could take to implement is something to note for any project coming my way. 

- Your wisdom? :)

  As the saying goes, "don't bite off more than you can chew", this project is scalable and will keep growing as I add more features based on it's design. 

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- NodeJS
- TypeScript
- Express
- PostgreSQL
- Knex

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- **User story:** I can add a feedback post
- **User story:** I can edit a feedback post
- **User story:** I can delete a feedback post
- **User story:** I can see all the feedback 
- **User story:** I can click on a feedback title which will lead me to the details page

## If I had more time I would change this

Add more functionality beyond the main CRUD functionality:

- In the Main Page:
  - Ability to upvote a feedback
  - Tile that gives ability for users to filter by category
  - A "sort by" dropdown button based on:
    - Most upvotes
    - Least upvotes
    - Most comments
    - Least comments
  - Tile providing overview of the status of cards represented by the number of cards per status
  - Link to view an overall roadmap page
- Add Roadmap page
- Inside the FeedbackDetail Page:
  - The ability to post a comment and reply to a comment
  - Have the ability box have a character counter
  - Nest comments
- Make the page responsive

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jose-a-dlc05/product-feedback-app-BE.git

# Install dependencies
$ npm install

# Run the app
$ npm start
```



So you have an idea of how my REST API is built please look at this table. 
Please note the highlighted endpoints are the only ones that currently work. 
The others can be considered as currently in development. 

<table>
  <tr>
    <th>Route Name</th>
    <th>URL</th>
    <th>HTTP Verb</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Index</td>
    <td>/</td>
    <td>GET</td>
    <td>Display all feedback</td>
  </tr>
  <tr>
    <td>Create</td>
    <td>/</td>
    <td>POST</td>
    <td>Add new feedback to database</td>
  </tr>
  <tr>
    <td>Show</td>
    <td>/:id</td>
    <td>GET</td>
    <td>Show product feedback detail</td>
  </tr>
  <tr>
    <td>Show with comments</td>
    <td>/:id/comments</td>
    <td>GET</td>
    <td>Show comments included with the product feedback detail</td>
  </tr>
  <tr>
    <td>Update</td>
    <td>/:id</td>
    <td>PUT</td>
    <td>Update a particular feedback</td>
  </tr>
  <tr>
    <td>Delete</td>
    <td>/:id</td>
    <td>DELETE</td>
    <td>Delete a particular feedback</td>
  </tr>
</table>

