var express = require("express");
var router = express.Router();
var Proforma_Invoice_Master = require("../models/Proforma_Invoice_Master");
router.post("/Save_Proforma_Invoice_Master/", async function (req, res, next) {
  try {
    console.log(req);
    const resp = await Proforma_Invoice_Master.Save_Proforma_Invoice_Master(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    console.log(e)
    return res.send(e);
  }
});



router.post("/Save_Confirmation_Master/", async function (req, res, next) {
  try {
    console.log(req);
    const resp = await Proforma_Invoice_Master.Save_Confirmation_Master(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    console.log(e)
    return res.send(e);
  }
});


router.post("/Save_Category_Dropdown/", async function (req, res, next) {
  try {
    console.log(req);
    const resp = await Proforma_Invoice_Master.Save_Category_Dropdown(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});



router.get("/Search_Proforma_Invoice_Master/", function (req, res, next) {
  try {
    Proforma_Invoice_Master.Search_Proforma_Invoice_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.Po_Number,
      req.query.PI_Number,
      req.query.Status_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get('/Product_Code_Change/:Product_Code_?',function(req,res,next)
{ 
try 
{
       
  Proforma_Invoice_Master.Product_Code_Change(req.params.Product_Code_, function (err, rows) 
{
 if (err) 
 {
    
 res.json(err);
 }
 else 
 {
   res.json(rows);
 }
 });
 }
catch (e) 
{
}
finally 
{
}
 });

 router.get('/Product_Code_Change_Wastage/:Product_Code_?',function(req,res,next)
{ 
try 
{
       
  Proforma_Invoice_Master.Product_Code_Change_Wastage(req.params.Product_Code_, function (err, rows) 
{
 if (err) 
 {
    
 res.json(err);
 }
 else 
 {
   res.json(rows);
 }
 });
 }
catch (e) 
{
}
finally 
{
}
 });

 
 router.get('/Product_Code_Change_Packing/:Product_Code_?',function(req,res,next)
{ 
try 
{
       
  Proforma_Invoice_Master.Product_Code_Change_Packing(req.params.Product_Code_, function (err, rows) 
{
 if (err) 
 {
    
 res.json(err);
 }
 else 
 {
   res.json(rows);
 }
 });
 }
catch (e) 
{
}
finally 
{
}
 });

 router.get('/Product_Code_Change_packinglist/:Product_Code_?',function(req,res,next)
 { 
 try 
 {
        
   Proforma_Invoice_Master.Product_Code_Change_packinglist(req.params.Product_Code_, function (err, rows) 
 {
  if (err) 
  {
     
  res.json(err);
  }
  else 
  {
    res.json(rows);
  }
  });
  }
 catch (e) 
 {
 }
 finally 
 {
 }
  });





  

 router.get('/Get_Purchase_Details_Click/:Purchase_Master_Id?',function(req,res,next)
 { 
 try 
 {
        
   Proforma_Invoice_Master.Get_Purchase_Details_Click(req.params.Purchase_Master_Id, function (err, rows) 
 {
  if (err) 
  {
     
  res.json(err);
  }
  else 
  {
    res.json(rows);
  }
  });
  }
 catch (e) 
 {
 }
 finally 
 {
 }
  });



  router.get('/Get_Pallet_Details/:Barcode_?',function(req,res,next)
  { 
  try 
  {
         
    Proforma_Invoice_Master.Get_Pallet_Details(req.params.Barcode_, function (err, rows) 
  {
   if (err) 
   {
      
   res.json(err);
   }
   else 
   {
     res.json(rows);
   }
   });
   }
  catch (e) 
  {
  }
  finally 
  {
  }
   });


   router.get('/Get_Pallet_Details_Received/:Barcode_?',function(req,res,next)
   { 
   try 
   {
          
     Proforma_Invoice_Master.Get_Pallet_Details_Received(req.params.Barcode_, function (err, rows) 
   {
    if (err) 
    {
       
    res.json(err);
    }
    else 
    {
      res.json(rows);
    }
    });
    }
   catch (e) 
   {
   }
   finally 
   {
   }
    });

router.get(
  "/Get_Proforma_Invoice_Details/:Proforma_Invoice_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Get_Proforma_Invoice_Details(
        req.params.Proforma_Invoice_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Get_Shipment_Master_For_Performa_Invoice/:Shipment_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Get_Shipment_Master_For_Performa_Invoice(
        req.params.Shipment_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);


router.get(
  "/get_pallet_data/:Shipment_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.get_pallet_data(
        req.params.Shipment_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Get_Shipment_Details_For_Performa_Invoice/:Shipment_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Get_Shipment_Details_For_Performa_Invoice(
        req.params.Shipment_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Delete_Proforma_Invoice_Master/:Proforma_Invoice_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Delete_Proforma_Invoice_Master(
        req.params.Proforma_Invoice_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Move_To_Production/:Proforma_Invoice_Master_Id_?/:Production_Status_?/:User_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Move_To_Production(
        req.params.Proforma_Invoice_Master_Id_,
        req.params.Production_Status_,
        req.params.User_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get("/Get_Porforma_Typeahead/", function (req, res, next) {
  try {
    Proforma_Invoice_Master.Get_Porforma_Typeahead(
      req.query.PInvoice_No_,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});




router.get("/Get_Porforma_Confirmation_Typeahead/", function (req, res, next) {
  try {
    Proforma_Invoice_Master.Get_Porforma_Confirmation_Typeahead(
      req.query.PInvoice_No_,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get(
  "/Cancel_Production/:Proforma_Invoice_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Cancel_Production(
        req.params.Proforma_Invoice_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Get_Proforma_For_Production/:Proforma_Invoice_Details_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Get_Proforma_For_Production(
        req.params.Proforma_Invoice_Details_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Get_Porforma_From_Shipment/:Proforma_Invoice_Master_Id_?",
  function (req, res, next) {
    try {
      Proforma_Invoice_Master.Get_Porforma_From_Shipment(
        req.params.Proforma_Invoice_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

module.exports = router;
