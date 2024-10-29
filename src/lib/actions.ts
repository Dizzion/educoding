"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function authenticate(formData: any) {
  try {
    const res = await pb
      .collection("users")
      .authWithPassword(formData.email, formData.password);
    return res;
  } catch (error) {
    if (error) {
      console.log(error);
      return 'Failed to validate credentials';
    }
    throw error;
  }
}

export async function createUser(formData: any) {
  try {
    await pb.collection("users").create({
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    });
  } catch (error) {
    if (error) {
      return 'Failed to create User.';
    }
    throw error;
  }
}
