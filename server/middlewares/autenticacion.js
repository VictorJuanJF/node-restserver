//===========================================
//Verificar token
//===========================================
const jwt = require('jsonwebtoken');

let verifikaToken = (req, res, next) => {
    let token = req.get('token'); //authorization
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};

//===========================================
//Verificar Admin Role
//===========================================

let verifikaRol = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role != 'ADMIN_ROLE') {
        return res.json({
            message: 'No eres un usuario admin!'
        });
    }
    next();

};

module.exports = {
    verifikaToken,
    verifikaRol
}