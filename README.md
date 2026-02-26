# Nodemailer Email Sender

This project is a Node.js script that uses Nodemailer to send emails to a list of recipients from a text file using a Gmail account.

## How to Use

### 1. Setup and Installation

First, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/pvankar/Nodemailer-SendEmail.git
cd Nodemailer-SendEmail
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root of the project. This file will store your email credentials securely. Add the following lines to the `.env` file:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

Replace `your-email@gmail.com` with your Gmail address. For the `EMAIL_PASS`, you need to generate a Google App Password.

### 3. Generating a Google App Password

Due to Google's security measures, you cannot use your regular Google account password directly. Instead, you need to generate and use an "App Password".

1.  **Enable 2-Step Verification:**
    *   Go to your [Google Account security settings](https://myaccount.google.com/security).
    *   Enable **2-Step Verification** if it's not already active. This is required to create App Passwords.

2.  **Generate an App Password:**
    *   In the same security settings page, go to the **App Passwords** section.
    *   Click on "Select app" and choose "Other (Custom name)".
    *   Give it a descriptive name, like "Node.js Mailer", and click "Generate".

3.  **Copy the Password:**
    *   Google will generate a 16-digit password. **Copy this password.** This is what you will use in your `.env` file.

4.  **Update `.env` file:**
    *   Paste the 16-digit App Password into the `EMAIL_PASS` field in your `.env` file.

### 4. Prepare Recipient List

Create a `data.txt` file in the root of the project. Add the email addresses of the recipients, with each email on a new line.

```
recipient1@example.com
recipient2@example.com
recipient3@example.com
```

### 5. Run the Script

Execute the script from your terminal, providing the path to your `data.txt` file as an argument:

```bash
node index.js "path/to/your/data.txt"
```

For example:
```bash
node index.js "C:\Users\pvankar\Documents\Projects\Practice Project\node scripts\data.txt"
```

The script will then read the email addresses from `data.txt` and send an email to each recipient.
