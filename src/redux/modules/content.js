// src/modules/counter.js
// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const CONTENT_INSERT = "CONTENT_INSERT";
const CONTENT_DELETE = "CONTENT_DELETE";
const CONTENT_MODIFY = "CONTENT_MODIFY";
const CONTENT_COMPLETE = "CONTENT_COMPLETE";

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

export const contentComplete = (payload) => {
  // console.log(payload);
  return {
    type: CONTENT_COMPLETE,
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

function contentHandler(state, id) {
  const copy = [...state];
  const result = copy.findIndex((ele) => ele.id === id);
  return { copy: copy, index: result };
}

// 리듀서
const content = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_INSERT: {
      return [...state, action.payload];
    }
    case CONTENT_DELETE: {
      const { copy, index } = contentHandler(state, action.payload);
      if (index === -1) return;
      copy.splice(index, 1);
      return copy;
    }
    case CONTENT_COMPLETE: {
      const { copy, index } = contentHandler(state, action.payload);
      if (index === -1) return;
      copy[index].isDone = !copy[index].isDone;
      return copy;
    }
    case CONTENT_MODIFY: {
      const { copy, index } = contentHandler(state, action.payload.id);
      if (index === -1) return;
      copy[index] = {
        ...action.payload,
      };
      return copy;
    }
    default:
      return state;
  }
};

export default content;
