const { Router } = require("express");
const { postReq, getReq } = require("../controller/customController");
const customRouter = Router();
customRouter.route('/').get(getReq);
customRouter.route('/login').post(postReq);
module.exports = {customRouter}