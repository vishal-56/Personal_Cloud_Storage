import React, { useReducer, useEffect } from "react";
import { useAuth } from "/src/contexts/AuthContext.jsx";
import { db } from "/src/firebase.js";

const ACTIONS = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
  SET_CHILD_FOLDERS: "set-child-folders",
  SET_CHILD_FILES: "set-child-files",
};

export const ROOT_FOLDER = { name: "Root", id: null, path: [] };

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolders: [],
        loadingState: { childFolders: false, childFiles: false },
      };
    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
    case ACTIONS.SET_CHILD_FOLDERS:
      return {
        ...state,
        childFolders: payload.childFolders,
        loadingState: { ...state?.loadingState, childFolders: true },
      };
    case ACTIONS.SET_CHILD_FILES:
      return {
        ...state,
        childFiles: payload.childFiles,
        loadingState: { ...state?.loadingState, childFiles: true },
      };
    default:
      return state;
  }
}

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
    loadingState: { childFolders: false, childFiles: false },
  });
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } });
  }, [folderId, folder]);

  useEffect(() => {
    if (folderId == null) {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }

    db.folders
      .doc(folderId)
      .get()
      .then((doc) => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: db.formatDoc(doc) },
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]);

  useEffect(() => {
    return db.folders
      .where("parentId", "==", folderId)
      .where("userId", "==", currentUser.uid)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        dispatch({
          type: ACTIONS.SET_CHILD_FOLDERS,
          payload: { childFolders: snapshot.docs.map(db.formatDoc) },
        });
      });
  }, [folderId, currentUser]);

  useEffect(() => {
    return (
      db.files
        .where("folderId", "==", folderId)
        .where("userId", "==", currentUser.uid)
        // .orderBy("createdAt")
        .onSnapshot((snapshot) => {
          dispatch({
            type: ACTIONS.SET_CHILD_FILES,
            payload: { childFiles: snapshot.docs.map(db.formatDoc) },
          });
        })
    );
  }, [folderId, currentUser]);

  return state;
}

// Commit on 2024-01-14T11:39:00
// Commit on 2024-02-20T10:56:00
// Commit on 2024-03-28T17:57:00
// Commit on 2024-05-04T13:42:00
// Commit on 2024-06-10T10:36:00
// Commit on 2024-07-17T12:05:00
// Commit on 2024-08-23T17:24:00
// Commit on 2024-09-29T14:31:00
// Commit on 2024-11-05T15:15:00
// Commit on 2024-12-12T16:26:00
