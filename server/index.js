
//Import server code: express and cors
const express = require("express");
const cors = require("cors");

// Invoke express variable and save to app variable

const app = express();

// Middleware Setup

app.use(cors()); //Allows server to activate cors

app.use(express.json()); //Allows server to accept JSON object



const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

// Open door for server to receive request

app.listen(4000, () => console.log("Server running on 4000"));
