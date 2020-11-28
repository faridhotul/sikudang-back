'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);
    app.route('/kendaraan')
        .get(todoList.kendaraan);
    app.route('/createkendaraan')
        .post(todoList.createkendaraan);
    app.route('/updatekendaraan')
        .post(todoList.updatekendaraan);
    app.route('/deletekendaraan')
        .post(todoList.deletekendaraan);
    app.route('/suku_cadang')
        .get(todoList.suku_cadang); 
    app.route('/sc_keluar')
        .get(todoList.sc_keluar);
    app.route('/sc_masuk')
        .get(todoList.sc_masuk);
    app.route('/permintaan_sc')
        .get(todoList.permintaan_sc);
    app.route('/riwayat_permintaan')
        .get(todoList.riwayat_permintaan);
    app.route('/lap_kel_msk')
        .get(todoList.lap_kel_msk);
};