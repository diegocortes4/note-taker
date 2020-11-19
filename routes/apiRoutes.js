var fs = require("fs");
const util = require("util");

var promisifyRead = util.promisify(fs.readFile);
module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
  var dbData =  promisifyRead('./db/db.json', (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(dbData);
      // return (data);
    });
    
  });

   


  app.post("/api/notes", function(req, res) {
  
  });

  
 
app.delete("/api/notes/:id", function(req, res){


    res.json({ ok: true });

  });

};

