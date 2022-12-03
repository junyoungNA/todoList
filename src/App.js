// src/App.js
import "./App.css";
import Router from "./routes/Router";

// const StxBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${({ borderColor }) => borderColor};
//   margin: 20ox;
// `;

const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
