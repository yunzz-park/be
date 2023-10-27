const connection = require("../dbConfig");

// userCtrl 을 라우터와 연결시켜줘야한다.
// 컨트롤에서 로직을 처리


const userCtrl = {

  getUsers: async (req, res) => {
    connection.query('SELECT * FROM signin', (error, rows) => {
      if(error) throw error;
      res.send(rows);
    })
  },
  insertUser : async (req, res) => {
    const {id, pwd, email} = req.body;
    const sql = `INSERT INTO signin(id, pwd, email)
    VALUES(${idx}, ${pwd}, ${email});`

    connection.query(
      sql,(error, rows) => {
        if(error) throw error;
        res.send(rows);
      }
    )
  }
}

const logIn = {
  getUsers: async (req, res) => {
    connection.query
  }
}


module.exports = {
  userCtrl,
  logIn,
  diary,
  check
};