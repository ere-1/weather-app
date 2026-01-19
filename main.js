const weatherAPI = async (country) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=de504d7a3c4e42d394f151829261901&q=${country}&aqi=no`,
    );
    const data = await res.json();
    document.getElementById("temp").innerText = data.current.temp_c + "°C";
    document.getElementById("status").innerText = data.current.condition.text;
    document.getElementById("country").innerText =
      data.location.country + " - " + data.location.name;
    document.getElementById("date").innerText = data.location.localtime;
    console.log(data);
  } catch {
    console.log("error");
  }
};

document
  .getElementById("searchbar")
  .addEventListener("input", (e) => weatherAPI(e.target.value));
