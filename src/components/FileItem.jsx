import { FileIcon, MoreVertical } from "lucide-react";

export default function FileItem({ file, openConformationModal }) {
  return (
    <div className="card flex flex-grow flex-row items-center justify-between bg-base-100 p-2 shadow-md">
      <div className="ml-2 flex items-center gap-2 truncate">
        <FileIcon className="min-w-fit" />
        <span className="truncate text-ellipsis">{file.name}</span>
      </div>
      <div className="dropdown dropdown-left min-w-fit ">
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
          <MoreVertical className="min-w-fit" />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a href={file.url} rel="noreferrer" target="_blank">
              View
            </a>
          </li>
          <li>
            <span onClick={() => openConformationModal(file)}>Delete</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
// Commit on 2024-01-23T12:42:00
// Commit on 2024-02-29T11:25:00
// Commit on 2024-04-06T10:04:00
// Commit on 2024-05-13T13:09:00
// Commit on 2024-06-19T11:30:00
// Commit on 2024-07-26T15:15:00
// Commit on 2024-09-01T11:51:00
// Commit on 2024-10-08T16:09:00
// Commit on 2024-11-14T17:10:00
// Commit on 2024-12-21T10:09:00
