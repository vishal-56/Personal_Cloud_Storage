import { CheckCircle2, XCircle } from "lucide-react";

export function Alert({ alert }) {
  return (
    <div className="toast toast-center toast-middle z-50 w-screen max-w-lg">
      <div className={"alert flex text-white " + alert.className} role="alert">
        {alert.className === "alert-success" ? (
          <CheckCircle2 className="shrink-0" />
        ) : (
          <XCircle className="shrink-0" />
        )}
        <span className="flex-grow text-wrap text-center ">
          {alert.message}
        </span>
      </div>
    </div>
  );
}
// Commit on 2024-01-19T10:53:00
// Commit on 2024-02-25T13:13:00
// Commit on 2024-04-02T16:07:00
// Commit on 2024-05-09T14:04:00
// Commit on 2024-06-15T11:12:00
// Commit on 2024-07-22T11:16:00
// Commit on 2024-08-28T11:35:00
// Commit on 2024-10-04T17:35:00
// Commit on 2024-11-10T13:15:00
// Commit on 2024-12-17T12:39:00
