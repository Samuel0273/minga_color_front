import ImageSignin from "../components/ImageSignin"
import FormularioSignin from "../components/FormularioSignin"

export default function SignIn() {
  return (
    <main className="flex w-full lg:bg-white min-h-screen">
      <ImageSignin />
      <FormularioSignin />
    </main>
  )
}