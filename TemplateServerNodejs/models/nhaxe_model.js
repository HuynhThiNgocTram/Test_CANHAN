var db = require('../db/Dbconnection');

var NhaXe = {
    getAllNhaXe: function (callback) {
        return db.query("Select * from nhaxe", callback);
    },
    getNhaXeById: function (id, callback) {
        return db.query("select * from nhaxe where ID=?", [id], callback);
    },
    addNhaXe: function (nhaxe, callback) {
        return db.query("Insert into nhaxe values(?,?,?,?,?)", [nhaxe.ID, nhaxe.TENNHAXE, nhaxe.DIENTHOAI, nhaxe.EMAIL, nhaxe.DIEMDANHGIA], callback);
    },
    deleteNhaXe: function (id, callback) {
        return db.query("delete from nhaxe where ID=?", [id], callback);
    },
    updateNhaXe: function (id, nhaxe, callback) {
        return db.query("update nhaxe set TENNHAXE=?,DIENTHOAI=?,EMAIL=?, DIEMDANHGIA=? where ID=?", [nhaxe.TENNHAXE, nhaxe.DIENTHOAI, nhaxe.EMAIL, nhaxe.DIEMDANHGIA, id], callback);
    },
    getSelectedChuyenXe: function (idnhaxe, idloaixe, sxthoigian, sxgiave, sxdanhgia, callback) {
        var sql = "select distinct cx.ID as IDCHUYENXE, nx.TENNHAXE,cx.GIODI,cx.GIODEN, lx.TENLOAI,  cx.SOCHOTRONG ,nx.DIEMDANHGIA, cx.GIAVE, tx.DIEMDI, tx.DIEMDEN"+
        " FROM NHAXE nx, XE x, CHUYENXE cx, LOAIXE lx, TUYENXE tx" +
            " WHERE  nx.ID=x.IDNHAXE and x.ID=cx.IDXE AND x.IDLOAIXE=lx.ID  AND cx.GIODI >= NOW() " +
            " AND cx.IDTUYENXE=tx.ID AND nx.ID=?  AND x.IDLOAIXE=? ";
        return db.query(sql, [idnhaxe, idloaixe], callback);
    },

    getChoNgoiByIDChuyenXe: function(idchuyenxe,callback){
        var sql="select ctvx.IDGHENGOI, gn.TENGHENGOI from DATVEXE dvx, GHENGOI gn, CHITIETVEXE ctvx  "+
        "where dvx.ID=ctvx.IDDATVEXE and gn.ID=ctvx.IDGHENGOI and dvx.IDCHUYENXE=?";
        return db.query(sql,[idchuyenxe],callback);   
    },
    insertDatVeXe: function(thongtinDatVeXe,callback){
        // var sql1="INSERT INTO DATVEXE(IDKHACHHANGDATVE, SLNGUOI, IDCHUYENXE) VALUES(?,?,?)";
        var sql="call DATVEXE_THANHTOAN(?,?,?,1,NOW())";
        return db.query(sql,[thongtinDatVeXe.idkhachhang,thongtinDatVeXe.slnguoi,thongtinDatVeXe.idchuyenxe],callback);   
        // return db.query(sql,[thongtinDatVeXe.idkhachhang,thongtinDatVeXe.slnguoi,thongtinDatVeXe.idchuyenxe,thongtinDatVeXe.idloaithanhtoan],callback);   
    },
    getSelectedTuyenXe: function(diemdi,diemden,thoigiandi,callback){
        var date= new Date(thoigiandi);
        var tg=date.getFullYear()+"-"+date.getMonth()+"-"+ date.getDay();
        var sql="select cx.id,nx.TENNHAXE,cx.GIODI,cx.GIODEN ,tx.DIEMDI, tx.DIEMDEN, lx.TENLOAI, cx.SOCHOTRONG, nx.DIEMDANHGIA, cx.GIAVE "+
        "from tuyenxe tx, chuyenxe cx, xe x, nhaxe nx, loaixe lx " +
        "where tx.ID=cx.IDTUYENXE AND cx.IDXE=x.ID AND x.IDNHAXE=nx.ID  AND lx.ID=x.IDLOAIXE AND tx.DIEMDI=? AND tx.DIEMDEN=? AND cx.GIODI>=?";
        return db.query(sql,[diemdi,diemden,tg],callback);
    },
    getChoTrong: function(id,callback){
        var sql="select SOCHOTRONG FROM  chuyenxe  where ID = ? ";
        return db.query(sql,[id],callback);
    }

};
module.exports = NhaXe;