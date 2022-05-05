import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./../adapters/EmailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "27ba3ae6b6e197",
    pass: "7b533e1130341d",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Rodrigo Baggio <rodrigo.baggio.si@gmail.com>",
      subject,
      html: body,
    });
  }
}
