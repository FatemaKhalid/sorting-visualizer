import { useSortingData } from "../contentContext";
import { SORTING_ALGO } from "./constants";

export function ControlBar() {
  const { length, generateArr, handleLengthChange } = useSortingData();
  return (
    <div>
      <button onClick={generateArr}>Randomize</button>
      <input
        value={length}
        type="number"
        onChange={(e) => {
          const val = e.target.value ? +e.target.value : 30;
          handleLengthChange(val);
        }}
      />
      {SORTING_ALGO.map((sorting) => (
        <SortingButton key={sorting} name={sorting} />
      ))}
    </div>
  );
}

function SortingButton({ name }: { name: string }) {
  return (
    <li className="sorting__list-item">
      <button
        className="sorting__btn"
        type="button"
        onClick={() => {
          console.log({ name });
        }}
      >
        {name}
      </button>
    </li>
  );
}
