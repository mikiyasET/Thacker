var modalInfo = {
  1: {
    title: "Dawa Pharmacy",
    info: "By Nuredin Mohammed",
    link: "http://localhost/Thacker/web/index.php",
    github: "#"
  },
  2: {
    title: "MOOK Student",
    info: "By Robel Ephrem",
    link: "http://localhost/Thacker/web/index.php",
    github: "#"
  },
  3: {
    title: "HILL Library",
    info: "By Surafel Zeleke",
    link: "http://localhost/Thacker/web/index.php",
    github: "#"
  },
  4: {
    title: "Simple Bet",
    info: "By Bamlak Amare",
    link: "http://localhost/Thacker/web/index.php",
    github: "#"
  },
};

// Get the modal
var modal = document.getElementById("preview");

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var project = btn[i].parentElement;
    openModal(project);
  });
}

function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function () {
    window.open(modalInfo[id].link, "_blank");
  };
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[id].github, "_blank");
  };
}

// close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
