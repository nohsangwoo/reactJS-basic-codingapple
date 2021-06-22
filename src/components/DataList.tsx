import React, { memo } from 'react';

type props = {
  contents: any;
  setContents: any;
};

const DataList = ({ contents, setContents }: props) => {
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
  return (
    <>
      {contents.map((data: { title: string; likes: number }, index: number) => {
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

            <p>2월 17일 발</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default memo(DataList);
