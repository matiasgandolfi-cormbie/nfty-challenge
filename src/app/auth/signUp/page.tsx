'use server'
import { SignUpForm } from '@/app/auth/signUp/SignUpForm'
import React from 'react'
import { registerUser } from '../../utils/registerUser'

function Page() {
  return (
    <SignUpForm registerUser={registerUser} />
)
}

export default Page