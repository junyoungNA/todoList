import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;
const Detail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { content } = state;
  console.log(content.id);
  return (
    <DetailBox>
      <CotentBox>
        <ListBox>글 번호: {content.id}</ListBox>
        <ListBox>
          <h2>제목: {content.title}</h2>
        </ListBox>
        <ListBox>
          내용:<h4> {content.content} </h4>
        </ListBox>
      </CotentBox>
      <BacklButton
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </BacklButton>
    </DetailBox>
  );
};

export default Detail;
