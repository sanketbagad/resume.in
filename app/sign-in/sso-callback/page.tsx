import { SignUpButton } from "@clerk/nextjs";

export default function SsoCallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome To Resume.in!</h1>
      <p className="text-gray-600 mb-8 text-center">You are almost there. Please sign up to continue.</p>
      <SignUpButton mode="modal" afterSignInUrl="/resume-import">
        <button className="btn-primary">Sign Up</button>
      </SignUpButton>
    </div>
  );
}
