// import data 

const fruits = require('../data');

// menampilkan semua data
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

// Menambahkan data
const store = (name) => {
    fruits.push(name);

    console.log(`Menambahkan data ${name}`);
    index();
}

// Menghapus data
const destroy = (position) => {
    let deleted = fruits.splice(position, 1);

    console.log(`Berhasil menghapus data ${deleted}`)
    index();
}

// Mengupdate data
const update =  (position, name) => {
    let old_fruit =  fruits[position]
    fruits[position] = name;

    console.log('\n');
    console.log(`Berhasil mengubah ${old_fruit} menjadi ${name} `);
    index();
}

// export methode
module.exports =  {index, store, update,  destroy};