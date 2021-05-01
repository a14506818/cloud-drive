import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { storage, database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { ROOT_FOLDER } from "../../hooks/useFolder";
import { v4 as uuidV4 } from "uuid";
import { Toast, ProgressBar } from "react-bootstrap";

export default function AddFileBtn({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const { currentUser } = useAuth();
  function handleUpload(e) {
    const file = e.target.files[0];
    if (!currentFolder || !file) return;

    const id = uuidV4();
    setUploadingFiles((preUploadingFiles) => [
      ...preUploadingFiles,
      { id: id, name: file.name, progress: 0, error: false },
    ]);

    const filePath =
      currentFolder === ROOT_FOLDER
        ? `/${file.name}`
        : `${currentFolder.path.map((e) => e.name).join("/")}/${
            currentFolder.name
          }/${file.name}`;
    console.log(filePath);
    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        setUploadingFiles((preUploadingFiles) => {
          return preUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress };
            }
            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((preUploadingFiles) => {
          return preUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true };
            }
            return uploadFile;
          });
        });
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          database.files
            .where("name", "==", file.name)
            .where("userId", "==", currentUser.uid)
            .where("folderId", "==", currentFolder.id)
            .get()
            .then((existingFiles) => {
              const existingFile = existingFiles.docs[0];
              if (existingFile) {
                existingFile.ref.update({ url: url });
              } else {
                database.files.add({
                  url: url,
                  name: file.name,
                  createAt: database.getCurrentTimestamp(),
                  folderId: currentFolder.id,
                  userId: currentUser.uid,
                });
              }
            });
          //Close Toast
          setUploadingFiles((preUploadingFiles) => {
            return preUploadingFiles.filter(
              (uploadFile) => uploadFile.id !== id
            );
          });
        });
      }
    );
  }

  return (
    <>
      <label className="btn btn-outline-success btn-sm m-0 mr-2">
        <FontAwesomeIcon icon={faFileUpload} />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-99999px" }}
        ></input>
      </label>
      {uploadingFiles &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              maxWidth: "250px",
            }}
          >
            {uploadingFiles.map((file) => (
              <Toast
                key={file.id}
                onClose={() => {
                  setUploadingFiles((preUploadingFiles) => {
                    return preUploadingFiles.filter((uploadFile) => {
                      return uploadFile.id !== file.id;
                    });
                  });
                }}
              >
                <Toast.Header
                  className="text-truncate w-100 d-block"
                  closeButton={file.error}
                >
                  {file.name}
                </Toast.Header>
                <Toast.Body>
                  <ProgressBar
                    animated={!file.error}
                    variant={file.error ? "danger" : "primary"}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error
                        ? "Error"
                        : Math.round(file.progress * 100) + "%"
                    }
                  />
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
