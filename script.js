document.addEventListener("DOMContentLoaded", function() {
    //const button = document.querySelector("button");
    const output = document.querySelector(".output");
    var images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
    ];

    var button = document.getElementById("randomButton");
    var image = document.getElementById("imageContainer");

    //console.log(button);
    //button.innerHTML = ("Hello");
    button.addEventListener("click", function() {
        // Generate a random index to select a random image
        var randomIndex = Math.floor(Math.random() * images.length);

        // Construct the image path using the random index
        var imagePath = "memes/" + images[randomIndex];

        // Set the image source to display the random image
        image.src = imagePath;
        output.innerHTML = images[randomIndex].toLocaleUpperCase();
    });
});