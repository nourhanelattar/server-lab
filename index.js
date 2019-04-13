const http = require('http');
const fs = require('fs');
const finalhandler = require('finalhandler');
const Router = require('router');
const router = Router();

router.get('/', function (req, res)
{
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  fs.readdir('./assets',function(err,items){
    console.log(items);
    res.end(JSON.stringify(items))
  })
})

router.get('/:fileName',function(req,res){
  fs.readFile(`./assets/${req.params.fileName}.jpg`,(err,data)=>{
    if(err) throw err ;
    res.end(data);
  });

})
 
const server = http.createServer(function(req, res)
{
  router(req, res, finalhandler(req, res));
}) 
server.listen(3000);