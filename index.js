const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    return res.json("Hi there......")
})

// user authentication route
const auth = require("./routes/auth");
app.use("/api/users/", auth);

// Artist links
const artistsRoute = require("./routes/artist");
app.use("/api/artists/", artistsRoute);

// Album links
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

// Songs links
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connecting to MongoDB");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error: Server not connecting', error.message);
    });
