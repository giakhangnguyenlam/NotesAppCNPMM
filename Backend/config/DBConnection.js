const mongoose = require('mongoose');
//this is  my host mongodb in atlas cluster

(async () => {
    await mongoose.connect('mongodb+srv://khangnguyen:123@cluster0.8tlyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
})()