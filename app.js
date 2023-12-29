// Import express dan routing
const express = require("express");
const router = require("./routes/api");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router);    

/** 
 * Membuat routing.
 * methode get menerima 2 params 
 * param 1 adalah endpoint
 * param 2 callback.
 * callback menerima object req dan res
*/

app.get("/", (req, res) => {
    res.send("Hello Express");
});

// Mendefinisikan port
app.listen(3000);

// Basic Routing
app.get("/students", (req, res) => {
    res.send("Menampilkan semua students");
});

app.post("/students", (req, res) => {
    res.send("Menambahkan data students");
});

app.put("/students", (req, res) => {
    res.send("Mengedit students");
});

app.delete("/students", (req, res) => {
    res.send("Menghapus data students");
});

// Routing Parameters
app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Mengedit student ${id}`);
});

app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Menghapus student ${id}`);
});