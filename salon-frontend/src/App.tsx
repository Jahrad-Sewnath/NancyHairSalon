import { useState } from "react";
import Modal from "./components/Modal";
import './components/componentstyles.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        title="Testing"
        onClose={() => setIsModalOpen(false)}
      >
        This is a test
      </Modal>
    </>
  );
}

export default App;
