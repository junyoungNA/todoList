import Content from "../todo/Content";
import "./style.css";

const List = ({ contents, contentHandler }) => {
  return (
    <div className="content">
      <h1>Working...</h1>
      {/* working 부분 */}
      <div className="working">
        {contents.map((ele) => {
          if (!ele.isDone) {
            return (
              <Content
                key={ele.id}
                completeHandler={contentHandler}
                content={ele}
              />
            );
          }
        })}
      </div>
      {/* Done부분 */}
      <h1>Done...!</h1>
      <div className="done">
        {contents.map((ele) => {
          if (ele.isDone) {
            return (
              <Content
                key={ele.id}
                content={ele}
                completeHandler={contentHandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default List;
