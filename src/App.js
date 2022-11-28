// src/App.js
import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";
const App = () => {
  const [work, setWork] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const [done, setDone] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [isDone, setIsDone] = useState(false);
  const addHandler = () => {
    const newContent = {
      id: work.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setWork([...work, newContent]);
  };
  const deleteContent = (id) => {
    const newWork = work.filter((ele) => ele.id !== id);
    const newDone = done.filter((ele) => ele.id !== id);
    setWork(newWork);
    setDone(newDone);
  };

  const doneContent = (id) => {
    const changeWork = work.filter((ele) => ele.id === id);
    changeWork[0].isDone = true;
    const newWork = work.filter((ele) => ele.id !== id);
    setWork(newWork);
    setDone([...done, changeWork[0]]);
  };
  const cancleContent = (id) => {
    const changeDone = done.filter((ele) => ele.id === id);
    changeDone[0].isDone = false;
    const newDone = done.filter((ele) => ele.id !== id);
    setDone(newDone);
    setWork([...work, changeDone[0]]);
  };
  return (
    <div className="inner">
      <div className="header">
        <div className="create">
          <label>제목 :</label>{" "}
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label>내용 :</label>{" "}
          <input
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
        <button className="add" onClick={addHandler}>
          추가하기
        </button>
      </div>
      <div className="content">
        <h1>Working...</h1>
        {/* working 부분 */}
        <div className="working">
          {work.map((work, i) => {
            return (
              <Content
                key={work.id}
                deleteHandler={deleteContent}
                completeHandler={doneContent}
                content={work}
              />
            );
          })}
        </div>
        {/* Done부분 */}
        <h1>Done...!</h1>
        <div className="done">
          {done.map((done, i) => {
            return (
              <Content
                key={done.id}
                content={done}
                deleteHandler={deleteContent}
                completeHandler={cancleContent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
