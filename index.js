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

var typing = new Typed(".typing", {
  strings: [
    "Tran Viet Anh",
    "IT BA",
    "Tarot Reader",
    "Cat lover",
    "Your Boyfriend",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

function showAllImages() {
  var hiddenImages = document.querySelectorAll(
    '.listofbox .box[style="display: none;"]'
  );
  hiddenImages.forEach(function (image) {
    image.style.display = "block";
  });

  var showButton = document.getElementById("showAllImages");
  showButton.style.display = "none";

  var hideButton = document.createElement("button");
  hideButton.textContent = "Ẩn bớt ảnh";
  hideButton.style.marginBottom = "20px";
  hideButton.onclick = function () {
    hiddenImages.forEach(function (image) {
      image.style.display = "none";
    });
    hideButton.style.display = "none";
    showButton.style.display = "block";
  };

  document.getElementById("listofimages").appendChild(hideButton);
}

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var imgs = document.querySelectorAll(".zoomable");
var modalImg = document.getElementById("zoomed-img");

imgs.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementById("close");

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
