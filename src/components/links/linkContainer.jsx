import { useState } from "preact/hooks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "../modal";
import { LinkForm } from "./linkForm";

export function LinkContainer({ title, url, favIconUrl, onUpdateLink, onDeleteLink }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleRouting = () => {
    window.location.replace(url);
  };

  const handleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    setShowMenu(false);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    onDeleteLink({ title, url });
    setShowMenu(false);
  };

  return (
    <>
      <div
        onClick={handleRouting}
        className="group relative cursor-pointer rounded-md p-5 hover:bg-gray-700"
      >
        <div className="center-xy mx-auto h-10 w-10 rounded-md bg-gray-100 p-1">
          <img className="h-full w-full rounded-md" src={favIconUrl} />
        </div>
        <p className="mt-3 truncate text-center text-xs text-gray-200">{title}</p>
        <div
          onClick={handleMenu}
          className="absolute right-2 top-2 hidden text-white group-hover:block"
        >
          <BsThreeDotsVertical size={20} />
        </div>
      </div>
      {/* modals */}
      {/* modal menu */}
      <Modal
        title="Action"
        state={showMenu}
        width="fit-content"
        onOutsideClick={() => setShowMenu(false)}
      >
        <div className="grid grid-cols-2 rounded text-white">
          <button onClick={handleEdit} className="button-menu">
            Edit
          </button>
          <button onClick={handleDelete} className="button-menu">
            Remove
          </button>
        </div>
      </Modal>
      {/* edit modal */}
      <Modal title="Edit Shortcut" onOutsideClick={() => {}} state={showEditModal}>
        <LinkForm
          title={title}
          url={url}
          onUpdateLink={onUpdateLink}
          setModalSate={setShowEditModal}
          update={true}
        />
      </Modal>
    </>
  );
}
