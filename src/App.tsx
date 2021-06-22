/* eslint-disable */
import { relative } from 'path';
import React, { useState } from 'react';
import { convertToObject } from 'typescript';
import './App.css';
import logo from './logo.svg';
import Modal from './components/Modal';
import DataList from './components/DataList';
function App() {
  type contentsTypes = {
    title: string;
    date: string;
    likes: number;
  };
  const [contents, setContents] = useState<contentsTypes[]>([
    { title: '남자 코트 추천', date: '2월 17일', likes: 0 },
    { title: '강남 우동 맛집', date: '2월 18일', likes: 1 },
    { title: '여자 코트 추천', date: '2월 19일', likes: 2 },
    { title: '강남 짜장 맛집', date: '2월 20일', likes: 3 },
  ]);
  const [modalContents, setModalContents] =
    useState<contentsTypes | null>(null);

  // deep copy 예시
  // const copyObj = (obj: any) => {
  //   var copy: any = {};
  //   if (typeof obj === 'object' && obj !== null) {
  //     for (var attr in obj) {
  //       if (obj.hasOwnProperty(attr)) {
  //         copy[attr] = copyObj(obj[attr]);
  //       }
  //     }
  //   }
  // };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button
        onClick={() => {
          setContents(prev => {
            let temp = [...prev];
            temp[0].title = '여자 코트 추천';
            return temp;
          });
        }}
      >
        button
      </button>
      <DataList
        contents={contents}
        setContents={setContents}
        setModalContents={setModalContents}
      />
      {modalContents && (
        <Modal
          modalContents={modalContents}
          setModalContents={setModalContents}
        />
      )}
    </div>
  );
}

export default App;
