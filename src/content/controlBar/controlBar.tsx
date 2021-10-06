import { useSortingData } from "../contentContext";
import { INIT_LENGTH, SortingTypes, SORTING_ALGO } from "./constants";
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
          <SortingButton key={sorting.name} sortingData={sorting} />
        ))}
      </div>
    </div>
  );
}

function SortingButton({ sortingData }: { sortingData: SortingTypes }) {
  return (
    <div className="sorting__list-item">
      <SortingManager Component={sortingData.strategy} />
    </div>
  );
}
