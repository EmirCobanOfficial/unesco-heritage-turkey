document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const city = urlParams.get("city");

  if (city) {
    document.body.innerHTML = `
            <h2>${city} UNESCO Miras Alanları</h2>
            <div id="list"></div>
        `;
    const listDiv = document.getElementById("list");
    unescoYerleri
      .filter((y) => y.city === city)
      .forEach((y) => {
        listDiv.innerHTML += `
                    <div>
                        <h3>${y.name}</h3>
                        <p>${y.desc}</p>
                        <img src="${y.img}" width="400" height="150" class="thumbnail" onclick="showPhoto('${y.img}', '${y.name}')">
                        <a href="${y.link}" target="_blank">360 Derece İncele</a>
                    </div>
                `;
      });
  }
});

function showPhoto(imgSrc, name) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h3>${name}</h3>
            <img src="${imgSrc}" alt="${name}" width="500">
        </div>
    `;
  document.body.appendChild(modal);
}

function closeModal() {
  document.querySelector(".modal").remove();
}
