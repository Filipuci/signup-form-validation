import { AuthIllustration } from "./components/AuthIllustration"
import { SignUpForm } from "./components/SignUpForm"

const App = () => {
  return (
    <div className="h-dvh flex justify-center items-center px-36">
      <AuthIllustration />
      <SignUpForm />
    </div>
  )
}

export default App