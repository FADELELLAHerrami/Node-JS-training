const { write } = require('fs');
const url=require('url');

function get  (req,res){
    var path = url.parse(req.url).pathname;
switch (path){
    case '/':
        res.write('home');
        break;
    case '/product':
        res.write ('product');
        break;
    case '/contact':
        res.write ('contact');
        break;
    default:
        res.write('rout not found');
        res.end();
    }
}
module.exports = get;