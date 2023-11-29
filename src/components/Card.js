import { useSelector, useDispatch } from "react-redux";
import { setLastClicked, addToMatched, changeScore } from "../redux/boardSlice";

function Card({ framework, index }) {
  const lastClicked = useSelector((state) => state.board.lastClicked);
  const matched = useSelector((state) => state.board.matched);
  const dispatch = useDispatch();
  const frameworks = useSelector((state) => state.board.frameworks);
  const isFlipped = lastClicked === index || matched.includes(framework);

  const handleClick = () => {
    if (!isFlipped) {
      if (lastClicked === null) {
        dispatch(setLastClicked(index));
      } else if (frameworks[lastClicked] === framework) {
        dispatch(changeScore(50));
        dispatch(addToMatched(framework));
        dispatch(setLastClicked(null));
      } else {
        dispatch(setLastClicked(index));
        setTimeout(() => {
          dispatch(setLastClicked(null));
          dispatch(changeScore(-10));
        }, 400);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`col-2 frameworkCard ${isFlipped ? "" : "disabled"}`}
    >
      <img
        className="frameworkLogo "
        alt=""
        src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${framework}.png`}
      ></img>
    </div>
  );
}

export default Card;
