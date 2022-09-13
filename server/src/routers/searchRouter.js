const {getDoctors} = require("../controllers/searchController")
const router = require('express').Router();

router.get("/main/:inputspecialist/:inputplace", getDoctors);

module.exports = router;