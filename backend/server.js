const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const uri = require('./config/keys').mongoURI;

const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());

//Express body parser
//app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//app.use('/', require('./routes/home'));
app.use('/', require('./routes/user'));
app.use('/dashboard/lib', require('./routes/song'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});