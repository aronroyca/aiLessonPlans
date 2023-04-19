const mongoose = require('mongoose');
const connectionString = 'http://localhost:27017/'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})