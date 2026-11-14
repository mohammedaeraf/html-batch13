function showHidePara() {
  let para = document.getElementById("para");

  // if element is visible hide it
  if (para.style.display == "") {
    para.style.display = "none"; // hide it
  } else // else show the element
  {
    para.style.display = ""; // show it
  }
}
