'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);
    app.route('/login')
        .post(todoList.login);
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
    app.route('/createsukucadang')
        .post(todoList.createsukucadang);
    app.route('/updatesukucadang')
        .post(todoList.updatesukucadang); 
    app.route('/deletesukucadang')
        .post(todoList.deletesukucadang);
    app.route('/sc_keluar')
        .get(todoList.sc_keluar);
    app.route('/createsc_keluar')
        .post(todoList.createsc_keluar);
    app.route('/updatesc_keluar')
        .post(todoList.updatesc_keluar);
    app.route('/deletesc_keluar')
        .post(todoList.deletesc_keluar);
    app.route('/sc_masuk')
        .get(todoList.sc_masuk);
    app.route('/createsc_masuk')
        .post(todoList.createsc_masuk);
    app.route('/updatesc_masuk')
        .post(todoList.updatesc_masuk);
    app.route('/deletesc_masuk')
        .post(todoList.deletesc_masuk);
    app.route('/permintaan_sc')
        .get(todoList.permintaan_sc);
    app.route('/createpermintaan_sc')
        .post(todoList.createpermintaan_sc);
    app.route('/updatepermintaan_sc')
        .post(todoList.updatepermintaan_sc);
    app.route('/updatestatuspermintaan')
        .post(todoList.updatestatuspermintaan);
    app.route('/deletepermintaan_sc')
        .post(todoList.deletepermintaan_sc);
    app.route('/riwayat_permintaan')
        .get(todoList.riwayat_permintaan);
    app.route('/lap_kel_msk')
        .get(todoList.lap_kel_msk);
};