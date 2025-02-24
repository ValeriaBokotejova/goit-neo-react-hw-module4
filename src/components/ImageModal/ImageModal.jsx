import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    contentLabel="Image Modal"
    className={css.content}
    overlayClassName={css.overlay}
  >
    {image?.urls?.regular && (
      <div className={css.body}>
        <button className={css.closeBtn} onClick={onClose}>
          <AiOutlineClose size={28} />
        </button>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
          loading="lazy"
        />
      </div>
    )}
  </Modal>
);

export default ImageModal;
