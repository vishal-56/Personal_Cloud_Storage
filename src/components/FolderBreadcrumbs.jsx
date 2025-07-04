import { Folder } from "lucide-react";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../hooks/useFolder";

export default function Breadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];

  return (
    <div className="breadcrumbs">
      <ul className="flex flex-wrap gap-y-1">
        {path.map((folder, index) => (
          <li key={folder.id}>
            <Link
              to={{
                pathname: folder.id ? `/folder/${folder.id}` : "/",
                state: { folder: { ...folder, path: path.slice(1, index) } },
              }}
            >
              <div className="inline-flex max-w-40 items-center gap-1 truncate">
                <Folder size={18} />
                {folder.name}
              </div>
            </Link>
          </li>
        ))}
        {currentFolder && (
          <li>
            <div className="inline-flex max-w-40 items-center gap-1 truncate">
              <Folder size={18} />
              {currentFolder.name}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
// Commit on 2024-01-24T16:07:00
// Commit on 2024-03-01T17:09:00
// Commit on 2024-04-07T10:04:00
// Commit on 2024-05-14T16:29:00
// Commit on 2024-06-20T16:27:00
// Commit on 2024-07-27T12:12:00
// Commit on 2024-09-02T16:29:00
// Commit on 2024-10-09T10:43:00
// Commit on 2024-11-15T14:15:00
// Commit on 2024-12-22T17:06:00
