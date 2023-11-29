import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { shuffleArray } from "../redux/boardSlice";
import Card from "./Card";
function Board() {
  const dispatch = useDispatch();
  const matched = useSelector((state) => state.board.matched);
  if (matched.length === 15) {
    alert("You won the game");
    dispatch(shuffleArray());
  }
  useEffect(() => {
    dispatch(shuffleArray());
  }, [dispatch]);
  const frameworks = useSelector((state) => state.board.frameworks);
  return (
    <div className="row container col-12  col-md-6 ">
      {frameworks.map((framework, index) => (
        <Card key={index} index={index} framework={framework} />
      ))}
    </div>
  );
}

export default Board;
