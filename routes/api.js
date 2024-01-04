// Import express
const express = require("express");


// Import Student Controller
const StudentController = require("../controllers/StudentController");

// Membuat object router
const router = express.Router();

/** 
 * Membuat routing.
 * methode get menerima 2 params 
 * param 1 adalah endpoint
 * param 2 callback.
 * callback menerima object req dan res
*/

router.get("/", (req, res) => {
    res.send("Hello Express");
});

// kode selanjutnya routing students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Menambahkan route untuk mengambil detail resource
router.get('/students/:id', StudentController.show);

// Export router
module.exports = router