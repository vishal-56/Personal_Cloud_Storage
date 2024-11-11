import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ConfirmationModal({
  showModal,
  setShowModal,
  title,
  text,
  onConfirmation,
}) {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showModal) {
      modalRef?.current?.showModal();
    } else {
      modalRef?.current?.close();
    }
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onConfirmation();
    setLoading(false);
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        {/* if there is a button in form, it will close the modal */}
        <button
          disabled={loading}
          className="btn btn-ghost absolute right-2 top-2 text-slate-500 hover:text-slate-600"
          onClick={() => setShowModal(false)}
        >
          <X />
        </button>

        <h3 className="text-lg font-bold">{title}</h3>

        <p className="mb-4">{text}</p>
        <div className="flex w-full gap-4">
          <button
            disabled={loading}
            className="btn btn-error flex-grow text-white"
            onClick={handleSubmit}
          >
            {loading && <span className="loading loading-spinner" />}
            Delete
          </button>
          <button
            disabled={loading}
            className="btn btn-outline flex-grow "
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button disabled={loading} onClick={() => setShowModal(false)}>
          close
        </button>
      </form>
    </dialog>
  );
}
// Commit on 2024-01-20T11:20:00
// Commit on 2024-02-26T11:15:00
// Commit on 2024-04-03T13:31:00
// Commit on 2024-05-10T10:33:00
// Commit on 2024-06-16T13:00:00
// Commit on 2024-07-23T10:23:00
// Commit on 2024-08-29T13:51:00
// Commit on 2024-10-05T15:36:00
// Commit on 2024-11-11T12:49:00
