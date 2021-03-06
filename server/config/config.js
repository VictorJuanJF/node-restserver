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
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// New machine

//===========================================
//Vencimiento del token
//===========================================
// 60 segundos
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//===========================================
//Seed
//===========================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';