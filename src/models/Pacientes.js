const pool = require("./mysql");

const store = async (nombre, email, eps, genero) => {
    const sql = `INSERT INTO PACIENTES (nombre, email, eps, genero) VALUES (?,?,?,?)`;
    
    try{
       const [result] = await pool.query(sql, [nombre, email, eps, genero]);
       return result;
    }catch(error){
      throw error;
    }
};

module.exports = {
    store,
}