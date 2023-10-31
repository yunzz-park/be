const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// 라우팅
const { homeRouter, diaryRouter, checkRouter } = require("./routes/userRouter");

// app.use() middleware를 사용하기 위한 함수
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/api/signin', homeRouter);
app.use('/api/diary', diaryRouter);
app.use('/api/check', checkRouter);


module.exports = app; 




