const express =require('express');
const router = express();
router.get('/',(req,res)=>{
    res.send(req.query);
})


router.get('/:id',(req,res)=>{
    // res.download('express/package.json')
    res.sendFile('E:/cangku/node/express/package.json')
    // res.send(req.params)
})
router.listen(3000,(err)=>{
    !err?console.log('ok'):console.log('error');
})