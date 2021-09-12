## How I worked on this project

This project is part of my full stack application where you can add product feedback whether it is a suggestion, enhancement, bug, etc. for any application you see fit.

Some features of this project include the ability to add your feedback, edit your feedback, how many uses upvoted the feedback, you can comment on it and it also has a kanban style roadmap where you can keep track of what feedback is currently being worked on and the status of it.

This is essential for any organization as it provides a centralized place where users and owners of a product can help maintain and improve an application in a progressive manner.

This repository is the back-end of the application where the technologies used are:

- [Node.JS](https://nodejs.org/en/docs/)
- [Express.JS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex](https://knexjs.org/)

So you have an idea of how my REST API is built please look at this table.

<table>
  <tr>
    <th>Route Name</th>
    <th>URL</th>
    <th>HTTP Verb</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Index</td>
    <td>/feedback</td>
    <td>GET</td>
    <td>Display all feedback</td>
  </tr>
  <tr>
    <td>Create</td>
    <td>/feedback</td>
    <td>POST</td>
    <td>Add new feedback to database, then redirect</td>
  </tr>
  <tr>
    <td>Create</td>
    <td>/comment</td>
    <td>POST</td>
    <td>Add new comment to database, then redirect</td>
  </tr>
  <tr>
    <td>Show</td>
    <td>/feedback/:id</td>
    <td>GET</td>
    <td>Show product feedback detail</td>
  </tr>
  <tr>
    <td>Show with comments</td>
    <td>/feedback/:id/comments</td>
    <td>GET</td>
    <td>Show comments included with the product feedback detail</td>
  </tr>
  <tr>
    <td>Update</td>
    <td>/feedback/:id</td>
    <td>PUT</td>
    <td>Update a particular feedback, then redirect</td>
  </tr>
  <tr>
    <td>Destroy</td>
    <td>/feedback/:id</td>
    <td>DELETE</td>
    <td>Delete a particular feedback, then redirect</td>
  </tr>
</table>

## How to navigate this project

## Why I built the project this way

## If I had more time, I would change this

## Available Scripts
