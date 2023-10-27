const express = require('express');
const ctrl = require("../controllers/userCtrl");
const router = express.Router();

router.route('/')
    .get(ctrl.getUsers)
    .post(ctrl.insertUser)


router.route('/register')
    .post

router.get("/", userCtrl.home);
router.get("/login", logIN.login);
router.get("/diay", diary.diary);
router.get("/check", check.check);

module.exports = router;