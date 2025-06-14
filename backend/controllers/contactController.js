const nodemailer = require("nodemailer");

const sendContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ errr: "All fields are require!!." });
    }
    try {
        const transporter = nodemailer.createTransport({
            service:"Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: "📬 New Portfolio Contact Message",
            html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Email:</strong>${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Email send error", error);
        res.status(500).json({ error: "Failed to send message. Try again later." });
    }  
};
module.exports = { sendContactMessage };