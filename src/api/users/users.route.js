const { Router } = require("express");
const router = Router();

const { create, findAll, findOne, update, remove } = require("./users.controller");

router.post("/users/create", create);
router.get("/users/findAll", findAll);
router.get("/users/findOne/:id", findOne);
router.post("/users/update/:id", update);
router.post("/users/remove/:id", remove);

module.exports = router;
