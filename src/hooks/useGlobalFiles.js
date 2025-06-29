import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export function useGlobalFiles() {
  const { currentUser } = useAuth();
  const [allFiles, setAllFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = db.files
      .where("userId", "==", currentUser.uid)
      .onSnapshot((snapshot) => {
        setAllFiles(snapshot.docs.map(db.formatDoc));
        setLoading(false);
      });

    return unsubscribe;
  }, [currentUser]);

  return { allFiles, loading };
}
// Commit on 2024-01-15T13:18:00
// Commit on 2024-02-21T11:20:00
// Commit on 2024-03-29T13:38:00
// Commit on 2024-05-05T12:00:00
// Commit on 2024-06-11T14:34:00
// Commit on 2024-07-18T10:41:00
// Commit on 2024-08-24T11:19:00
// Commit on 2024-09-30T17:17:00
// Commit on 2024-11-06T17:32:00
// Commit on 2024-12-13T14:01:00
