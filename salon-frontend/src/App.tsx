import { useState } from "react";
import './components/componentstyles.css'
import Modal from "./components/Modal";
import Card from "./components/card";

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


      <Card title="Hair Product">
        Stock remaining: 12 units
      </Card>

    </>
    
    


  );
}

export default App;
