"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://127.0.0.0");

export async function authenticate(_currentState: unknown, formData: any) {
  try {
    await pb
      .collection("users")
      .authWithPassword(formData.email, formData.password);
    sessionStorage.setItem("authToken", pb.authStore.token);
    return true;
  } catch (error) {
    if (error) {
      return false;
    }
    throw error;
  }
}

export async function createUser(_currentState: unknown, formData: any) {
  try {
    await pb.collection("users").create({
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordValidation,
    });
    return true;
  } catch (error) {
    if (error) {
      return false;
    }
    throw error;
  }
}
