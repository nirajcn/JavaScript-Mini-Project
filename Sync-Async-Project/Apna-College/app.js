// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data: ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 1000);
// }

// getData(1);
// getData(2);
// getData(3);
// getData(4);

// callBack Hell

// getData(1, () => {
//   getData(2, () => {
//     getData(3, ()=> {
//         getData(4);
//     });
//   });
// });

// ++++++++++++++++++++++++++ Promise ++++++++++++++++++
// let promise = new Promise((resolve, reject)=> {
//     console.log("I am A Promise");
//     resolve()
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data: ",dataId);
//             resolve("Success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data1");
//       resolve("Sucess");
//     }, 5000);
//   });
// };

// console.log("Fetching data....");

// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);

// })

// ++++++++++++++++++++++++ async function ++++++++++++++++

// function api() {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("Weather data Recived");
//       resolve("Success");
//     }, 4000);
//   });
// }

// async function getWeatherData() {
//   await api(); // 1st
//   await api(); // 2nd
// }

// console.log("Getting Weather Data...");
// getWeatherData();

// ++++++++++++++++++++++++++++++++++++++++++++++++++

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    },2000);
  });
}

async function getAllData() {
  console.log("Getting Data1...");
  await getData(1);
  console.log("Getting Data2...");
  await getData(2);
  console.log("Getting Data3...");
  await getData(3);
  console.log("Getting Data4...");
  await getData(4);
  console.log("Getting Data5...");
  await getData(5);
  console.log("Getting Data6...");
  await getData(6);

  console.log("All Data Recieved...!");
}

getAllData();
