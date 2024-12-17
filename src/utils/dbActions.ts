"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function createAnswer(
  codeAnswer: string,
  category: string,
  questionId: string
) {
  const record = {
    user_owned: sessionStorage.getItem("user_id"),
    module: category,
    question: questionId,
    answer: codeAnswer,
  };
  await pb.collection("Answers").create(record);
}

export async function updateAnswer(
  codeAnswer: string,
  category: string,
  questionId: string,
  answerid: string
) {
  const record = {
    user_owned: sessionStorage.getItem("user_id"),
    module: category,
    question: questionId,
    answer: codeAnswer,
  };
  await pb.collection("Answers").update(answerid, record);
}

export async function submitAnswer(
  questionId: string,
  answerId: string
) {
  const questionToUpdate = await pb.collection("Algorithms").getOne(questionId);
  const record = {
    ...questionToUpdate,
    SubmittedAnswers: answerId
  };
  await pb.collection("Algorithms").update(questionId, record);
}