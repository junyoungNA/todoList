import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import {
  contentInsert,
  contentDelete,
  contentComplete,
  // contentModify, //수정기능은 detail페이지에서 리듀서요청
} from "../redux/modules/content";

const Main = () => {
  const contents = useSelector((state) => state.content);
  const [num, setNum] = useState(3);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;
  //인풋두개는 성능의 차이가 거의 없음!

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const contentHandler = (name, id) => () => {
    //if문으로 사용하는 경우도 많다!
    switch (name) {
      case "add":
        setNum(num + 1);
        const newContent = {
          id: num,
          title: inputs["title"],
          content: inputs["content"],
          isDone: false,
        };
        dispatch(contentInsert(newContent));
        setInputs({
          title: "",
          content: "",
        });
        break;
      case "delete":
        dispatch(contentDelete(id));
        break;
      case "complete":
        dispatch(contentComplete(id));
        break;
      default:
        return;
    }
  };

  return (
    <Layout
      addHandler={contentHandler("add")}
      onChange={onChange}
      title={title}
      content={content}
      contents={contents}
      contentHandler={contentHandler}
    />
  );
};

export default Main;
