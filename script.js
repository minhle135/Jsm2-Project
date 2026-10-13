function upDate(previewPic) {
    console.log("upDate() triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    document.getElementById("image").textContent = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    console.log("undo() triggered");

    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").textContent =
        "Hover over an image below to display here.";
}
