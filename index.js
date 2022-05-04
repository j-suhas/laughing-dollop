const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

let res_data = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};

function isPrime(date) {
  for (let i = 2; i * i <= date; i++) if (date % i === 0) return false;
  return date > 1;
}
let d = 10;
console.log(isPrime(d));

app.get("/", async (req, res) => {
  isPrime(d)
    ? res.status(200).json(res_data)
    : res.status(403).send("Date is not prime so you can't request the data");
  console.log("data sent!");
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
