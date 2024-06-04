document.getElementById("facebook").addEventListener("click", function () {
  window.open("https://www.facebook.com/loyd.parker.5688/", "_blank");
});

document.getElementById("instagram").addEventListener("click", function () {
  window.open("https://www.instagram.com/_tvanh2011_/", "_blank");
});

document.getElementById("tiktok").addEventListener("click", function () {
  window.open(
    "https://www.tiktok.com/@vietanh.oi?is_from_webapp=1&sender_device=pc",
    "_blank"
  );
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
