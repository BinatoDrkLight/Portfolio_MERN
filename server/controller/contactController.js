import { sendEmail } from "../configs/sendEmail.js";
import Contact from "../models/Contact.js";

// Contact : /api/contact/send-message
export const sendMessage = async (req, res) => {
    try {
        const { mail } = req.body

        const MAX_LENGTHS = {
            firstName: 30,
            lastName: 30,
            email: 60,
            message: 2000,
        };

        if (mail.firstName.length > MAX_LENGTHS.firstName) {
        return res.json({ success: false, message: `First name cannot exceed ${MAX_LENGTHS.firstName} characters` });
        }

        if (mail.lastName.length > MAX_LENGTHS.lastName) {
        return res.json({ success: false, message: `Last name cannot exceed ${MAX_LENGTHS.lastName} characters` });
        }

        if (mail.email.length > MAX_LENGTHS.email) {
        return res.json({ success: false, message: `Email cannot exceed ${MAX_LENGTHS.email} characters` });
        }

        if (mail.message.length > MAX_LENGTHS.message) {
        return res.json({ success: false, message: `Message cannot exceed ${MAX_LENGTHS.message} characters` });
        }

        await Contact.create({...mail})
        await sendEmail(mail.email, mail.firstName, mail.lastName, mail.message);
        res.json({ success: true, message: "Message sent successfully" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}