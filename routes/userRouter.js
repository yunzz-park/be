const express = require('express');
const { ctrl, userCtrl, diary } = require("../controllers/userCtrl");

const router = express.Router();

router.route('/')
    .get(userCtrl.getUsers)
    .post(userCtrl.insertUser)


router.route("/diary")
    .get(diary.getAllDiaries)
    .post(diary.insertDiaries)



// router.route('/register')
//     .post(ctrl.getUsers)

// router.get("/", userCtrl.home);
// router.get("/login", logIn.login);

// router.get("/check", check.check);

module.exports = router;