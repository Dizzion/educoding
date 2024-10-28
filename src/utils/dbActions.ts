"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function createAnswer(
  codeAnswer: string,
  category: string,
  questionId: number
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
  questionId: number,
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
