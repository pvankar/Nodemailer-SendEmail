require("dotenv").config();
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

async function sendEmailWithAttachment(filePath) {
  try {
    // 1Validate file exists
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found at given path");
    }

    // 2Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3Extract filename
    const fileName = path.basename(filePath);

    // 4Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "cehatoc195@dolofan.com",
      subject: "File Attachment from Node.js",
      text: "Please find the attached file.",
      attachments: [
        {
          filename: fileName,
          path: filePath, // Nodemailer reads directly from path
        },
      ],
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// Example usage
const filePathFromUser = process.argv[2]; // Pass path from terminal
sendEmailWithAttachment(filePathFromUser);