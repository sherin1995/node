const express =require('express');
const router = express();
router.get('/',(req,res)=>{
    res.send(req.query);
})
router.listen(3000,(err)=>{
    !err?console.log('ok'):console.log('error');
})