const mongoose = require("mongoose")

const nullableString = {
    type : String,
    default : null
}
const EventSchema = new mongoose.Schema({
    SPORT_TYPE_CHOICES: {
      type: String,
      enum: ['individual', 'team'],
      default: 'individual',
    },
    event_name: nullableString,
    event_organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer', default: null },
    event_description: { type: String, default: null }, // RichTextField replaced with a simple String
    coordinator_name: nullableString,
    coordinator_contact: { ...nullableString, maxlength: 10 },
    address_url: { type: String, default: null }, // URLField equivalent
    entry_fees: nullableString,
    last_date_register: { type: Date, default: null },
    event_date: { type: Date, default: null },
    sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Interest', default: null }, // Reference to InterestModel
    event_image: { type: String, default: 'public/images/default.png' },
    no_of_applicants: { type: Number, default: null },
    sport_type: { type: String, enum: ['individual', 'team'], default: 'individual' },
    address: { type: String, default: null },
    price: { type: String, default: null }, // RichTextField replaced with a simple String
});

  // Create Models
const EventModel = mongoose.model('EventsModel', EventSchema);

module.exports = EventModel;