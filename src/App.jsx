import { useState } from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import StudentTable from "./components/StudentTable";
import Modal from "./components/Modal";

function App() {
  const [activeTab, setActiveTab] = useState("student");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function openModal(data) {
    setModalData(data);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalData(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <StudentTable activeTab={activeTab} openModal={openModal} />
      </div>
      {isModalOpen && <Modal data={modalData} onClose={closeModal} />}
    </>
  );
}

export default App;
