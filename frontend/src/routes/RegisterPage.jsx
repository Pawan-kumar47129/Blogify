import { SignUp } from '@clerk/clerk-react'

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80)]">
      <SignUp signInUrl='/login'/>
    </div>
  )
}

export default RegisterPage
