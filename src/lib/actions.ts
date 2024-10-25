'use server'
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.io');
 
export async function authenticate(_currentState: unknown, formData: {email: string, password: string}) {
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

