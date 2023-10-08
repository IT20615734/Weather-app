const router = require('express').Router()
const Userss = require('../models/Users')

router.route("/").get(async (req,res) =>{
    await Userss.find().then((User) =>{
        res.status(200).send({status : "data received", data : User})
    }).catch((err) =>{
        res.status(400).send({status :err})
    })
})

router.route("/addUser").post(async (req,res) =>{
    const {userName,long,lat,weather,date} = req.body;

    const newUser = new Userss({
        userName,
        long,
        lat,
        weather,
        date
    })

    await newUser.save().then(() =>{
        res.status(200).send({state : 'Class fee added'})
    }).catch((err) =>{
        res.status({state:err})
    })
})

router.route("/getUser/:id").get(async(req,res) =>{
    const id = req.params.id;

    await Userss.findById(id).then((user) =>{
        res.status(200).send({data : user})
    }).catch((err) =>{
        res.status(400).send(err)
    })
})

router.route("/updateUser").put(async(req,res) =>{
    const id = req.body.id;
    const {
        userName,
        long,
        lat,
        date
    } = req.body;

    const newUserLocation = {
        userName : userName,
        long : long,
        lat : lat,
        weather : weather,
        date : date
    }

    await Userss.findByIdAndUpdate(id,newUserLocation).then(()=>{
        res.status(200).send({status : 'updated',data : newUserLocation})
    }).catch((err) =>{
        res.status(400).send({status : err})
    })
})


module.exports =  router