const mongoose = require('mongoose')

// Define Schema
const RepertoireSchema = new mongoose.Schema({
  nom: String,
  telephone: String,
})

RepertoireSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Export model
module.exports = mongoose.model('Repertoires', RepertoireSchema)