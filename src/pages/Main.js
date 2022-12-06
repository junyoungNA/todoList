import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import {
  contentInsert,
  contentDelete,
  contentCancle,
  contentDone,
  // contentModify, //수정기능은 detail페이지에서 리듀서요청
} from "../redux/modules/content";

const Main = () => {
  const contents = useSelector((state) => state.content);
  const [num, setNum] = useState(3);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  const { title, content } = inputs;

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
      case "done":
        dispatch(contentDone(id));
        break;
      case "cancle":
        dispatch(contentCancle(id));
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
