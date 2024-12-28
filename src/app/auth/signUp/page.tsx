'use server'
import { RegisterForm } from '@/components/RegisterForm'
import React from 'react'
import { registerUser } from '../../utils/registerUser'

function Page() {
  return (
    <RegisterForm registerUser={registerUser} />
)
}

export default Page