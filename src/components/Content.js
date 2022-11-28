const Content = ({ deleteHandler, completeHandler, content }) => {
  return (
    <div className="todo">
      <h2>{content.title}</h2>
      <p>{content.content}</p>
      <div className="btn">
        <button
          className="delete_Btn"
          onClick={() => {
            deleteHandler(content.id);
          }}
        >
          삭제하기
        </button>
        {content.isDone ? (
          <button
            className="done_Btn"
            onClick={() => {
              completeHandler(content.id);
            }}
          >
            취소하기
          </button>
        ) : (
          <button
            className="done_Btn"
            onClick={() => {
              completeHandler(content.id);
            }}
          >
            완료
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
