var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
const app = express();

const connectionparams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

/* Connection to mongodb atlas server */

mongoose.connect("mongodb+srv://joypradhan:SnLbw6q-p9dF6KS@cluster0.eqnuobf.mongodb.net/PortfolioMine?retryWrites=true&w=majority", connectionparams).then(() => { console.log("connected to teh mongodb atlas server") }).catch(() => { console.log("Running on local server.") })

/* Defining the schema. */

var contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    number: String,
    message: String,
})

var contact = mongoose.model('Contact', contactSchema);


/* static method */
app.use("/static", express.static("static"))
app.use(express.urlencoded())
    /* declairing the view engine. */
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))



//Menu items and their destinations.
//1.index section
app.get("/", (req, res) => {
    const params = {}
    res.render("index.ejs", params)
})
app.get("/index-2", (req, res) => {
    const params = {}
    res.render("index-2.ejs", params)
})
app.get("/index-3", (req, res) => {
    const params = {}
    res.render("index-3.ejs", params)
})

/* Work Section */
app.get("/work", (req, res) => {
    const params = {}
    res.render("work.ejs", params)
})
app.get("/work-detail", (req, res) => {
    const params = {}
    res.render("work-detail.ejs", params)
})
app.get("/work-detail-2", (req, res) => {
    const params = {}
    res.render("work-detail-2.ejs", params)
})

/* About Section */
app.get("/about", (req, res) => {
    const params = {}
    res.render("about.ejs", params)
})

/* Blog Section */
app.get("/blog", (req, res) => {
    const params = {}
    res.render("blog.ejs", params)
})
app.get("/blog-detail", (req, res) => {
    const params = {}
    res.render("blog-detail.ejs", params)
})

/* Contact Section */
app.get("/contact", (req, res) => {
    const params = {}
    res.render("form.ejs", params)
})

app.post("/contact", (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
            // res.send("This item is saved to the database")
            res.render("success.ejs")
        }).catch(() => {
            // res.status(400).send("Item was not saved to database.")
            res.status(400).render("error.ejs")
                // console.log("Error saving")
        })
        // res.status(200).render("contact.pug")
})








app.listen(process.env.PORT || 5000)