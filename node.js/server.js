const express = require("express");
const userManagerRoutes = require("./routes/userManagerRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(userManagerRoutes);

app.listen(PORT);
