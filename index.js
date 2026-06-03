const bdaysong = new Audio("chagol.mp3");

document.getElementById("btn").addEventListener("click", () => {
  document.title = "Happy Birthday, Agrajeet!";
  document.documentElement.style.setProperty("--bg", "#FFFFFF");
  document.documentElement.style.setProperty("--fg", "#000000");
  document.documentElement.style.setProperty("--font", "Helvetica, sans-serif");

  document.getElementById("ver").textContent = "Happy Birthday, Agrajeet!";
  document.getElementById("warn").textContent = "Congratulations on completing 13 solar revolutions!";
  document.getElementById("human-resources").style.display = "none";
  document.getElementById("btn").style.display = "none";
  document.getElementById("chagol").style.display = "inline";
  document.getElementById("ahana").style.display = "inline";

  bdaysong.play();
});
