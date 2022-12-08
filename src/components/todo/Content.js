import { useNavigate } from "react-router-dom";
import "./style.css";

const Content = ({ completeHandler, content }) => {
  const navigate = useNavigate();
  const goDetail = (content) => () => {
    navigate("/detail", { state: content });
  };

  return (
    <div className="todo">
      <h4 className="link" onClick={goDetail({ content })}>
        상세글 보러가기
      </h4>
      <h2>{content.title}</h2>
      <p>{content.content}</p>
      <div className="btn">
        <button
          className="delete_Btn"
          onClick={completeHandler("delete", content.id)}
        >
          삭제하기
        </button>
        {content.isDone ? (
          <button
            className="done_Btn"
            onClick={completeHandler("complete", content.id)}
          >
            취소하기
          </button>
        ) : (
          <button
            className="done_Btn"
            onClick={completeHandler("complete", content.id)}
          >
            완료
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
