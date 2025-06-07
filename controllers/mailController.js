const nodemailer = require("nodemailer");

// Define transporter once at the top
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jainampokal@gmail.com",
        pass: "emwg cukk rxuz camc", 
    },
});

module.exports.sendMail = async (req, res) => {
    const { name, email, message } = req.body;

    const info = await transporter.sendMail({
        from: '"Portfolio Contact" <jainampokal@gmail.com>',
        to: "pokaljainam@gmail.com",
        subject: "New Message",
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    });

    console.log("Message sent:", info.messageId);
    res.send("Your message was sent!");
};

module.exports.subscribe = (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: email,
        to: "pokaljainam@gmail.com",
        subject: "New Subscriber",
        html: `<p><b>Email:</b> ${email}</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Error subscribing:", err);
            return res.send("Error subscribing.");
        }
        return res.render('index', { message: "Subscribed successfully!" });
    });
};
