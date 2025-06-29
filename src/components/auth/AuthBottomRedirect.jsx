import { Link } from "react-router-dom";

export function AuthBottomRedirect({ text, linkText, linkTo }) {
  return (
    <p className="text-center">
      {text}{" "}
      <Link
        to={linkTo}
        className="inline-flex items-center space-x-1 font-medium text-secondary hover:text-neutral-900"
      >
        <span>{linkText}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </Link>
    </p>
  );
}
// Commit on 2024-01-28T14:32:00
// Commit on 2024-03-05T14:28:00
// Commit on 2024-04-11T17:53:00
// Commit on 2024-05-18T12:29:00
// Commit on 2024-06-24T17:36:00
// Commit on 2024-07-31T11:24:00
// Commit on 2024-09-06T12:51:00
// Commit on 2024-10-13T11:52:00
// Commit on 2024-11-19T16:41:00
// Commit on 2024-12-26T12:36:00
