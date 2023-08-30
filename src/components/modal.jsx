import { createPortal } from "preact/compat";

export function Modal({ state, children, title, onOutsideClick, width }) {
  return (
    state &&
    createPortal(
      <section onClick={onOutsideClick} className="modal group">
        <div
          style={{ width: width || "450px" }}
          className="rounded-md bg-black-500 p-5 transition-all duration-200 ease-in-out group-active:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-semibold text-white">{title}</h3>
          <div className="mt-5">{children}</div>
        </div>
      </section>,
      document.getElementById("modal-root"),
    )
  );
}
