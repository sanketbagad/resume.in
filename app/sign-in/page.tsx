import { SignIn } from "@clerk/nextjs";
import { TopNavBar } from "../components/TopNavBar";
 
export default function Page() {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
    </>
  );
}