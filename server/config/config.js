//===========================================
//Puerto
//===========================================

process.env.PORT = process.env.PORT || 3000;

//===========================================
//Entorno
//===========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===========================================
//DataBase
//===========================================
let urlDB;
if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:sed4cfv5@ds139781.mlab.com:39781/cafe';
}

process.env.URLDB = urlDB;