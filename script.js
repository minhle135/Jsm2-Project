
function upDate(previewPic) {
    console.log("upDate() triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    const preview = document.getElementById("image");

    preview.textContent = previewPic.alt;

    preview.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('" +
        previewPic.src +
        "')";

    preview.classList.add("has-image");
}


function undo() {
    console.log("undo() triggered");

    const preview = document.getElementById("image");

    preview.style.backgroundImage = "url('')";

    preview.textContent =
        "Hover over an image below to display here.";

    preview.classList.remove("has-image");
}

function addTabIndex() {
    console.log("addTabIndex() triggered");

    const images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}


// Run the function when the page finishes loading.
window.addEventListener("load", addTabIndex);
