import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./detail.css";
import { useState } from "react";
import { contentModify } from "../redux/modules/content";

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  margin: auto;
`;
const BacklButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 35px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 10px;
`;
const CotentBox = styled.ul`
  list-style: none;
`;
const ListBox = styled.li`
  margin: 30px;
  font-weight: 700;
  font-size: 20px;
`;
const ModifyButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { content } = state;
  const [inputs, setInputs] = useState({
    title: content.title,
    text: content.content,
  });

  const { title, text } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const modifyContent = (id) => () => {
    if (!window.confirm("해당 글을 수정하시겠습니까?")) return;
    const payload = {
      id: id,
      title: title,
      content: text,
      isDone: content.isDone,
    };
    console.log(payload);
    dispatch(contentModify(payload));
    navigate(-1);
  };
  return (
    <DetailBox>
      <CotentBox>
        <ListBox>글 번호: {content.id}</ListBox>
        <ListBox>
          제목:
          <input type="text" name="title" onChange={onChange} value={title} />
        </ListBox>
        <ListBox>
          <div>내용</div>
          <textarea name="text" onChange={onChange} value={text} />
        </ListBox>
      </CotentBox>
      <BacklButton
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </BacklButton>
      <ModifyButton onClick={modifyContent(content.id)}>
        글 수정하기
      </ModifyButton>
    </DetailBox>
  );
};

export default Detail;
