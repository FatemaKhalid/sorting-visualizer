import { useSortingData } from "../contentContext";
import { INIT_LENGTH, SORTING_ALGO } from "./constants";
import "../content.scss";
import { SortingManager } from "../sorting";

export function ControlBar() {
  const { length, generateArr, handleLengthChange } = useSortingData();
  return (
    <div className="sorting__control-bar">
      <div className="sorting__control-bar-btns">
        <div className="sorting__randomize-btn-container">
          <button className="sorting__randomize-btn" onClick={generateArr}>
            Randomize
          </button>
        </div>
        <div className="sorting__length-input">
          <input
            value={length}
            type="number"
            onChange={(e) => {
              const val = e.target.value ? +e.target.value : INIT_LENGTH;
              handleLengthChange(val);
            }}
          />
        </div>
      </div>
      <div className="sorting__list">
        {SORTING_ALGO.map((sorting) => (
          <div key={sorting.name} className="sorting__list-item">
            <SortingManager Component={sorting.strategy} />
          </div>
        ))}
      </div>
    </div>
  );
}
