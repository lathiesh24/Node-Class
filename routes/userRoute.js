const express = require ('express');
const UserSchema = require("../models/UserSchema")
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try{
      const salt = bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      const createUser = await new UserSchema({
        username: req.body.username,
        email:req.body.email,
        password:hashedPassword
      })

      
      const saveUser = await createUser.save();
      res.status(200).json(saveUser);
    }catch(error){
       res.status(500).json(error.message);
    }
})

// router.get('/register', async (req, res) => {
//   try{
//     const savedUsers = await UserSchema.find()
//     res.status(200).json(savedUsers);
//   }catch(error){
//     res.status(500).json(error.message);
//   }
// });

router.get('/register/', async (req, res) => {
  try {
    const userId = req.query.id; 
    const savedUser = await UserSchema.findById(userId);
    if (!savedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;