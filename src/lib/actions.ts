'use server'
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.io');
 
export async function authenticate(_currentState: unknown, formData: any) {
  try {
    await pb.collection('users').authWithPassword(formData.email, formData.password);
    sessionStorage.setItem('authToken', pb.authStore.token);
  } catch (error) {
    if (error) {
      switch (error) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function createUser(_currentState:unknown, formData: any) {
  try {
    await pb.collection('users').create({email: formData.email, password: formData.password, passwordConfirm: formData.passwordValidation});
    useRouter().push('/Login');
  } catch (error) {
    if (error) {
      switch (error) {
        case 'Confirmation Password Error':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}