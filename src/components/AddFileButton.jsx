import { FileUp } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { v4 as uuidV4 } from "uuid";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { db, storage } from "../firebase";
import { ALERT_CLASSES } from "../constants";
import { useAlert } from "../contexts/AlertContext";

export default function AddFileButton({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const { currentUser } = useAuth();
  const { showAlert } = useAlert();

  function handleUpload(e) {
    const files = Array.from(e.target.files);
    if (currentFolder == null || files.length === 0) return;

    files.forEach((file) => {
      const id = uuidV4();
      setUploadingFiles((prev) => [
        ...prev,
        { id, name: file.name, progress: 0, error: false },
      ]);

      const filePath =
        currentFolder === ROOT_FOLDER
          ? `${currentFolder.path.join("/")}/${file.name}`
          : `${currentFolder.path.join("/")}/${currentFolder.name}/${file.name}`;

      const uploadTask = storage
        .ref(`/files/${currentUser.uid}/${filePath}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = snapshot.bytesTransferred / snapshot.totalBytes;
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.id === id ? { ...f, progress } : f
            )
          );
        },
        () => {
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.id === id ? { ...f, error: true } : f
            )
          );
        },
        () => {
          setUploadingFiles((prev) =>
            prev.filter((f) => f.id !== id)
          );

          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            db.files
              .where("name", "==", file.name)
              .where("userId", "==", currentUser.uid)
              .where("folderId", "==", currentFolder.id)
              .get()
              .then((existingFiles) => {
                const existingFile = existingFiles.docs[0];
                if (existingFile) {
                  existingFile.ref.update({ url });
                } else {
                  db.files.add({
                    url,
                    name: file.name,
                    createdAt: db.getCurrentTimestamp(),
                    folderId: currentFolder.id,
                    userId: currentUser.uid,
                    size: file.size,
                  });
                }
              });
          });

          showAlert(ALERT_CLASSES.SUCCESS, `Files uploaded successfully`);
        }
      );
    });
  }

  return (
    <>
      <label className="btn btn-primary flex-grow overflow-hidden">
        <FileUp />
        <span>Upload File(s)</span>
        <input
          type="file"
          multiple
          onChange={handleUpload}
          className="absolute -left-96 opacity-0"
        />
      </label>

      {uploadingFiles.length > 0 &&
        uploadingFiles.map((file) => (
          <dialog
            key={file.id}
            className="modal modal-open"
          >
            <div className="modal-box flex min-w-64 flex-col gap-4">
              <div className="font-semibold">{file.name}</div>
              <progress
                className={`progress ${file.error ? "progress-error" : "progress-primary"}`}
                value={file.error ? 100 : file.progress * 100}
                max="100"
              />
              {file.error && (
                <span className="text-sm text-red-500">Upload failed</span>
              )}
            </div>
          </dialog>
        ))}
    </>
  );
}
// Commit on 2024-01-18T17:36:00
// Commit on 2024-02-24T17:23:00
// Commit on 2024-04-01T17:32:00
// Commit on 2024-05-08T10:57:00
// Commit on 2024-06-14T13:01:00
// Commit on 2024-07-21T13:51:00
// Commit on 2024-08-27T11:44:00
