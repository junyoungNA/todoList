import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderContent from "../components/Controller";
import Content from "../components/Content";
import {
  contentInsert,
  contentDelete,
  contentCancle,
  contentDone,
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
    <div className="inner">
      <HeaderContent
        addHandler={contentHandler("add")}
        onChange={onChange}
        title={title}
        content={content}
      />
      <div className="content">
        <h1>Working...</h1>
        {/* working 부분 */}
        <div className="working">
          {contents.map((ele, i) => {
            if (!ele.isDone) {
              return (
                <Content
                  key={ele.id}
                  deleteHandler={contentHandler("delete", ele.id)}
                  completeHandler={contentHandler("done", ele.id)}
                  content={ele}
                />
              );
            }
          })}
        </div>
        {/* Done부분 */}
        <h1>Done...!</h1>
        <div className="done">
          {contents.map((ele, i) => {
            if (ele.isDone) {
              return (
                <Content
                  key={ele.id}
                  content={ele}
                  deleteHandler={contentHandler("delete", ele.id)}
                  completeHandler={contentHandler("cancle", ele.id)}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
