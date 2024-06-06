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
