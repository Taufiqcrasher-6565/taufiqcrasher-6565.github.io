const banners = [
  {name: "Bug", img: "banner1.jpg"},
  {name: "Crash V1", img: "banner2.jpg"},
  {name: "Delay Invisible", img: "banner3.jpg"},
  {name: "ForceClose", img: "banner4.jpg"}
];

const container = document.querySelector(".banner-container");

banners.forEach(b => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = b.img;
  img.alt = b.name;
  const label = document.createElement("p");
  label.textContent = b.name;
  div.appendChild(img);
  div.appendChild(label);
  container.appendChild(div);

  img.addEventListener("click", () => {
    alert(`Banner ${b.name} diklik!`);
  });
});

document.getElementById("prev").addEventListener("click", () => {
  container.scrollBy({ left: -220, behavior: "smooth" });
});

document.getElementById("next").addEventListener("click", () => {
  container.scrollBy({ left: 220, behavior: "smooth" });
});
