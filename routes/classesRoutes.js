const express = require('express');
const classesModel = require('../models/classesModel');
const router = express.Router();


// Route to get all classes
router.get('/classes', async (req, res) => {
    try {
        const classes = await classesModel.find({});
        res.json({
            success: true,
            classes
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Route to create a new class
router.post('/new-class', async (req, res) => {
    try {
        console.log('hello');
        const newClass = req.body;
        const _newClass = await classesModel.create(newClass);
        res.json({
            success: true,
            _newClass
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

//get the classes using instructor email id
router.get('/classes/:email',async(req,res)=>{
    try {
        const _email=req.params.email
        const query={instructorEmail:_email}
        const classes=await classesModel.find(query)
        console.log(classes);
        res.json({
            success:true,
            classes
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
    
//classes-manage
router.get('/classes-manage', async (req, res) => {
    try {
        const classes = await classesModel.find({});
        res.json({
            success: true,
            classes
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

//change-status
router.patch('/change-status/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const reason = req.body.reason;
      const filter = { _id: id };
      console.log(filter);
      const updatedDoc = {
        $set: {
          status: status,
          reason: reason
        }
      };
  
      const result = await classesModel.updateOne(filter, updatedDoc, { upsert: true });
      res.status(200).json({
        success: true,
        result: result
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
})

//get approved class
router.get('/approved-classes', async (req, res) => {
    try {
      const query={status:'approved'}
      const result = await classesModel.find(query);
      res.status(200).json({
        success: true,
        result: result
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  //get-single-class
  router.get('/class/:id', async (req, res) => {
    try {
      const id=req.params.id
      const result = await classesModel.findOne({_id:id});
      res.status(200).json({
        success: true,
        result: result
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

//update class details
router.patch('/update-class/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const updatedClass = req.body;
      const query = { _id: id };
      const options = { upsert: true };
      const updateDoc = {
          $set: updatedClass
      };

      const result = await classesModel.updateOne(query, updateDoc, options);
      
      res.json({
          success: true,
          result
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Error updating class',
          error
      });
  }
});
module.exports = router;
