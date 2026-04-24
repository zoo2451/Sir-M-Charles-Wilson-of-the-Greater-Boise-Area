// ImageKit is available as a global from the CDN script tag
const imagekit = new ImageKit({
    publicKey: "public_Xxs5t6CRjNs46EbBlDnPETAXJ+c=",
    urlEndpoint: "https://ik.imagekit.io/charliewilson",
});

document.addEventListener('DOMContentLoaded', () => {

    const galleryContainer = document.getElementById('photoGallery');
    const enlargedTab      = document.getElementById('lilTabPhotos');
    const enlargedImg      = document.getElementById('enlarged-photo-img');
    const windowTitle      = document.querySelector('.window-title');

    let currentImageIndex = 0;
    const imageFilenames = [
        "film_03_21_2024.jpg",
        "film_03_21_2024A.jpg",
        "film_03_22_2024.jpg",
        "film_03_22_2024A.jpg",
        "film_03_22_2024B.jpg",
        "film_03_22_2024C.jpg",
        "film_03_22_2024D.jpg",
        "film_03_22_2024E.jpg",
        "film_03_22_2024F.jpg",
        "film_03_22_2024G.jpg",
        "film_03_25_2024.jpg",
        "film_03_25_2024B.jpg",
        "film_04_22_2024.jpg",
        "film_04_22_2024A.jpg",
        "film_04_30_2024.jpg",
        "film_05_05_2024.jpg",
        "film_05_05_2024A.jpg",
        "film_05_05_2024B.jpg",
        "film_05_05_2024C.jpg",
        "film_05_09_2024.jpg",
        "film_05_13_2024.jpg",
        "film_05_13_2024A.jpg",
        "film_05_15_2024.jpg",
        "film_05_15_2024A.jpg",
        "film_05_26_2024.jpg",
        "film_05_31_2024.jpg",
        "film_05_31_2024A.jpg",
        "film_05_31_2024B.jpg",
        "film_05_31_2024C.jpg",
        "film_06_01_2024.jpg",
        "film_06_01_2024A.jpg",
        "film_06_08_2024.jpg",
        "film_06_09_2024.jpg",
        "film_06_09_2024A.jpg",
        "film_06_09_2024B.jpg",
        "film_06_16_2024.jpg",
        "film_06_16_2024A.jpg",
        "film_06_23_2024.jpg",
        "film_06_23_2024A.jpg",
        "film_06_25_2024.jpg",
        "film_06_26_2024.jpg",
        "film_06_27_2024.jpg",
        "film_07_01_2024.jpg",
        "film_07_12_2024.jpg",
        "film_07_14_2024.jpg",
        "film_07_19_2024.JPG",
        "film_07_19_2024B.JPG",
        "film_07_19_2024C.JPG",
        "film_07_19_2024D.JPG",
        "film_07_19_2024E.JPG",
        "film_07_19_2024F.JPG",
        "film_07_19_2024G.JPG",
        "film_07_21_2024.JPG",
        "film_08_03_2024.jpg",
        "film_08_03_2024B.jpg",
        "film_08_03_2024C.jpg",
        "film_08_05_2024.JPG",
        "film_08_09_2024.JPG",
        "film_08_09_2024B.JPG",
        "film_08_14_2024.JPG",
        "film_08_16_2024.JPG",
        "film_08_16_2024B.JPG",
        "film_08_19_2024.JPG",
        "film_08_19_2024A.JPG",
        "film_08_19_2024B.JPG",
        "film_08_19_2024C.JPG",
        "film_08_19_2024D.JPG",
        "film_08_19_2024E.JPG",
        "film_08_20_2024.JPG",
        "film_08_20_2024B.JPG",
        "film_08_25_2024.JPG",
        "film_08_25_2024B.JPG",
        "film_08_30_2024.JPG",
        "film_08_30_2024B.JPG",
        "film_08_30_2024C.JPG",
        "film_08_30_2024D.JPG",
        "film_08_31_2024.JPG",
        "film_08_31_2024B.JPG",
        "film_08_31_2024C.JPG",
        "film_08_31_2024D.JPG",
        "film_08_31_2024E.JPG",
        "film_09_03_2024.JPG",
        "film_09_03_2024B.JPG",
        "film_09_03_2024C.JPG",
        "film_09_03_2024D.JPG",
        "film_09_03_2024E.JPG",
        "film_09_03_2024F.jpg",
        "film_09_03_2024G.JPG",
        "film_09_10_2024.JPG",
        "film_09_12_2024.JPG",
        "film_09_12_2024B.JPG",
        "film_09_12_2024C.JPG",
        "film_09_12_2024D.JPG",
        "film_09_12_2024E.JPG",
        "film_09_13_2024.JPG",
        "film_09_13_2024B.JPG",
        "film_09_13_2024C.JPG",
        "film_09_13_2024D.JPG",
        "film_09_13_2024E.JPG",
        "film_09_2024.JPG",
        "film_09_2024B.JPG",
        "film_09_21_2024.JPG",
        "film_09_23_2024.jpg",
        "film_09_23_2024B.JPG",
        "film_09_23_2024C.jpg",
        "film_09_23_2024D.JPG",
        "film_09_23_2024E.jpg",
        "film_09_23_2024F.JPG",
        "film_09_25_2024.JPG",
        "film_09_25_2024B.JPG",
        "film_09_25_2024C.JPG",
        "film_09_25_2024D.JPG",
        "film_09_25_2024E.JPG",
        "film_09_25_2024F.JPG",
        "film_09_25_2024G.JPG",
        "film_09_25_2024H.JPG",
        "film_09_26_2024.JPG",
        "film_09_26_2024B.JPG",
        "film_09_26_2024C.JPG",
        "film_09_26_2024D.JPG",
        "film_09_26_2024E.JPG",
        "film_09_26_2024F.JPG",
        "film_09_26_2024G.JPG",
        "film_09_26_2024H.JPG",
        "film_09_28_2024.jpg",
        "film_09_28_2024B.JPG",
        "film_09_28_2024C.jpg",
        "film_09_28_2024D.JPG",
        "film_09_28_2024E.jpg",
        "film_09_28_2024F.JPG",
        "film_09_28_2024G.jpg",
        "film_09_28_2024H.JPG",
        "film_09_28_2024I.JPG",
        "film_10_02_2024.JPG",
        "film_10_03_2024.JPG",
        "film_10_03_2024B.JPG",
        "film_10_03_2024C.JPG",
        "film_10_03_2024D.JPG",
        "film_10_04_2024.JPG",
        "film_10_07_2024.JPG",
        "film_10_11_2024.JPG",
        "film_10_11_2024B.JPG",
        "film_10_11_2024C.JPG",
        "film_10_15_2024.JPG",
        "film_10_15_2024B.JPG",
        "film_10_15_2024C.JPG",
        "film_10_15_2024D.JPG",
        "film_10_15_2024E.JPG",
        "film_10_15_2024F.JPG",
        "film_10_15_2024G.JPG",
        "film_10_17_2024.JPG",
        "film_10_17_2024B.JPG",
        "film_10_18_2024.JPG",
        "film_10_18_2024B.JPG",
        "film_10_18_2024C.JPG",
        "film_10_18_2024D.JPG",
        "film_10_18_2024E.JPG",
        "film_10_18_2024F.JPG",
        "film_10_18_2024G.JPG",
        "film_10_19_2024.JPG",
        "film_10_19_2024B.JPG",
        "film_10_19_2024C.JPG",
        "film_10_19_2024D.JPG",
        "film_10_19_2024E.JPG",
        "film_10_19_2024F.JPG",
        "film_10_19_2024G.JPG",
        "film_10_19_2024H.JPG",
        "film_10_19_2024I.JPG",
        "film_10_19_2024J.JPG",
        "film_10_19_2024K.JPG",
        "film_10_20_2024.JPG",
        "film_10_20_2024B.JPG",
        "film_10_20_2024C.JPG",
        "film_10_20_2024D.jpg",
        "film_10_20_2024F.jpg",
        "film_10_25_2024.jpg",
        "film_10_25_2024B.jpg",
        "film_10_25_2024C.jpg",
        "film_10_25_2024D.JPG",
        "film_10_25_2024E.jpg",
        "film_10_25_2024F.jpg",
        "film_10_25_2024G.jpg",
        "film_10_25_2024H.jpg",
        "film_10_25_2024I.jpg",
        "film_10_25_2024J.jpg",
        "film_10_25_2024K.jpg",
        "film_10_25_2024L.jpg",
        "film_10_25_2024M.jpg",
        "film_10_26_2024.jpg",
        "film_10_26_2024B.jpg",
        "film_10_26_2024C.jpg",
        "film_10_26_2024D.jpg",
        "film_10_26_2024E.jpg",
        "film_10_26_2024F.jpg",
        "film_10_27_2024.jpg",
        "film_10_28_2024.jpg",
        "film_10_28_2024B.jpg",
        "film_11_07_2024.JPG",
        "film_11_07_2024B.jpg",
        "film_11_08_2024.jpg",
        "film_11_16_2024.jpg",
        "film_11_16_2024B.jpg",
        "film_11_16_2024C.jpg",
        "film_11_16_2024D.jpg",
        "film_11_21_2024.jpg",
        "film_11_21_2024B.jpg",
        "film_11_27_2024.jpg",
        "film_11_27_2024B.jpg",
        "film_11_28_2024.jpg",
        "film_11_29_2024.jpg",
        "film_11_29_2024B.jpg",
        "film_12_05_2024.jpg",
        "film_12_05_2024B.jpg",
        "film_12_21_2024.JPG",
        "film_12_28_2024.JPG",
        "film_12_29_2024.JPG",
        "film_12_30_2024.JPG",
        "film_12_31_2024.JPG",
        "film_12_31_2024B.JPG"
    ];

    // --- URL builder (replaces imageBasePath + filename) ---
    function getFullUrl(filename) {
        return imagekit.url({
            path: '/gallery2024/' + filename,
        });
    }

    function getThumbUrl(filename) {
        return imagekit.url({
            path: '/gallery2024/' + filename,
            transformation: [{ width: '96', height: '96', cropMode: 'at_least' }]
        });
    }

    // --- Intersection Observer for lazy loading ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    // --- Build the gallery ---
    function loadGalleryImages() {
        galleryContainer.innerHTML = '';

        imageFilenames.forEach((filename, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.setAttribute('data-name', filename);

            const img = document.createElement('img');
            img.dataset.src = getThumbUrl(filename);  // lazy-loaded thumbnail
            img.alt = filename;

            const caption = document.createElement('span');
            caption.className = 'gallery-caption';
            caption.textContent = filename;

            img.onerror = () => galleryItem.remove();

            galleryItem.appendChild(img);
            galleryItem.appendChild(caption);
            galleryContainer.appendChild(galleryItem);
            observer.observe(img);

            galleryItem.addEventListener('click', () => {
                currentImageIndex = index;
                displayEnlargedImage(index);
            });
        });
    }

    // --- Popup viewer ---
    function displayEnlargedImage(index) {
        const filename = imageFilenames[index];
        enlargedImg.src = getFullUrl(filename);
        windowTitle.textContent = filename;
        enlargedTab.classList.add('active');
        enlargedTab.style.display = 'block';
    }

    function closeSmallTab() {
        enlargedTab.style.display = 'none';
        enlargedTab.classList.remove('active');
    }

    // expose closeSmallTab for the onclick in HTML
    window.closeSmallTab = closeSmallTab;

    loadGalleryImages();


    
    // --- Keyboard Navigation for Enlarged Image ---
    document.addEventListener('keydown', function(event) {
        // Only navigate if the enlarged photo tab is active
        if (lilTabPhotos && lilTabPhotos.classList.contains('active')) {
            if (event.key === 'ArrowRight') {
                event.preventDefault(); // Prevent page scrolling
                currentImageIndex = (currentImageIndex + 1) % imageFilenames.length;
                displayEnlargedImage(currentImageIndex);
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault(); // Prevent page scrolling
                currentImageIndex = (currentImageIndex - 1 + imageFilenames.length) % imageFilenames.length;
                displayEnlargedImage(currentImageIndex);
            } else if (event.key === 'Escape') {
                event.preventDefault(); // Prevent default escape behavior if needed
                closeSmallTab();
            }
        }
    });

    // --- Rotation button functionality (relocated to main DOMContentLoaded) ---
    const rotate90Btn = document.getElementById('rotate90-btn');
    if (rotate90Btn) {
        rotate90Btn.addEventListener('click', function() {
            currentRotation = (currentRotation + 90) % 360;
            enlargedPhotoImg.style.transform = `rotate(${currentRotation}deg)`;
            updateImagePosition(enlargedPhotoImg); // Pass the image element
        });
    }

    // Keyboard shortcuts: D = rotate right, A = rotate left
    document.addEventListener('keydown', function(event) {
        if (lilTabPhotos && lilTabPhotos.classList.contains('active')) {
            if (event.key === 'd' || event.key === 'D') {
                currentRotation = (currentRotation + 90) % 360;
                enlargedPhotoImg.style.transform = `rotate(${currentRotation}deg)`;
                updateImagePosition(enlargedPhotoImg);
            } else if (event.key === 'a' || event.key === 'A') {
                currentRotation = (currentRotation - 90 + 360) % 360;
                enlargedPhotoImg.style.transform = `rotate(${currentRotation}deg)`;
                updateImagePosition(enlargedPhotoImg);
            }
        }
    });

    const rotate180Btn = document.getElementById('rotate180-btn');
    if (rotate180Btn) {
        rotate180Btn.addEventListener('click', function() {
            currentRotation = (currentRotation + 180) % 360;
            enlargedPhotoImg.style.transform = `rotate(${currentRotation}deg)`;
            updateImagePosition(enlargedPhotoImg); // Pass the image element
        });
    }
    // Keyboard shortcut: W = rotate 180 degrees S = rotate 180 degrees
    document.addEventListener('keydown', function(event) {
        if (lilTabPhotos && lilTabPhotos.classList.contains('active')) {
            if (event.key === 'w' || event.key === 'W') {
                currentRotation = (currentRotation + 180) % 360;
                enlargedPhotoImg.style.transform = `rotate(${currentRotation}deg)`;
                updateImagePosition(enlargedPhotoImg);
            } else if (event.key === 's' || event.key === 'S') {
                currentRotation = (currentRotation - 180 + 360) % 360;
                enlargedPhotoImg.style.transform = `rotate(${currentRotation}deg)`;
                updateImagePosition(enlargedPhotoImg);
            }
        }
    });
});