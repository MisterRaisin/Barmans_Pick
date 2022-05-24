const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('connected'))
.catch(e=>console.log(e));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function() {
    console.log('Connection Successful');
});


// Models
require('./Cocktail');
require('./Ingredient')