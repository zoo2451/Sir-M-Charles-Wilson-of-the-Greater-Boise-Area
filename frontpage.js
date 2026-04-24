(function() {
    const imagekit = new ImageKit({
        publicKey: "public_Xxs5t6CRjNs46EbBlDnPETAXJ+c=",
        urlEndpoint: "https://ik.imagekit.io/charliewilson",
    });

    document.addEventListener('DOMContentLoaded', () => {
            const imageElement = document.getElementById('randomImage');
            const imageFilenames = [
        "film_02_01_2025B.JPG",
        "film_02_14_2025.JPG",
        "film_02_14_2025B.JPG",
        "film_02_14_2025D.JPG",
        "film_02_14_2025E.JPG",
        "film_02_15_2025.JPG",
        "film_02_15_2025B.jpg",
        "film_02_15_2025C.JPG",
        "film_02_16_2025.JPG",
        "film_02_16_2025B.JPG",
        "film_02_17_2025.JPG",
        "film_02_17_2025D.JPG",
        "film_02_17_2025E.JPG",
        "film_02_18_2025.JPG",
        "film_02_18_2025B.JPG",
        "film_02_18_2025C.JPG",
        "film_02_19_2025.JPG",
        "film_02_22_2025.JPG",
        "film_03_07_2025B.JPG",
        "film_03_21_2025.JPG",
        "film_03_22_2025.JPG",
        "film_03_26_2025.JPG",
        "film_03_28_2025B.JPG",
        "film_03_28_2025D.JPG",
        "film_03_29_2025C.jpg",
        "film_03_30_2025.JPG",
        "film_04_05_2025.jpg",
        "film_04_05_2025B.jpg",
        "film_04_21_2025.JPG",
        "film_04_24_2025.JPG",
        "film_04_25_2025.JPG",
        "film_04_26_2025.JPG",
        "film_05_05_2025C.JPG",
        "film_05_15_2025.JPG",
        "film_05_26_2025.JPG",
        "film_05_26_2025B.JPG",
        "film_05_30_2025.JPG",
        "film_05_30_2025B.JPG",
        "film_05_30_2025C.JPG",
        "film_05_30_2025D.JPG",
        "film_05_30_2025E.JPG",
        "film_05_30_2025F.JPG",
        "film_05_30_2025G.jpg",
        "film_05_31_2025.JPG",
        "film_05_31_2025C.jpg",
        "film_05_31_2025D.JPG",
        "film_05_31_2025G.JPG",
        "film_05_31_2025H.JPG",
        "film_05_31_2025I.JPG",
        "film_06_12_2025.JPG",
        "film_06_13_2025.JPG",
        "film_06_15_2025.JPG",
        "film_06_20_2025.JPG",
        "film_06_20_2025B.JPG",
        "film_06_21_2025.JPG",
        "film_06_27_2025.JPG",
        "film_07_11_2025.JPG",
        "film_07_11_2025B.JPG",
        "film_07_11_2025C.JPG",
        "film_07_11_2025D.JPG",
        "film_07_11_2025E.JPG",
        "film_07_11_2025F.JPG",
        "film_07_12_2025.jpg",
        "film_07_17_2025.JPG",
        "film_07_17_2025C.JPG",
        "film_07_17_2025D.JPG",
        "film_07_18_2025.JPG",
        "film_07_19_2025.JPG",
        "film_07_19_2025B.JPG",
        "film_07_25_2025D.JPG",
        "film_07_25_2025E.JPG",
        "film_07_26_2025F.JPG",
        "film_07_26_2025H.JPG",
        "film_07_26_2025J.JPG",
        "film_07_26_2025K.JPG",
        "film_07_27_2025.JPG",
        "film_07_28_2025B.JPG",
        "film_07_28_2025C.JPG",
        "film_07_28_2025D.JPG",
        "film_07_29_2025.JPG",
        "film_07_29_2025B.JPG",
        "film_07_29_2025C.JPG",
        "film_07_30_2025.JPG",
        "film_07_30_2025B.JPG",
        "film_07_31_2025.JPG",
        "film_08_04_2025.JPG"
    ];
    function getFullUrl(filename) {
        return imagekit.url({
            path: '/introgallery/' + filename
        });
    }

            // Function to display a random image
            function displayRandomImage() {
                // Get a random index from the array
                const randomIndex = Math.floor(Math.random() * imageFilenames.length);
                const randomImageUrl = getFullUrl(imageFilenames[randomIndex]);
                // Set the image element's source to the randomly selected URL

                document.body.style.backgroundImage = `url('${randomImageUrl}')`;
            }

            // Display a random image when the page first loads
            displayRandomImage();

        });
})();