import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faTimes,
  faDownload,
  faTrashAlt,
  faPencilAlt,
  faVideo,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Alert } from "react-bootstrap";
import { storage, database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function File({ file }) {
  const [open, setOpen] = useState(false);
  const [openCheck, setOpenCheck] = useState(false);
  const [tempFileName, setTempFileName] = useState("");
  const { currentUser } = useAuth();
  const [error, setError] = useState("");

  function openModal() {
    setOpen(true);
    setTempFileName(file.name);
  }
  function closeModal() {
    setOpen(false);
    setError("");
    setOpenCheck(false);
  }

  function deleteFile() {
    console.log("Delete : " + file.name);
    database.files
      .doc(file.id)
      .delete()
      .catch((e) => console.error(e));
    storage
      .ref(file.ref)
      .delete()
      .catch((e) => console.error(e));
  }
  async function renameFile() {
    //check name
    await database.files
      .where("name", "==", tempFileName)
      .where("userId", "==", currentUser.uid)
      .get()
      .then((existingFiles) => {
        if (existingFiles.docs.length > 0) {
          console.log("Name Existed");
          setError("Name Existed");
        } else {
          //rename
          console.log("Rename : " + file.name + " To : " + tempFileName);
          database.files
            .doc(file.id)
            .get()
            .then((existingFile) => {
              existingFile.ref.update({ name: tempFileName });
            })
            .catch((e) => console.error(e));
          closeModal();
        }
      })
      .catch((e) => console.error(e));
  }

  return (
    <>
      <Button
        onClick={openModal}
        variant="outline-dark"
        size="sm"
        className="text-truncate w-100"
      >
        {file.type.split("/")[0] === "image" && (
          <FontAwesomeIcon icon={faImage} className="mr-2" />
        )}
        {file.type.split("/")[0] === "video" && (
          <FontAwesomeIcon icon={faVideo} className="mr-2" />
        )}
        {file.type.split("/")[0] !== "image" &&
          file.type.split("/")[0] !== "video" && (
            <FontAwesomeIcon icon={faFile} className="mr-2" />
          )}

        {file.name}
      </Button>
      <Modal show={open} onHide={closeModal} size="lg">
        <Modal.Header>
          <a
            href={file.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
            download={file.name}
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download File
          </a>
          <Button variant="secondary" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          {file.type.split("/")[0] === "image" && (
            <img src={file.url} alt="img" width="100%" />
          )}
          {file.type.split("/")[0] === "video" && (
            <video controls autoPlay muted width="100%">
              <source src={file.url} type={file.type}></source>
            </video>
          )}
          {file.type.split("/")[0] !== "image" &&
            file.type.split("/")[0] !== "video" && <div>Can Not Preview</div>}
        </Modal.Body>
        <Modal.Footer>
          {error && (
            <Alert variant="danger" className="w-100 text-center">
              {error}
            </Alert>
          )}
          <div className="w-100 d-flex justify-content-between align-items-center flex-wrap">
            <strong>File Name: </strong>
            <input
              style={{ width: "65%" }}
              value={tempFileName}
              onChange={(e) => setTempFileName(e.target.value)}
            />
            <Button variant="warning" onClick={renameFile} size="sm">
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
          </div>
          <div className="w-100 d-flex justify-content-between align-items-center flex-wrap">
            <strong>File Type: </strong>
            {file.type}
          </div>
          <div className="w-100 d-flex justify-content-end">
            <Button variant="danger" onClick={() => setOpenCheck(true)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </div>
          {openCheck && (
            <>
              <Alert
                variant="danger"
                className="w-100 d-flex justify-content-end align-items-center"
              >
                <div style={{ position: "absolute", left: "1rem" }}>
                  Delete File?
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="mr-2"
                  onClick={deleteFile}
                >
                  Confirm
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => setOpenCheck(false)}
                >
                  Cancel
                </Button>
              </Alert>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
