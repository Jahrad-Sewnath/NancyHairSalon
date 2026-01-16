import { useState } from "react";
import './components/componentstyles.css'
import Modal from "./components/Modal";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Table, { type TableColumn } from "./components/table";

  type Booking = {
    client: string;
    service: string;
    date: string;
    status: string;
  };

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const columns: TableColumn<Booking>[] = [
  { key: "client", label: "Client" },
  { key: "service", label: "Service" },
  { key: "date", label: "Date" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => (
      <span
        style={{
          fontWeight: 600,
          color: value === "Confirmed" ? "green" : "orange",
        }}
      >
        {value}
      </span>
    ),
  },
];

const data: Booking[] = [
    {
      client: "Sarah M",
      service: "Haircut",
      date: "2026-01-20",
      status: "Confirmed",
    },
    {
      client: "John D",
      service: "Coloring",
      date: "2026-01-21",
      status: "Pending",
    },
  ];

  return (
    <div className="app-layout">
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

      <div className="main-content">
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

        <Table columns={columns} data={data} />

      </div>

      <Footer />

    </div>


  );
}

export default App;
