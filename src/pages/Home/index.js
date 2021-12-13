import Sidebar from "src/components/Sidebar";
import React, { useEffect, useRef, useState } from "react";

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
  Table,
} from "reactstrap";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTodo, fetchStatus, fetchTodos } from "src/actions/todo";

export default function Home(props) {
  const [toggleModelEdit, setToggleModelEdit] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);

  const { currentGroup } = useSelector((state) => state.groups);
  const { todos, listStatus } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const { control, getValues, reset, register } = useForm();

  useEffect(() => {
    dispatch(fetchStatus());
  }, []);

  useEffect(() => {
    if (currentGroup) {
      dispatch(fetchTodos(currentGroup.id));
    }
  }, [currentGroup]);

  //Handle close mođal
  const handleCloseModelUpdate = () => {
    setToggleModelEdit(!toggleModelEdit);
  };

  //Handle Click update button
  const handleClickUpdateButton = (todo) => {
    setToggleModelEdit(!toggleModelEdit);
    setIsModalUpdate(true);
  };

  const handleDeleteTodo = (todo) => {};

  //Handle Click add new button
  const handleClickAddButton = () => {
    setToggleModelEdit(!toggleModelEdit);
    setIsModalUpdate(false);
  };

  //Handle click add Modal button

  const handleClickAddModalButton = () => {
    const formValue = getValues();
    const data = { ...formValue, groupId: currentGroup.id };
    dispatch(createTodo(data));
    reset();
    setToggleModelEdit(!toggleModelEdit);
  };

  //Handle click update Modal button
  const handleClickUpdateModalButton = () => {
    setToggleModelEdit(!toggleModelEdit);
  };

  const renderSelectInput = () => {
    if (listStatus) {
      return listStatus.map((status, index) => {
        return (
          <option value={status.id} key={index}>
            {status.name}
          </option>
        );
      });
    }
  };

  const renderTableBody = () => {
    return todos.map((todo, index) => {
      return (
        <tr key={index}>
          <th scope="row">{todo.id}</th>
          <td>{todo.todoName}</td>
          <td>{todo.ngayKetThuc}</td>
          <td>{todo.trangThai}</td>
          <td>{todo.tenNguoiThamDu}</td>
          <td>
            <Button color="info" className="mr-2" data-id={todo.Id}>
              Thêm người
            </Button>
            <Button
              color="primary"
              className="mr-2"
              onClick={() => handleClickUpdateButton(todo)}
            >
              Sửa
            </Button>
            <Button color="danger" onClick={() => handleDeleteTodo(todo)}>
              {" "}
              Xóa
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 border-right">
          <Sidebar />
        </div>
        <div className="col-10">
          <div>
            <h2 className="text-center my-3">DANH SÁCH CÁC TODO</h2>
            <Button
              outline
              color="success"
              className="ml-auto d-block my-3"
              onClick={() => handleClickAddButton(currentGroup)}
            >
              Thêm Todo mới
            </Button>
          </div>

          <Table hover className="text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Công việc</th>
                <th>Ngày kết thúc</th>
                <th>Trạng thái</th>
                <th>Người tham dự</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>{currentGroup && renderTableBody()}</tbody>
          </Table>
          <Modal
            isOpen={toggleModelEdit}
            toggle={() => setToggleModelEdit(!toggleModelEdit)}
          >
            <ModalHeader toggle={handleCloseModelUpdate}>
              {isModalUpdate ? <h3>Cập nhật Todo</h3> : <h3>Thêm mới Todo</h3>}
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="name">Tên Todo</Label>
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
                  <Label for="endDate">Ngày kết thúc</Label>
                  <Controller
                    name="endDate"
                    control={control}
                    defaultValue=""
                    // rules={{
                    //   required: {
                    //     value: true,
                    //     message: "Mật khẩu không được để trống",
                    //   },
                    // }}
                    render={({ field }) => {
                      return <Input {...field} type="date" />;
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <select className="form-control" {...register("statusId")}>
                      {renderSelectInput()}
                    </select>
                  </div>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              {isModalUpdate ? (
                <Button color="primary" onClick={handleClickUpdateModalButton}>
                  Cập nhật
                </Button>
              ) : (
                <Button color="primary" onClick={handleClickAddModalButton}>
                  Thêm mới
                </Button>
              )}

              <Button onClick={handleCloseModelUpdate}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}
