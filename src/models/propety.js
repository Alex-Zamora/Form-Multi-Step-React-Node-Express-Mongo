const mongoose = require('mongoose');
const { Schema } = mongoose;

const PropetySchema = new Schema({
  adress: {  
    state: {
      type: String,
      required: [true, 'The state is required.']
    },
    city: {
      type: String,
      required: [true, 'The city is required.']
    },
    colony: {
      type: String,
      required: [true, 'The colony is required.']
    },
    number: {
      type: Number,
      required: [true, 'The number is required.']
    }
  },
  owner: {
    name: {
      type: String,
      required: [true, 'The name is required.']
    },
    lastName: {
      type: String,
      required: [true, 'The last name is required.']
    },
    age: {
      type: Number,
      required: [true, 'The age is required.']
    },
    phone: {
      type: Number,
      required: [true, 'The phone is required.']
    },
    email: {
      type: String,
      required: [true, 'The email is required.']
    }
  },
  salePrice: {
    type: Number,
    required: [true, 'The state is required.']
  }
});

module.exports = mongoose.model('Propety', PropetySchema);