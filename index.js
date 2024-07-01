const fs= require('fs')
const data= fs.readFileSync('index.html', 'utf-8')
// console.log(""+ data);

// fs.writeFile('file.txt', "Hello world !", 'utf-8', (err)=>{
//     console.log('file modified')
// });

// fs.appendFileSync('file.txt', 'heheheh')
// console.log(fs.readFileSync('file.txt', "utf-8"))

// fs.mkdir('dir1', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('directory created')
// })
// fs.rmdir('dir1',{recursive: true},  (err)=>{
//     if(err){
//         console.log(`error deleting dir: ${err}`)
//     }
//     else console.log('directory deleted')
// })
// fs.rename('file.txt','f1.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file renamed')
// })


// const p= '/home/paramjeet/program_files/Dev/node-app/file.txt'

// const path= require('path')
// const dest = path.join(__dirname, 'dir1');
// fs.copyFile(p, dest+'/file.txt', (err)=>{
//     if(err){
//         console.log("error copying")
//     }
//     else{
//         console.log("file copied")
//     }
// })

// const dirname= path.dirname(p)
// const extension= path.extname(p)
// console.log(dirname)
// console.log(extension)
// const file= require("path").basename('file.txt')
// console.log(dest)

const http= require('http')
const server= http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head><title> js class </title> </head> <body>')
    if(req.url==='/login'){
        res.write('<h1> Hello login !</h1>')
    }
    else if(req.url==='/index'){
        res.write(data)
    }
    else res.write('<h1> Hello world !</h1>')
    res.write('</body></html>')
    res.end()
})

const port = 3001
const host= 'localhost'
server.listen(port, host, ()=>{
    console.log(`server running at http://${host}:${port}`)
});