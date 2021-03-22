var express=require('express')
var app=express()
// http://localhost:3000/books
app.route('/books')

.get((req,res)=>{
res.send('books')

})



.post((req,res)=>{
    res.send('books1')
    
    })

.put((req,res)=>{
    res.send('books2')
    
    })


.delete((req,res)=>{
    res.send('books3')
    
    })
var server=app.listen(3000, ()=>{console.log("server is running")})