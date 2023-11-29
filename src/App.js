import "./App.css";
import Board from "./components/Board";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { shuffleArray } from "./redux/boardSlice";

function App() {
  const score = useSelector((state) => state.board.score);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(shuffleArray());
  };
  return (
    <>
      <div className=" mt-4 row App ">
        <div className="    col-12 text-center col-md-6 ">
          <h1 className="">Js Memory Game</h1>

          <h3>Score {score}</h3>
          <button onClick={handleClick} className="btn btn-info">
            Shuffle New Cardds
          </button>
        </div>
        <Board></Board> <Footer></Footer>
      </div>
    </>
  );
}

export default App;
