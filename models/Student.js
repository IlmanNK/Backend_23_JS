// import database
const db = require("../config/database");

// membuat class Model student
class Student {

    static all() {
        // return promise sebagai solusi Asynchronus
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students";


            db.query(query, (err, result) => {
                // jika berhasil, jalankan mehode resolve dan kirim results
                resolve(result);
            });
        });
    }
}

//export class student
module.exports = Student;