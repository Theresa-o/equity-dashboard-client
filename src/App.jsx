import BarChart from "./component/chart";

function App() {
  return (
    <div className="App">
      <BarChart />
    </div>
  );
}

export default App;

// -------------------------------------LATEST---------------------------------
// import { useState, useEffect } from "react";
// import Chart from "chart.js/auto";
// // import LineChart from "./component/chart";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://localhost:3000/");
//       const data = await res.json();
//       setData(data);
//       console.log(data);
//     };

//     // Fetch data every 5 seconds
//     const interval = setInterval(fetchData, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const canvas = document.getElementById("chart");

//     if (data.length > 0) {
//       const labels = data.map((d) => d.timestamp);
//       const equityData = data.map((d) => d.equity);
//       const balanceData = data.map((d) => d.balance);

//       new Chart(canvas, {
//         type: "line",
//         data: {
//           labels: labels,
//           datasets: [
//             {
//               label: "Equity",
//               data: equityData,
//               borderColor: "rgb(255, 99, 132)",
//               tension: 0.1,
//             },
//             {
//               label: "Balance",
//               data: balanceData,
//               borderColor: "rgb(54, 162, 235)",
//               tension: 0.1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           scales: {
//             x: {
//               type: "time",
//               time: {
//                 unit: "second",
//               },
//             },
//           },
//         },
//       });
//     }
//   }, [data]);

//   return (
//     <div className="App">
//       <canvas id="chart"></canvas>
//     </div>
//   );
// }

// export default App;

// ----------------------------0-----------------------------------------

// // Copy code
// import { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://localhost:3000/");
//       const data = await res.json();
//       setData(data);
//     };

//     // Fetch data every 5 seconds
//     const interval = setInterval(fetchData, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const canvas = document.getElementById("chart");

//     if (data.length > 0) {
//       const labels = data.map((d) => d.timestamp);
//       const equityData = data.map((d) => d.equity);
//       const balanceData = data.map((d) => d.balance);

//       new Chart(canvas, {
//         type: "line",
//         data: {
//           labels: labels,
//           datasets: [
//             {
//               label: "Equity",
//               data: equityData,
//               borderColor: "rgb(255, 99, 132)",
//               tension: 0.1,
//             },
//             {
//               label: "Balance",
//               data: balanceData,
//               borderColor: "rgb(54, 162, 235)",
//               tension: 0.1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           scales: {
//             x: {
//               type: "time",
//               time: {
//                 unit: "second",
//               },
//             },
//           },
//         },
//       });
//     }
//   }, [data]);

//   return (
//     <div className="App">
//       <canvas id="chart"></canvas>
//       <Chart data={data} />
//     </div>
//   );
// }

// export default App;

// --------------------1----------------
// import { useState, useEffect } from "react";
// import Chart from "chart.js/auto";
// // import LineChart from "./component/chart";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://localhost:3000/");
//       const data = await res.json();
//       setData(data);
//     };

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://localhost:3000/");
//       const data = await res.json();
//       setData(data);
//     };

//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);
//   return (
//     <div className="App">
//       <LineChart data={data} />
//     </div>
//   );
// }

// export default App;

// ----------------------------------------2------------------------------

// import { useState, useEffect } from "react";
// import Chart from "chart.js/auto";
// // import LineChart from "./component/chart";

// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     // console.log("hello");
//     fetch("http://localhost:3000/")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);
//   return (
//     <div className="App">
//       <LineChart data={data} />
//     </div>
//   );
// }

// export default App;
