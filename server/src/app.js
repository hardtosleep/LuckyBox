const express = require("express");
const boxRoutes = require("./routes/boxRoutes");
// 其他路由...

const app = express();

app.use(express.json());
app.use("/api/boxes", boxRoutes);
// 其他路由...

module.exports = app; 