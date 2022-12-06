// src/modules/counter.js
// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const CONTENT_INSERT = "CONTENT_INSERT";
const CONTENT_DELETE = "CONTENT_DELETE";
const CONTENT_DONE = "CONTENT_DONE";
const CONTENT_CANCLE = "CONTENT_CANCLE";
const CONTENT_MODIFY = "CONTENT_MODIFY";
export const contentInsert = (payload) => {
  // console.log(payload);
  return {
    type: CONTENT_INSERT,
    payload,
  };
};

export const contentDelete = (payload) => {
  return {
    type: CONTENT_DELETE,
    payload,
  };
};

export const contentDone = (payload) => {
  // console.log(payload);
  return {
    type: CONTENT_DONE,
    payload,
  };
};

export const contentCancle = (payload) => {
  // console.log(payload);
  return {
    type: CONTENT_CANCLE,
    payload,
  };
};

export const contentModify = (payload) => {
  // console.log(payload);
  return {
    type: CONTENT_MODIFY,
    payload,
  };
};

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.

// 초기 상태값
const initialState = [
  {
    id: 0,
    title: "리액트 공부하기",
    content: "리액트 기초를 공부해봅시다.",
    isDone: false,
  },
  {
    id: 1,
    title: "리액트 공부하기",
    content: "리액트 기초를 공부해봅시다.",
    isDone: true,
  },
  {
    id: 2,
    title: "리액트 공부하기",
    content: "리액트 기초를 공부해봅시다.",
    isDone: true,
  },
];

// 리듀서
const content = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case CONTENT_INSERT: {
      return [...state, action.payload];
    }
    case CONTENT_DELETE: {
      //원본데이터로 filter하고 splice시 비동기 처리됨??
      //findIndex를 사용해서 splice를 이용할지
      //filter를 사용할지 추천해주세으
      //filter 빠를듯!
      //원본 배열의 데이터를 변경시킬려고 하면
      //리액트는 화면을 재랜더링 시켜주지않음!
      const copy = [...state];
      const result = copy.findIndex((ele) => ele.id === action.payload);
      if (result === -1) return;
      copy.splice(result, 1);
      return copy;
    }
    case CONTENT_DONE: {
      const copy = [...state];
      const result = copy.findIndex((ele) => ele.id === action.payload);
      if (result === -1) return;
      copy[result].isDone = true;
      return copy;
    }

    case CONTENT_CANCLE: {
      const copy = [...state];
      const result = copy.findIndex((ele) => ele.id === action.payload);
      if (result === -1) return;
      copy[result].isDone = false;
      return copy;
    }
    case CONTENT_MODIFY: {
      const copy = [...state];
      const result = copy.findIndex((ele) => ele.id === action.payload.id);
      if (result === undefined) return;
      copy[result] = {
        ...action.payload,
      };
      return copy;
    }
    default:
      return state;
  }
};

export default content;
