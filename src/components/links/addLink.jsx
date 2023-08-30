import { LinkForm } from "./linkForm";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "../modal";
import { useState } from "preact/hooks";

export function AddLink({ onAddLink }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        className="cursor-pointer rounded-md p-5 hover:bg-gray-700"
      >
        <div className="center-xy mx-auto h-10 w-10 rounded-md bg-gray-100">
          <AiOutlinePlus size={22} />
        </div>
        <p className="mt-3 truncate text-center text-xs text-gray-200">Add</p>
      </div>
      <Modal title="Add Shortcut" state={openModal} onOutsideClick={() => {}}>
        <LinkForm title="" url="" setModalSate={setOpenModal} onAddLink={onAddLink} add={true} />
      </Modal>
    </>
  );
}
