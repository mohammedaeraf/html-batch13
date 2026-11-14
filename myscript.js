function showHidePara() {
  let para = document.getElementById("para");

  if (para.style.display == "") {
    para.style.display = "none"; // hide it
  } else {
    para.style.display = ""; // show it
  }
}
