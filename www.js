const app = require("./main.js")
// 연결 포트
const PORT = 4000;
// app.listen() http 서버를 생성해주는 함수



app.listen(PORT, ()=> {
  console.log(`서버가 ${PORT}에서 작동 중`);
});
