import Form from "../form/Form";
import "./style.css";

const HeaderContent = ({ addHandler, onChange, title, content }) => {
  return (
    <div className="header">
      <Form
        eventChange={onChange}
        addHandler={addHandler}
        title={title}
        content={content}
      />
    </div>
  );
};

export default HeaderContent;
