const router = require("express").Router();
const postRoutes = require("./posts");
const authRoutes = require("./user");

// Post routes
router.use("/posts", postRoutes);
router.use("/auth", authRoutes);

module.exports = router;
