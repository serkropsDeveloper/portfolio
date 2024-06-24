import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";

Modal.setAppElement("#root");

const ModalWindow = ({ selectedImage, setSelectedImage }) => {
  return (
    <Modal
      isOpen={!!selectedImage}
      onRequestClose={() => setSelectedImage(null)}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          maxHeight: "90vh",
          zIndex: "100", // Увеличиваем уровень z-index
          background: "transparent",
          border: "none",
        },
        overlay: {
          zIndex: "100", // Увеличиваем уровень z-index для оверлея
        },
      }}
    >
      <div className="flex justify-center items-start gap-4 h-full z-50 max-h-[80vh]">
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-full max-h-[80vh] z-40"
        />
        <button
          onClick={() => setSelectedImage(null)}
          className="z-50 mt-[-20px] ml-[-15px]"
        >
          <IoMdCloseCircle size={30} />
        </button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
