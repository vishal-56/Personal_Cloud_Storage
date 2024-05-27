import { Link } from "react-router-dom";
import { mainScreenshot } from "../assets";
import { CentredContainer } from "../components/auth/CentredContainer";
import { AuthHeader } from "../components/auth/AuthHeader";

export default function Home() {
  return (
    <CentredContainer>
      <AuthHeader
        title="Easy access to your content"
        subtitle="Store files and folders from your mobile device, tablet, or computer"
      />

      <div className="flex flex-col items-center text-center">
        <div className="card w-fit overflow-clip rounded-md bg-base-100 shadow-md">
          <img className="h-80 w-fit" src={mainScreenshot} />
        </div>
        <div className="card w-40"></div>

        <div className="mt-6 flex w-full gap-4">
          <Link className="btn btn-primary w-full shrink" to="/login">
            Login
          </Link>

          <Link className="btn btn-primary w-full shrink" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </CentredContainer>
  );
}
// Commit on 2024-02-06T11:38:00
// Commit on 2024-03-14T17:33:00
// Commit on 2024-04-20T13:38:00
// Commit on 2024-05-27T14:40:00
