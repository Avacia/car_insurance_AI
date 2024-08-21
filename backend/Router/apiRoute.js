const express= require('express');  
const router = express.Router();

const chatController = require('../Controller/Chat');
router.get('/chat', chatController.handler);
router.post('/conversation', chatController.conversation);

module.exports = router;
