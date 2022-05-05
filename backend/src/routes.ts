import express from "express";

import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { NodemailerMailAdapter } from "./nodemailer/NodemailerMailAdapter";
import { SubmitFeedbackUseCase } from "./useCases/SubmitFeedbackUseCase";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUserCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUserCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
