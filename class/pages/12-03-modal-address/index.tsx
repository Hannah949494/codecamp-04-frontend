import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        주소검색
      </Button>
      <br />
      주소 :<input type="text" defaultValue={myAddress} disabled />
      <br />
      우편번호 :<input type="number" defaultValue={myZonecode} disabled />
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
