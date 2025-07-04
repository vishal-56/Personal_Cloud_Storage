import { FolderIcon, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function FolderItem({ folder, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-md border p-3">
      <Link
        to={{
          pathname: `/folder/${folder.id}`,
          state: { folder: folder },
        }}
        className="flex flex-grow items-center gap-2 truncate"
      >
        <FolderIcon />
        <span className="truncate">{folder.name}</span>
      </Link>
      <button
        className="btn btn-sm btn-error btn-outline"
        onClick={() => onDelete(folder)}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
// Commit on 2024-01-25T13:01:00
// Commit on 2024-03-02T16:49:00
// Commit on 2024-04-08T14:59:00
// Commit on 2024-05-15T16:37:00
// Commit on 2024-06-21T15:44:00
// Commit on 2024-07-28T14:49:00
// Commit on 2024-09-03T13:38:00
// Commit on 2024-10-10T17:54:00
// Commit on 2024-11-16T17:16:00
// Commit on 2024-12-23T15:43:00
