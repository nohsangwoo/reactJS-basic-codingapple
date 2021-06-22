import React, { useState } from 'react';

type props = {
  contents: any;
  setContents: any;
  setModalContents: any;
};

type contentsType = {
  title: string;
  date: string;
  likes: number;
};

const DataList = ({ contents, setContents, setModalContents }: props) => {
  const [isModalOn, setIsModalOn] = useState<boolean>(true);
  const onLikeCheck = (data: any, index: number) => {
    setContents((prev: any) => {
      let copied: any = [];
      // 깊은복사 시작
      prev.forEach((data: any, index: number) => {
        // 깊은복사 포인트
        // copied[index] = data; // 이건 또 얕은 복사가됨
        copied[index] = { ...data };
      });
      copied[index].likes += 1;
      const result = [...copied];
      return result;
    });
  };

  const onSetModalContents = (data: contentsType) => {
    if (!isModalOn) {
      setModalContents(null);
    } else {
      setModalContents(data);
    }
    setIsModalOn(prev => !prev);
  };

  return (
    <>
      {contents.map((data: contentsType, index: number) => {
        return (
          <div className="list" key={index}>
            <div className="title">
              <h3 className="align">{data.title}</h3>
              <span
                className="align likesBtn"
                onClick={() => onLikeCheck(data, index)}
              >
                👍
              </span>
              <div className="align">{data.likes}</div>
            </div>
            <div className="bottomInList">
              <p>{data.date}</p>
              <button onClick={() => onSetModalContents(data)}>Detail</button>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default DataList;
