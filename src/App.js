// src/App.js
import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";
import HeaderContent from "./components/Controller";
const App = () => {
  const [work, setWork] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [num, setNum] = useState(3);
  const [content, setContent] = useState("");
  const addHandler = () => {
    setNum(num + 1);
    const newContent = {
      id: num,
      title: title,
      content: content,
      isDone: false,
    };
    setWork([...work, newContent]);
    console.log(work);
  };
  const deleteContent = (id) => {
    const newWork = work.filter((ele) => ele.id !== id);
    setWork(newWork);
  };

  const doneContent = (id) => {
    const changeWork = work.find((ele, i) => ele.id === id);
    const newWork = work.filter((ele, i) => ele.id !== id);
    changeWork.isDone = true;
    setWork([...newWork, changeWork]);
  };
  const cancleContent = (id) => {
    const changeDone = work.find((ele, i) => ele.id === id);
    const newWork = work.filter((ele, i) => ele.id !== id);
    changeDone.isDone = false;
    console.log(changeDone);
    setWork([...newWork, changeDone]);
  };
  return (
    <div className="inner">
      <HeaderContent
        addHandler={addHandler}
        setTitle={setTitle}
        setContent={setContent}
        title={title}
        content={content}
      />
      <div className="content">
        <h1>Working...</h1>
        {/* working 부분 */}
        <div className="working">
          {work.map((ele, i) => {
            if (!ele.isDone) {
              return (
                <Content
                  key={ele.id}
                  deleteHandler={deleteContent}
                  completeHandler={doneContent}
                  content={ele}
                />
              );
            }
          })}
        </div>
        {/* Done부분 */}
        <h1>Done...!</h1>
        <div className="done">
          {work.map((ele, i) => {
            if (ele.isDone) {
              return (
                <Content
                  key={ele.id}
                  content={ele}
                  deleteHandler={deleteContent}
                  completeHandler={cancleContent}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
