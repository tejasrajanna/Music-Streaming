const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  url: {
    type:String,
    required:true
  }
});

const song = mongoose.model('Song', SongSchema,"song");
    

module.exports = song;
