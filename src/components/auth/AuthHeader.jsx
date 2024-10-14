import { ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function AuthHeader(props) {
  return (
    <>
      <div className="mb-4 flex items-center justify-center">
        <ClipboardCheck size={25} />
        <Link
          className="text-center text-xl font-semibold text-gray-700"
          to="/home"
        >
          Personal Cloud Storage
        </Link>
      </div>

      <div className="my-5">
        <h1 className="text-4xl font-medium">{props.title}</h1>
        <p className="text-slate-500">{props.subtitle}</p>
      </div>
    </>
  );
}
// Commit on 2024-01-29T13:25:00
// Commit on 2024-03-06T15:45:00
// Commit on 2024-04-12T15:18:00
// Commit on 2024-05-19T16:59:00
// Commit on 2024-06-25T16:39:00
// Commit on 2024-08-01T16:50:00
// Commit on 2024-09-07T13:22:00
// Commit on 2024-10-14T13:59:00
