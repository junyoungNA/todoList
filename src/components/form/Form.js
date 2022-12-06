const Form = ({ eventChange, title, content, addHandler }) => {
  return (
    <>
      <div className="create">
        <label>제목 :</label>
        <input
          type="text"
          name="title"
          onChange={eventChange}
          value={title || ""}
        />
        <label>내용 :</label>
        <input
          type="text"
          name="content"
          onChange={eventChange}
          value={content || ""}
        />
      </div>
      <button className="add" onClick={addHandler}>
        추가하기
      </button>
    </>
  );
};

export default Form;
