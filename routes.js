'use strict';

var jwt = require('jsonwebtoken');
var response = require('./res');

module.exports = function(app) {
    var todoList = require('./controller');

    var cekLogin = function (req, res, next) {
        try {
            var token = req.get('authorization') || req.body.token || req.query.token
            var decoded = jwt.verify(token, 'gnadukis');
            req.user = decoded
            console.log(decoded)
            next()
        } catch (error) {
            response.faillogin('Belum login', res)
        }      
    }

    var cekAdmin = function (req, res, next) {
        if (req.user.tipe_user === 'Admin') {
            next()
        } else {
            response.faillogin('Bukan Admin', res)
        }
    }

    app.route('/')
        .get(todoList.index);
    app.route('/login')
        .post(todoList.login);
    app.route('/profile')
        .get(cekLogin,todoList.profile);
    app.route('/users')
        .get(cekLogin,todoList.users);
    app.route('/kendaraan')
        .get(cekLogin,todoList.kendaraan);
    app.route('/createkendaraan')
        .post(cekLogin,cekAdmin,todoList.createkendaraan);
    app.route('/updatekendaraan')
        .post(cekLogin,cekAdmin,todoList.updatekendaraan);
    app.route('/deletekendaraan')
        .post(cekLogin,cekAdmin,todoList.deletekendaraan);
    app.route('/suku_cadang')
        .get(cekLogin,todoList.suku_cadang); 
    app.route('/createsukucadang')
        .post(cekLogin,cekAdmin,todoList.createsukucadang);
    app.route('/updatesukucadang')
        .post(cekLogin,cekAdmin,todoList.updatesukucadang); 
    app.route('/deletesukucadang')
        .post(cekLogin,cekAdmin,todoList.deletesukucadang);
    app.route('/sc_keluar')
        .get(cekLogin,cekAdmin,todoList.sc_keluar);
    app.route('/createsc_keluar')
        .post(cekLogin,cekAdmin,todoList.createsc_keluar);
    app.route('/updatesc_keluar')
        .post(cekLogin,cekAdmin,todoList.updatesc_keluar);
    app.route('/deletesc_keluar')
        .post(cekLogin,cekAdmin,todoList.deletesc_keluar);
    app.route('/sc_masuk')
        .get(cekLogin,cekAdmin,todoList.sc_masuk);
    app.route('/createsc_masuk')
        .post(cekLogin,cekAdmin,todoList.createsc_masuk);
    app.route('/updatesc_masuk')
        .post(cekLogin,cekAdmin,todoList.updatesc_masuk);
    app.route('/deletesc_masuk')
        .post(cekLogin,cekAdmin,todoList.deletesc_masuk);
    app.route('/permintaan_sc')
        .get(cekLogin,todoList.permintaan_sc);
    app.route('/createpermintaan_sc')
        .post(cekLogin,todoList.createpermintaan_sc);
    app.route('/updatepermintaan_sc')
        .post(cekLogin,todoList.updatepermintaan_sc);
    app.route('/updatestatuspermintaan')
        .post(cekLogin,todoList.updatestatuspermintaan);
    app.route('/deletepermintaan_sc')
        .post(cekLogin,todoList.deletepermintaan_sc);
    // app.route('/riwayat_permintaan')
       // .get(cekLogin,todoList.riwayat_permintaan);
    app.route('/lap_kel_msk')
        .get(cekLogin,cekAdmin,todoList.lap_kel_msk);
};