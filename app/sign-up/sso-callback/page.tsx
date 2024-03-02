import { SignInButton } from "@clerk/nextjs";

export default function SsoCallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
      <p className="text-gray-600 mb-8 text-center">You already have an account. Please sign in to continue.</p>
      <SignInButton mode="modal" afterSignInUrl="/resume-import">
        <button className="btn-primary">Sign In</button>
      </SignInButton>
    </div>
  );
}
