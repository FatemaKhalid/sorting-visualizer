import { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getChartConfig } from "./services";

export function Chart() {
  const [length, setLength] = useState(60);
  const { randomArr, generateArr } = useRandomArr(length);
  useEffect(() => {
    generateArr();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);
  const data = useMemo(
    () => getChartConfig(length, randomArr),
    [randomArr, length]
  );
  return (
    <>
      <button onClick={generateArr}>Randomize</button>
      <input
        value={length}
        type="number"
        onChange={(e) => {
          const val = e.target.value ? +e.target.value : 30;
          setLength(val);
        }}
      />
      <Bar
        data={data}
        width={100}
        height={45}
        options={{ maintainAspectRatio: true }}
      />
    </>
  );
}

function useRandomArr(length: number) {
  const [randomArr, setRandomArr] = useState<number[]>([]);
  function generateArr() {
    const randomData = Array.from({ length }, () =>
      Math.floor(Math.random() * length)
    );
    setRandomArr(randomData);
  }
  return { randomArr, generateArr };
}
