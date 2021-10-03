import { useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";

export function Chart() {
  const length = 60;
  const data1 = Array.from({ length }, () =>
    Math.floor(Math.random() * length)
  );

  const [randomArr, setRandomArr] = useState(data1);
  function generateArr() {
    const randomData = Array.from({ length }, () =>
      Math.floor(Math.random() * length)
    );
    setRandomArr(randomData);
  }

  const data = useMemo(
    () => ({
      labels: Array.from({ length }, () => ""),
      datasets: [
        {
          label: "",
          data: randomArr,
          backgroundColor: Array.from(
            { length },
            () => "rgba(255, 99, 132, 0.2)"
          ),
          //  [
          //         "rgba(255, 99, 132, 0.2)",
          //         "rgba(54, 162, 235, 0.2)",
          //         "rgba(255, 206, 86, 0.2)",
          //         "rgba(75, 192, 192, 0.2)",
          //         "rgba(153, 102, 255, 0.2)",
          //         "rgba(255, 159, 64, 0.2)",
          //       ],
          borderColor: Array.from({ length }, () => "rgba(255, 99, 132, 1)"),
          // [
          //   "rgba(255, 99, 132, 1)",
          //   "rgba(54, 162, 235, 1)",
          //   "rgba(255, 206, 86, 1)",
          //   "rgba(75, 192, 192, 1)",
          //   "rgba(153, 102, 255, 1)",
          //   "rgba(255, 159, 64, 1)",
          // ],
          borderWidth: 1,
        },
      ],
    }),
    [randomArr]
  );
  return (
    <>
      <button onClick={generateArr}>Randomize</button>
      <Bar
        data={data}
        width={100}
        height={45}
        options={{ maintainAspectRatio: true }}
      />
    </>
  );
}
