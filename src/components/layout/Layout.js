import HeaderContent from "../header/Controller";
import List from "../list/List";

import "./style.css";
const Layout = ({
  addHandler,
  onChange,
  title,
  content,
  contents,
  contentHandler,
}) => {
  return (
    <div className="inner">
      <HeaderContent
        addHandler={addHandler}
        onChange={onChange}
        title={title}
        content={content}
      />
      <List contents={contents} contentHandler={contentHandler} />
    </div>
  );
};

export default Layout;
