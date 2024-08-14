const express= require('express');  
const router = express.Router();

const chatController = require('../Controller/Chat');
router.post('/chat', chatController.handler);

module.exports = router;
