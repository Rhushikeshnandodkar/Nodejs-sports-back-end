const mongoose = require("mongoose")

const nullableString = {
    type : String,
    default : null
}
// Event Date Schema
const EventDateSchema = new mongoose.Schema({
    type: { ...nullableString, maxlength: 300 },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    date: { type: Date, required: true }, // Individual date for the event
  });

const EventDate = mongoose.model('EventDate', EventDateSchema);

module.exports = EventDate;