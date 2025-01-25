const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const eventController = require('../controllers/eventController');
const upload = require("../config/multerConfig");
// Middleware to allow only admins and organizers
router.post('/create-organizers', authMiddleware.protect, authMiddleware.authorize(['admin']), eventController.createOrganizer);
router.post('/create-events', authMiddleware.protect, authMiddleware.authorize(['admin', 'Coordinator']), upload.single('event_image'), eventController.createEvent);
// router.post('/event-dates', authMiddleware.protect, authMiddleware.authorize(['admin', 'Coordinator']), createEventDate);

module.exports = router;
