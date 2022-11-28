const HeaderContent = ({
  addHandler,
  setContent,
  setTitle,
  title,
  content,
}) => {
  return (
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
  );
};

export default HeaderContent;
