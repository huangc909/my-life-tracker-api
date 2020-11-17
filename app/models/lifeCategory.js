const mongoose = require('mongoose')

const lifeCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('LifeCategory', lifeCategorySchema)
