import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactRecipient = process.env.CONTACT_TO_EMAIL; // where contact form emails should be sent

let transporter: ReturnType<typeof nodemailer.createTransport> | undefined;
if (smtpHost && smtpPort && smtpUser && smtpPass) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // Attempt to send an email notification if SMTP is configured
      if (transporter && contactRecipient) {
        (async () => {
          try {
            await transporter.sendMail({
              from: smtpUser,
              to: contactRecipient,
              subject: `New contact message from ${message.name}`,
              text: `Name: ${message.name}\nEmail: ${message.email}\n\nMessage:\n${message.message}`,
            });
          } catch (err) {
            // Log but do not block the response
            // eslint-disable-next-line no-console
            console.error("Failed to send contact email:", err);
          }
        })();
      }
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
