import { useEffect } from "react";

const HeaderContent = ({ addHandler, onChange, title, content }) => {
  return (
    <div className="header">
      <div className="create">
        <label>제목 :</label>
        <input type="text" name="title" onChange={onChange} value={title} />
        <label>내용 :</label>
        <input type="text" name="content" onChange={onChange} value={content} />
      </div>
      <button className="add" onClick={addHandler}>
        추가하기
      </button>
    </div>
  );
};

export default HeaderContent;
