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
    VALUES(${id}, ${pwd}, ${email});`

    connection.query(
      sql,(error, rows) => {
        if(error) throw error;
        res.send(rows);
      }
    )
  }
}




const diary = {
  getAllDiaries: async (req, res) => {
    connection.query('SELECT * FROM diary', (error, rows) => {
      if(error) throw error;
      res.send(rows);
    })
  },
  insertDiaries : async (req, res) => {
    const {d_title, d_content} = req.body;
    const sql = `INSERT INTO diary(d_title, d_content)
    VALUES(${d_title}, ${d_content});`

    connection.query(
      sql,(error, rows) => {
        if(error) throw error;
        res.send(rows);
      }
    )
  }
}





module.exports = {
  userCtrl,
  // logIn,
  diary
  // check
};