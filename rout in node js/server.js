const { write, fstat } = require('fs');
const http = require('http');
const url = require('url');
const fs = require('fs');
const get=require('./get');
// const server=http.createServer(path,(req,res)=>{
//     errami();
// var page = url.parse(req.url);  
// var querystring = require('querystring'); 


   // console.log(page);  //url est un fichier json qui contient des info sur l'url 
    /*
        pathname: '/errami',
        path: '/errami',
        href: '/errami'
    */
//         if(page.pathname=='/'){
//             res.write('Home');
//         }
//         else if(page.pathname=='contact'){
//             res.write('contact');
//         }
//         else{
//             res.write('rout not found');
//         }
//         res.end();
   



// });
// const port = process.env.PORT || 5000 ;
// server.listen(port,()=>console.log(`server is listening on port ${port}`));

    // const server=http.createServer((req,res)=>{
    //     get(req,res);
    //     res.end();
    // });
    // server.listen(2000,console.log('errami'));
    var querystring=require('querystring');
    const server =http.createServer((req,res)=>{
        var lien =url.parse(req.url).pathname ;
       if(lien=='/')
        {
            var paras =querystring.parse(url.parse(req.url).query);/*query est une fonction qui converte req.url en chaine de charactère ,et querystring est une fonction qui parser notre chaine de charactère en {clé : valeur} */
        res.writeHead(200,{"Content-Type":"text/palin"});
        if('prenom' in paras && 'nom' in paras){
            res.write('vous avez appelez ' + paras['prenom'] +' '+ paras['nom']);
        }else res.write('Elle manque des parametres');
    }else{
        res.write('rout not found');
        res.end();
    }
        res.end();
    })
    server.listen(2000,()=>console.log('errami'))

