const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
//method-override: Lets you use HTTP verbs such as PUT or DELETE 
// in places where the client doesn't support it
const methodOverride = require("method-override")
//uuid: creates string type unique id
const { v4: uuidv4 } = require('uuid');
//ejs-mate
const ejsMate = require("ejs-mate");

app.engine('ejs', ejsMate);


// views/ and public/  folder
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//parsing data to JSON data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

let posts = [
    {
        name: "Alice",
        id: uuidv4(),
        content: "Post by Alice"
    },
    {
        name: "John",
        id: uuidv4(),
        content: "Post by John"
    },
    {
        name: "Leo",
        id: uuidv4(),
        content: "Post by Leo"
    },
    {
        name: "Kevin",
        id: uuidv4(),
        content: "Post by Kevin"
    },
    {
        name: "Bob",
        id: uuidv4(),
        content: "Post by Bob"
    }
];

app.get("/posts", (req, res) => {
    res.render("posts.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {name, content} = req.body;
    let id = uuidv4();
    posts.push({name, id, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find(post => post.id == id);
    res.render("show.ejs", {post});
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find(post => post.id == id);
    res.render("edit.ejs", {post});
});

app.put("/posts/:id", (req, res) => {
    let {content} = req.body; 
    let {id} = req.params;
    let post = posts.find(post => post.id ==id);
    if(post)
        post.content = content;
    res.redirect(`/posts/${id}`);
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter(post => post.id !== id);
    console.log(posts);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("Server listening to port", port);
});