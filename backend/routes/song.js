const router = require('express').Router();
let Song = require('../models/songmodel');

router.route('/').get((req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Song.findById(req.params.id)
    .then(playsong => res.json(playsong))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;