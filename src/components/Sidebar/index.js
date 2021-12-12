import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function Sidebar() {
  const [modalAddGroup, setModalAddGroup] = useState(false);

  const handleCloseModal = () => {
    setModalAddGroup(!modalAddGroup);
  };
  return (
    <div>
      <Button
        color="success"
        outline
        className="w-100 my-3"
        onClick={handleCloseModal}
      >
        Tạo nhóm mới
      </Button>
      <Button color="primary" className="w-100 mb-3">
        Big Project
      </Button>
      <Button color="primary" className="w-100 mb-3">
        Big Project
      </Button>
      <Button color="primary" className="w-100 mb-3">
        Big Project
      </Button>
      <Button color="primary" className="w-100 mb-3">
        Big Project
      </Button>
      <Button color="primary" className="w-100 mb-3">
        Big Project
      </Button>

      <Modal
        isOpen={modalAddGroup}
        toggle={() => setModalAddGroup(!modalAddGroup)}
      >
        <ModalHeader toggle={handleCloseModal}>Thêm nhóm mới</ModalHeader>
        <ModalBody>Chưa có gì hết</ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
