const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
})


const User = mongoose.model("user", UserSchema);


module.exports = {
    async signup(email, password) {
        const persone = new User({ email: email, password: password });
        return await persone.save();
    },

    async existingEmail(email) {
        const c = await User.countDocuments({ email: email });
        return c;
    },

    async signin(email, password) {
        const c = await User.find({ email: email, password: password });
        return c;
    },

    async deleteUser(id) {
        const deleteu = await User.findByIdAndRemove(id).exec();
        return deleteu;
    },
}