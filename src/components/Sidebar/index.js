import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default function Sidebar() {
  const [modalAddGroup, setModalAddGroup] = useState(false);

  const handleCloseModal = () => {
    setModalAddGroup(!modalAddGroup);
  };

  const handleClickModelAddButton = () => {
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
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="groupName">Tên nhóm</Label>
              <Input
                id="groupName"
                name="groupName"
                placeholder="Nhập vào tên nhóm"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="desc">Miêu tả</Label>
              <Input
                id="desc"
                name="desc"
                placeholder="Nhập vào miêu tả về nhóm"
                type="textarea"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClickModelAddButton}>
            Thêm nhóm
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
