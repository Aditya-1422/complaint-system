const mongoose = require('mongoose');

function connect() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb+srv://adityaozalwarcnp:adityadb@cluster0.e8v0ytz.mongodb.net/mydatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

// Call the connect function to establish the connection
connect();

// Export the connect function if needed
module.exports = connect;
