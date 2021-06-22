import React from 'react';
import '../App.css';

type Props = {
  modalContents: { title: string; date: string; likes: number };
  setModalContents: any;
  // contents: any;
};
const Modal = ({ modalContents, setModalContents }: Props) => {
  const onClose = () => {
    setModalContents(null);
  };
  // console.log(modalContents);
  return (
    <div className="modal">
      <h2>{modalContents.title}</h2>
      <p>{modalContents.date}</p>
      <p>detail</p>

      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default Modal;
