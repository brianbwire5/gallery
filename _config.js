var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://brianbwire:<password>@gallery.leelxxf.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://brianbwire:<password>@gallery.leelxxf.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://brianbwire:<password>@gallery.leelxxf.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
