// import model student
const Student = require("../models/Student");

// Membuat class StudentController
class StudentController {
    async index(req, res) {
        //memanggil methode static all dengan async await.
        const students = await Student.all();

        const data = {
            message: "Menampilkan semua students",
            data: students,
        };
        res.json(data);
    };

    store(req, res) {
        const { nama } = req.body;
        const data = {
            message: `Menambahkan data students ${nama}`,
            data: [],
        };
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
            data: [],
        };
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;
        const data = {
            message: `Menghapus students id ${id}`,
            data: [],
        };
        res.json(data);
    }
}




// Membuat object StundetController
const object = new StudentController();

// Export object StudentController
module.exports = object;