'use server'
 
import { signIn } from "next-auth/react"
 
export async function authenticate(_currentState: unknown, formData: any) {
  try {
    await signIn('credentials', formData)
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