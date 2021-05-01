import React from "react";
import HeaderNav from "./HeaderNav";
import AddFolderBtn from "./AddFolderBtn";
import AddFileBtn from "./AddFileBtn";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import Folder from "./Folder";
import File from "./File";
import { Container } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import { useParams, useLocation } from "react-router-dom";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      <HeaderNav></HeaderNav>
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileBtn currentFolder={folder} />
          <AddFolderBtn currentFolder={folder} />
        </div>
        <div>Folders:</div>
        {childFolders && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        <hr style={{ border: "5px", color: "red" }} />
        <div>Files:</div>
        {childFiles && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFiles) => (
              <div
                key={childFiles.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFiles} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
