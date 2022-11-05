const http = require('http');
const fs = require("fs");
const {join}=require('path');
const url = require('url');
const products = require('./products');



        //console.log((path.join(__dirname,"templetes/index.html"))); //==> C:\Users\admin\Desktop\TP_NodeJS\ProductManagement\templetes\index.html
        // __dirname nous donne la direction(root) de nous fichier , et join est un est une fonction de path 
        const home = fs.readFileSync(join(__dirname,'templates/index.html'),'utf-8');//readFileync() a 2 parametres le path de fichier et encoding format
        const style = fs.readFileSync(join(__dirname,'style/style.css'),'utf-8');
        

        // console.log(join(__dirname,'index.html')); 
            const server = http.createServer((req,res)=>{
            const t = req.url.split('/');
            console.log(t);
            var page = req.url;
            // console.log("page");
            // console.log(page);
            // console.log("page");
            if(page=='/'){     
                res.writeHead(200);
                //let pr = products.map(e=>e.marque);// la fonction map prends les marques ,et elle les metttre dans un tableau de type string
                let str = '';
                products.forEach(e=>{
                    str+=str= `
                        <div class="produit">
                            <img class="img" src="../images/${e.image}" alt="">
                            <h3>${e.model}</h3>
                            <p>${e.marque}</p>
                        </div>
                                `;
                })
                // console.log("_____________________________");
                // console.log(pr);
                // console.log("_____________________________");
                //let pagee;
                //pagee = home.replace("{% section %}",pr);
                pagee = home.replace("{% section %}",str);
                res.end(pagee);
            }if(page=='/style/style.css'){     
                res.writeHead(200);
                res.end(style);
            }else if(t[1]=="images"){ 
                console.log(t[2]);
                fs.readFile(__dirname + "/images/" + t[2],(err,data)=>{
                    res.end(data);
                });
            }
        });
        const port = process.env.PORT || 3000;
        server.listen(port);
        //console.log(__dirname); // ==> C:\Users\admin\Desktop\TP_NodeJS\ProductManagement ///// c'est l'emplacement de fichier (app.js)
        // const port = process.env.PORT || 2000;
        // server.listen(port,console.log("errami"));