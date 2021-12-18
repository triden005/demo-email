const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "smwtrsmjipejx63c@ethereal.email",
        pass: "Kz5jEsRGrTJPjY7XfM",
    },
});
