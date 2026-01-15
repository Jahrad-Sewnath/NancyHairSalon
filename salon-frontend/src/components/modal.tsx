import React from "react";
import "./componentstyles.css";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, title, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        {title && <h2 className="modal-title">{title}</h2>}

        {/* Content */}
        <div className="modal-content">{children}</div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
