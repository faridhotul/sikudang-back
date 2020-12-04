'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.kendaraan = function(req, res) {
    connection.query('SELECT * FROM kendaraan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createkendaraan = function(req, res) {
    console.log(req.body)
    var plat_kend = req.body.plat_kend;

    connection.query('INSERT INTO kendaraan (plat_kend) values (?)',
    [ plat_kend ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil menambahkan kendaraan!", res)
        }
    });
};
exports.updatekendaraan = function(req, res) {
    console.log(req.body)
    var id_kend = req.body.id_kend;
    var plat_kend = req.body.plat_kend;

    connection.query('UPDATE kendaraan SET plat_kend = ? WHERE id_kend = ?',
    [ plat_kend , id_kend ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil mengedit kendaraan!", res)
        }
    });
};
exports.deletekendaraan = function(req, res) {
    console.log(req.body)
    var id_kend = req.body.id_kend;

    connection.query('DELETE FROM kendaraan WHERE id_kend = ?',
    [ id_kend ],
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil menghapus kendaraan!", res)
        }
    });
};
exports.suku_cadang = function(req, res) {
    connection.query('SELECT * FROM suku_cadang', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createsukucadang = function(req, res) {
    console.log(req.body)
    var nama_sc = req.body.nama_sc;
    var satuan_sc = req.body.satuan_sc;

    connection.query('INSERT INTO suku_cadang (nama_sc, satuan_sc) values (?,?)',
    [ nama_sc, satuan_sc ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil menambahkan suku cadang!", res)
        }
    });
};
exports.updatesukucadang = function(req, res) {
    console.log(req.body)
    var id_sc = req.body.id_sc;
    var nama_sc = req.body.nama_sc;
    var satuan_sc = req.body.satuan_sc;

    connection.query('UPDATE suku_cadang SET nama_sc = ?, satuan_sc = ? WHERE id_sc = ?',
    [ nama_sc, satuan_sc , id_sc ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil mengedit suku cadang!", res)
        }
    });
};
exports.deletesukucadang = function(req, res) {
    console.log(req.body)
    var id_sc = req.body.id_sc;

    connection.query('DELETE FROM suku_cadang WHERE id_sc = ?',
    [ id_sc ],
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil menghapus Suku Cadang!", res)
        }
    });
};
exports.sc_keluar = function(req, res) {
    connection.query('SELECT sk.jml_sc_kel,sk.tgl_sc_kel, s.nama_sc, k.plat_kend, u.nama_user FROM sc_keluar sk JOIN suku_cadang s ON sk.id_sc = s.id_sc JOIN kendaraan k ON sk.id_kend = k.id_kend JOIN user u ON sk.id_user = u.id_user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createsc_keluar = function(req, res) {
    console.log(req.body)
    var id_sc = req.body.id_sc;
    var jml_sc_kel = req.body.jml_sc_kel;
    var tgl_sc_kel = req.body.tgl_sc_kel;
    var id_kend = req.body.id_kend;
    var id_user = req.body.id_user;

    connection.query('INSERT INTO sc_keluar (id_sc, jml_sc_kel, tgl_sc_kel, id_kend, id_user) values (?,?,?,?,?)',
    [ id_sc, jml_sc_kel, tgl_sc_kel, id_kend, id_user ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil menambahkan suku cadang keluar!", res)
        }
    });
};
exports.updatesc_keluar = function(req, res) {
    console.log(req.body)
    var id_kel = req.body.id_kel;
    var id_sc = req.body.id_sc;
    var jml_sc_kel = req.body.jml_sc_kel;
    var tgl_sc_kel = req.body.tgl_sc_kel;
    var id_kend = req.body.id_kend;
    var id_user = req.body.id_user;

    connection.query('UPDATE sc_keluar SET id_sc = ?, jml_sc_kel = ?, tgl_sc_kel = ?, id_kend = ?, id_user = ?   WHERE id_kel = ?',
    [ id_sc, jml_sc_kel, tgl_sc_kel, id_kend, id_user, id_kel ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil mengedit suku cadang keluar!", res)
        }
    });
};
exports.deletesc_keluar = function(req, res) {
    console.log(req.body)
    var id_kel = req.body.id_kel;

    connection.query('DELETE FROM sc_keluar WHERE id_kel = ?',
    [ id_kel ],
    function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed("Belum berhasil", res)
        } else{
            response.ok("Berhasil menghapus Suku Cadang keluar!", res)
        }
    });
};
exports.sc_masuk = function(req, res) {
    connection.query('SELECT sm.jml_sc_msk,sm.tgl_sc_msk, s.nama_sc FROM sc_masuk sm  JOIN suku_cadang s ON sm.id_sc = s.id_sc', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.permintaan_sc = function(req, res) {
    connection.query('SELECT p.jml_per_sc, p.tgl_per_sc, p.status_per_sc, s.id_sc, s.nama_sc, k.id_kend, k.plat_kend, u.id_user, u.nama_user FROM permintaan_sc p JOIN suku_cadang s ON p.id_sc = s.id_sc JOIN kendaraan k ON p.id_kend = k.id_kend JOIN user u ON p.id_user = u.id_user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.riwayat_permintaan = function(req, res) {
    connection.query('SELECT id_riw, p.jml_per_sc, p.tgl_per_sc, p.status_per_sc, s.nama_sc, k.plat_kend, u.nama_user FROM riwayat_permintaan rw JOIN permintaan_sc p ON p.id_per_sc = rw.id_per_sc JOIN suku_cadang s ON p.id_sc = s.id_sc JOIN kendaraan k ON p.id_kend = k.id_kend JOIN USER u ON p.id_user = u.id_user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.lap_kel_msk = function(req, res) {
    connection.query('SELECT id_lap, s.nama_sc, sm.jml_sc_msk,  sk.jml_sc_kel, stock_akhir FROM lap_kel_msk l JOIN suku_cadang s ON l.id_sc = s.id_sc JOIN sc_keluar sk ON l.id_kel = sk.id_kel JOIN sc_masuk sm ON l.id_msk = sm.id_msk', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};