/* eslint-disable */
import { relative } from 'path';
import React, { useState } from 'react';
import { convertToObject } from 'typescript';
import './App.css';
import logo from './logo.svg';

function App() {
  let [contents, setContents] = useState([
    { title: '남자 코트 추천', likes: 0 },
    { title: '강남 우동 맛집', likes: 1 },
    { title: '여자 코트 추천', likes: 2 },
    { title: '강남 짜장 맛집', likes: 3 },
  ]);

  const copyObj = (obj: any) => {
    var copy: any = {};
    if (typeof obj === 'object' && obj !== null) {
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = copyObj(obj[attr]);
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button
        onClick={() => {
          setContents(prev => {
            const obj = { a: 0, b: 1, c: 2, d: 3 };
            const obj2 = { a: 'one', b: 'two', c: 'three' };
            const totla = { ...obj, ...obj2 };
            console.log(totla);

            console.log(prev);
            let temp = [...prev];
            temp[0].title = '여자 코트 추천';
            return temp;
          });
        }}
      >
        button
      </button>
      <div>
        {contents.map((data, index) => {
          return (
            <div className="list" key={index}>
              <div className="title">
                <h3 className="align">{data.title}</h3>
                <span
                  className="align likesBtn"
                  onClick={() => {
                    return setContents(prev => {
                      let copied: any = [];

                      // 깊은복사 시작
                      prev.forEach((data: any, index) => {
                        // 깊은복사 포인트
                        // copied[index] = data; // 이건 또 얕은 복사가됨
                        copied[index] = { ...data };
                      });
                      copied[index].likes += 1;
                      const result = [...copied];
                      return result;
                    });
                  }}
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
      </div>
    </div>
  );
}

export default App;
