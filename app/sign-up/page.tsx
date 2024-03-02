import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp
      signInUrl="/sign-in"
      afterSignUpUrl="/resume-import"
      redirectUrl="/resume-import"
      routing="path"
      afterSignInUrl="/resume-import"
      />
    </div>
  );
}
