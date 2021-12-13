import { createGroup, fetchGroups, selectGroup } from "src/actions/group";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Controller, useForm } from "react-hook-form";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [modalAddGroup, setModalAddGroup] = useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const groups = useSelector((state) => state.groups.groups);

  const {
    getValues,
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchGroups(userInfo.id));
    }
  }, [userInfo]);

  const handleCloseModal = () => {
    setModalAddGroup(!modalAddGroup);
  };

  const handleClickModelAddButton = () => {
    setModalAddGroup(!modalAddGroup);
    const formData = getValues();

    dispatch(createGroup({ ...formData, accountId: userInfo.id }));
    reset();
  };

  const handleClickGroupButton = (group) => {
    dispatch(selectGroup(group));
  };

  const renderListGroupButton = () => {
    return groups.map((group, index) => {
      return (
        <Button
          color="primary"
          className="w-100 mb-3"
          data-id={group.id}
          key={index}
          onClick={() => handleClickGroupButton(group)}
        >
          {group.name}
        </Button>
      );
    });
  };
  return (
    <div>
      {userInfo && (
        <>
          <Button
            color="success"
            outline
            className="w-100 my-3"
            onClick={handleCloseModal}
          >
            Tạo nhóm mới
          </Button>
          {renderListGroupButton()}
        </>
      )}

      <Modal
        isOpen={modalAddGroup}
        toggle={() => setModalAddGroup(!modalAddGroup)}
      >
        <ModalHeader toggle={handleCloseModal}>Thêm nhóm mới</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="groupName">Tên nhóm</Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                // rules={{
                //   required: {
                //     value: true,
                //     message: "Mật khẩu không được để trống",
                //   },
                // }}
                render={({ field }) => {
                  return <Input {...field} />;
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="desc">Miêu tả</Label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                // rules={{
                //   required: {
                //     value: true,
                //     message: "Mật khẩu không được để trống",
                //   },
                // }}
                render={({ field }) => {
                  return <Input {...field} />;
                }}
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
