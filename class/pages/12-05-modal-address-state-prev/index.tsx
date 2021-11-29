import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  //   const showModal = () => {
  //     setIsOpen((prev) => !prev);
  //   };

  //   const handleOk = () => {
  //     setIsOpen((prev) => !prev);
  //   };

  //   const handleCancel = () => {
  //     setIsOpen((prev) => !prev);
  //   };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
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
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
