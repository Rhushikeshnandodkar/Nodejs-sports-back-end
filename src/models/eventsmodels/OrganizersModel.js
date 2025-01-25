const mongoose = require("mongoose")

const nullableString = {
    type : String,
    default : null
}

const OrganizerSchema = new mongoose.Schema({
    organizer_name: { ...nullableString, maxlength: 500 },
    address: { ...nullableString, maxlength: 300 }, // Specify a different maxLength
    head_organizer: { ...nullableString, maxlength: 500 },
    contact_organizer: { ...nullableString, maxlength: 100 },
    rating: { type: Number, default: null },
    org_insta: nullableString,
    org_linkedin: nullableString,
  });

const Organizer = mongoose.model('Organizer', OrganizerSchema);

module.exports = Organizer