// import controller
const { index, store, update, destroy } = require('./Controller/fruitController.js')

const main = () => {
    console.log(`Menampilkan data buah-buahan: `);
    index(); 

    console.log('\n'); 
    store('Jambu');

    // destroy(0);

    update(0, 'Sirsak')

}

main();
