const Organizers = require("../models/eventsmodels/OrganizersModel")
const EventModel = require('../models/eventsmodels/EventsModel');

exports.createOrganizer = async (req, res) => {
    try {
        const { organizer_name, address, head_organizer, contact_organizer, rating, org_insta, org_linkedin } = req.body;
        // Create a new organizer
        const organizer = new Organizers({
        organizer_name,
        address,
        head_organizer,
        contact_organizer,
        rating,
        org_insta,
        org_linkedin,
        });

        // Save to the database
        await organizer.save();

        res.status(201).json({
        success: true,
        message: 'Organizer created successfully',
        data: organizer,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


exports.createEvent = async (req, res) => {
  try {
    const { 
      event_name, 
      event_organizer, 
      event_description, 
      coordinator_name, 
      coordinator_contact, 
      address_url, 
      entry_fees, 
      last_date_register, 
      event_date, 
      sport, 
      no_of_applicants, 
      sport_type, 
      address, 
      price 
    } = req.body;

    // Check if the organizer exists
    const organizer = await Organizers.findById(event_organizer);
    if (!organizer) {
      return res.status(404).json({ success: false, message: 'Organizer not found' });
    }

    // Create a new event
    const event = new EventModel({
      event_name,
      event_organizer,
      event_description,
      coordinator_name,
      coordinator_contact,
      address_url,
      entry_fees,
      last_date_register,
      event_date,
      sport,
      no_of_applicants,
      sport_type,
      address,
      price,
      event_image: req.file?.path || 'public/images/default.png', // Assuming file upload middleware is used
    });

    // Save to the database
    await event.save();

    const populatedEvent = await EventModel.findById(event._id)
    .populate("sport")
    .populate("event_organizer")
    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: populatedEvent,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
