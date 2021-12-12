import Sidebar from "src/components/Sidebar";
import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";

export default function Home(props) {
  const [toggleModelEdit, setToggleModelEdit] = useState(false);

  //Handle close mođal
  const handleCloseModelUpdate = () => {
    setToggleModelEdit(!toggleModelEdit);
  };

  //Handle Click update
  const handleClickUpdateButton = () => {
    setToggleModelEdit(!toggleModelEdit);
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
            <Button outline color="success" className="ml-auto d-block my-3">
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
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                </td>
                <td>
                  <Button
                    color="info"
                    className="mr-2"
                    onClick={() => setToggleModelEdit(!toggleModelEdit)}
                  >
                    Thêm người
                  </Button>
                  <Button color="primary" className="mr-2">
                    Sửa
                  </Button>
                  <Button color="danger"> Xóa</Button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                  dsadasdâd <br />
                  dấdsadâd
                  <br />
                </td>
                <td>
                  <Button color="info" className="mr-2">
                    Thêm người
                  </Button>
                  <Button
                    color="primary"
                    className="mr-2"
                    onClick={handleClickUpdateButton}
                  >
                    Sửa
                  </Button>
                  <Button color="danger"> Xóa</Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <Modal
            isOpen={toggleModelEdit}
            toggle={() => setToggleModelEdit(!toggleModelEdit)}
          >
            <ModalHeader toggle={handleCloseModelUpdate}>
              Sửa thông tin Todo
            </ModalHeader>
            <ModalBody></ModalBody>
            <ModalFooter>
              <Button color="primary">Do Something</Button>
              <Button onClick={handleCloseModelUpdate}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}
