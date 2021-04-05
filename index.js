const express=require("express");
const app=express()

app.get('/:id', function (req, res) {
    const {id}=req.params
    res.send(`${id}`)
  })

app.listen(3000,()=>{
    console.log("Lisneting on port 3000")
})
