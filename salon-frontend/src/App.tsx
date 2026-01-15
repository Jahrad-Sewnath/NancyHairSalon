import { useState } from "react";
import './components/componentstyles.css'
import Modal from "./components/Modal";
import Card from "./components/card";
import Navbar from "./components/navbar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Navbar
        brand="Nancy Hair Studio"
        navItems={[
          { label: "Dashboard", href: "/" },
          { label: "Bookings", href: "/bookings" },
          { label: "Sales", href: "/sales" },
          { label: "Inventory", href: "/inventory" },
          { label: "Staff", href: "/staff" },
        ]}
      />


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
