const express = require ('express');
const UserSchema = require("../models/UserSchema")
const router = express.Router();

router.post('/register', async (req, res) => {
    try{
      const createUser = await new UserSchema({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
      })
      const saveUser = await createUser.save();
      res.status(200).json(saveUser);
    }catch(error){
       res.status(500).json(error.message);
    }
})

module.exports = router;