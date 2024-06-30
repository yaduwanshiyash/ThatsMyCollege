import { transporter, mailOption } from "@/config/nodemailer";

const emailContent = (data) => {
    try {
        const parsedData = JSON.parse(data);
        return {
            text: `New Message\n\nCollege Name: ${parsedData.collegeName}\nName: ${parsedData.name}\nEmail: ${parsedData.email}\nMobile: ${parsedData.mobile}\nCity: ${parsedData.city}\nInterested Course: ${parsedData.course}`,
            html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Email Inbox</title></head><body><table><tbody><tr><td style="font-size:16px; font-weight: bold">Apply Form from TMC <br><br></td></tr><br><tr><td>College Name: ${parsedData.collegeName}<br><br>Name: ${parsedData.name}<br><br>Email: ${parsedData.email}<br><br>Mobile: ${parsedData.mobile}<br><br>City: ${parsedData.city}<br><br>Interested Course: ${parsedData.course}</td></tr></tbody></table></body></html>`
        }
    } catch (error) {
        console.error("Error parsing data:", error);
        return {
            text: "Error parsing data",
            html: "Error parsing data"
        };
    }
}

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data || typeof data !== 'string') {
            return res.status(400).json({ message: 'Invalid data format' });
        }

        try {
            await transporter.sendMail({
                ...mailOption,
                ...emailContent(data),
                subject: "TMC Apply Form",
            })
            console.log("Email sent successfully!");
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "An error occurred while sending the email" });
        }
    } else {
        res.status(400).json({ message: 'Bad request' });
    }
}

export default handler;


