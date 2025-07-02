const express = require("express");
const BoxController = require("../controllers/BoxController");
const router = express.Router();

/**
 * 盲盒相关路由
 */
router.get("/", (req, res) => BoxController.getAllBoxes(req, res));
router.get("/hot", (req, res) => BoxController.getHotBoxes(req, res));

module.exports = router; 