const express = require('express');
const { ctrl, userCtrl, diary, check } = require("../controllers/userCtrl");

const homeRouter = express.Router();
const diaryRouter = express.Router();
const checkRouter = express.Router();

homeRouter.route('/:user')
    .get(userCtrl.getUsers)
    .post(userCtrl.insertUser)


diaryRouter.route("/diary/:diary")
    .get(diary.getAllDiaries)
    .post(diary.insertDiaries)


checkRouter.route('/check/:check')
    .get(check.getAllChecks)
    .post(check.insertChecks)

// router.route('/register')
//     .post(ctrl.getUsers)

// router.get("/", userCtrl.home);
// router.get("/login", logIn.login);

// router.get("/check", check.check);

module.exports = {
    homeRouter,
    diaryRouter,
    checkRouter
};