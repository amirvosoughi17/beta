import nodemailer from 'nodemailer'
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

export async function send_mail(options) {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        tls: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });
    const projectRoot = process.cwd();
    const templatePath = path.join(projectRoot, 'src/assets/email', `${options.template}.ejs`);
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = ejs.compile(templateContent);
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: options.email,
        subject: options.subject || 'تیم ویکسل',
        html: compiledTemplate(options.templateData)
    };

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(`ERROR FROM EMAIL: ${error}`);
    }
}   