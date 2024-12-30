'use server'
import { SignUpForm } from '@/components/SignUpForm'
import React from 'react'
import { registerUser } from '../../utils/registerUser'

function Page() {
  return (
    <SignUpForm registerUser={registerUser} />
)
}

export default Page