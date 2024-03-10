var db=require('../dbconnection');
var fs = require('fs');
var HSN=
{ 
Save_HSN:function(HSN_,callback)
    { 
        
        return db.query("CALL Save_HSN("+"@HSN_Id_ :=?,"+"@HSN_CODE_ :=?,"+"@CGST_ :=?,"+"@SGST_ :=?,"+
        "@IGST_ :=?,"+"@GST_ :=?,"+"@Is_Check_ :=?"+")" ,
        [HSN_.HSN_Id,HSN_.HSN_CODE,HSN_.CGST,HSN_.SGST,HSN_.IGST,HSN_.GST,HSN_.Is_Check,],callback);
    } ,
Delete_HSN:function(HSN_Id_,callback)
    { 
    return db.query("CALL Delete_HSN(@HSN_Id_ :=?)",[HSN_Id_],callback);
    } ,
Get_HSN:function(HSN_Id_,callback)
    { 
    return db.query("CALL Get_HSN(@HSN_Id_ :=?)",[HSN_Id_],callback);
    } ,
Search_HSN:function(HSN_CODE_,callback)
    { 
    if (HSN_CODE_==='undefined'||HSN_CODE_===''||HSN_CODE_===undefined )
    HSN_CODE_='';
    return db.query("CALL Search_HSN(@HSN_CODE_ :=?)",[HSN_CODE_],callback);
    }
};
module.exports=HSN;

