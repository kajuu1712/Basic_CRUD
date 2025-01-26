# Simple CRUD Application with Express, EJS, and Node.js

## Overview
This is a simple CRUD application built with Node.js, Express, and EJS templating. The application manages a list of posts, each with a name, unique ID, and content. It supports Create, Read, Update, and Delete operations.

---

## Installed NPM Packages
1. **express**: Framework for creating the server and handling routes.
2. **method-override**: Allows using HTTP verbs such as PUT and DELETE in forms.
3. **uuid**: Generates unique IDs for posts.
4. **ejs**: Template engine for rendering dynamic views.
5. **ejs-mate**: Enhances EJS with support for layouts and partials.

---

## CRUD Operations
1. **Create (POST)**:
   - Route: `POST /posts`
   - Adds a new post to the list with a unique ID and redirects to the posts list.
   - Form submission is handled using `new.ejs`.

2. **Read (GET)**:
   - **All Posts**:
     - Route: `GET /posts`
     - Renders a list of all posts using `posts.ejs`.
   - **Single Post**:
     - Route: `GET /posts/:id`
     - Displays the details of a single post using `show.ejs`.

3. **Update (PUT)**:
   - Route: `PUT /posts/:id`
   - Updates the content of a specific post based on its ID.
   - Uses `edit.ejs` for the update form.

4. **Delete (DELETE)**:
   - Route: `DELETE /posts/:id`
   - Removes a post from the list by filtering it out based on the ID.

