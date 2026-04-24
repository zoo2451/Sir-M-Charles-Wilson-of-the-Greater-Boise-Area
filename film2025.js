(function() {
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
"film_01_08_2025.JPG",
  "film_01_16_2025.JPG",
  "film_01_18_2025.JPG",
  "film_01_18_2025B.JPG",
  "film_01_24_2025.JPG",
  "film_01_24_2025B.JPG",
  "film_01_24_2025C.JPG",
  "film_01_24_2025D.JPG",
  "film_01_24_2025E.JPG",
  "film_01_31_2025.JPG",
  "film_02_01_2025.JPG",
  "film_02_01_2025B.JPG",
  "film_02_02_2025.JPG",
  "film_02_03_2025.JPG",
  "film_02_08_2025.JPG",
  "film_02_13_2025.JPG",
  "film_02_14_2025.JPG",
  "film_02_14_2025B.JPG",
  "film_02_14_2025C.JPG",
  "film_02_14_2025D.JPG",
  "film_02_14_2025E.JPG",
  "film_02_15_2025.JPG",
  "film_02_15_2025B.jpg",
  "film_02_15_2025C.JPG",
  "film_02_16_2025.JPG",
  "film_02_16_2025B.JPG",
  "film_02_16_2025C.JPG",
  "film_02_16_2025D.JPG",
  "film_02_17_2025.JPG",
  "film_02_17_2025B.JPG",
  "film_02_17_2025C.JPG",
  "film_02_17_2025D.JPG",
  "film_02_17_2025E.JPG",
  "film_02_18_2025.JPG",
  "film_02_18_2025B.JPG",
  "film_02_18_2025C.JPG",
  "film_02_19_2025.JPG",
  "film_02_19_2025B.JPG",
  "film_02_20_2025.JPG",
  "film_02_20_2025B.JPG",
  "film_02_21_2025.JPG",
  "film_02_22_2025.JPG",
  "film_02_28_2025.JPG",
  "film_03_07_2025.JPG",
  "film_03_07_2025B.JPG",
  "film_03_13_2025.JPG",
  "film_03_14_2025.JPG",
  "film_03_14_2025B.JPG",
  "film_03_14_2025C.JPG",
  "film_03_19_2025.JPG",
  "film_03_21_2025.JPG",
  "film_03_22_2025.JPG",
  "film_03_26_2025.JPG",
  "film_03_28_2025.JPG",
  "film_03_28_2025B.JPG",
  "film_03_28_2025C.JPEG",
  "film_03_28_2025D.JPG",
  "film_03_29_2025.JPG",
  "film_03_29_2025B.JPEG",
  "film_03_29_2025C.JPEG",
  "film_03_29_2025D.JPEG",
  "film_03_29_2025E.JPEG",
  "film_03_30_2025.JPG",
  "film_04_05_2025.jpg",
  "film_04_05_2025B.jpg",
  "film_04_11_2025.JPG",
  "film_04_11_2025B.JPG",
  "film_04_11_2025C.JPG",
  "film_04_11_2025D.JPG",
  "film_04_11_2025E.JPG",
  "film_04_11_2025F.JPG",
  "film_04_11_2025G.JPG",
  "film_04_11_2025H.JPG",
  "film_04_11_2025I.JPG",
  "film_04_16_2025.JPG",
  "film_04_16_2025B.JPG",
  "film_04_19_2025.JPG",
  "film_04_20_2025.JPG",
  "film_04_21_2025.JPG",
  "film_04_24_2025.JPG",
  "film_04_25_2025.JPG",
  "film_04_25_2025B.JPG",
  "film_04_25_2025C.JPG",
  "film_04_25_2025D.JPG",
  "film_04_25_2025E.JPG",
  "film_04_25_2025F.JPG",
  "film_04_26_2025.JPG",
  "film_04_30_2025.JPG",
  "film_04_30_2025B.JPG",
  "film_05_01_2025.JPG",
  "film_05_05_2025.JPG",
  "film_05_05_2025B.JPG",
  "film_05_05_2025C.JPG",
  "film_05_13_2025.JPG",
  "film_05_15_2025.JPG",
  "film_05_16_2025.JPG",
  "film_05_16_2025B.JPG",
  "film_05_16_2025C.JPG",
  "film_05_17_2025.JPG",
  "film_05_18_2025.JPG",
  "film_05_20_2025.JPG",
  "film_05_21_2025.JPG",
  "film_05_21_2025B.JPG",
  "film_05_23_2025.JPG",
  "film_05_24_2025.JPG",
  "film_05_24_2025B.JPG",
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
  "film_05_31_2025B.JPG",
  "film_05_31_2025C.jpg",
  "film_05_31_2025D.JPG",
  "film_05_31_2025E.JPG",
  "film_05_31_2025F.JPG",
  "film_05_31_2025G.JPG",
  "film_05_31_2025H.JPG",
  "film_05_31_2025I.JPG",
  "film_06_12_2025.JPG",
  "film_06_12_2025B.JPG",
  "film_06_13_2025.JPG",
  "film_06_15_2025.JPG",
  "film_06_15_2025B.jpg",
  "film_06_15_2025C.jpg",
  "film_06_15_2025D.jpg",
  "film_06_15_2025E.jpg",
  "film_06_15_2025F.jpg",
  "film_06_15_2025G.jpg",
  "film_06_15_2025H.jpg",
  "film_06_16_2025.jpg",
  "film_06_20_2025.JPG",
  "film_06_20_2025B.JPG",
  "film_06_21_2025.JPG",
  "film_06_22_2025.JPG",
  "film_06_27_2025.JPG",
  "film_07_11_2025.JPG",
  "film_07_11_2025B.JPG",
  "film_07_11_2025C.JPG",
  "film_07_11_2025D.JPG",
  "film_07_11_2025E.JPG",
  "film_07_11_2025F.JPG",
  "film_07_11_2025G.JPG",
  "film_07_12_2025.jpg",
  "film_07_12_2025B.jpg",
  "film_07_12_2025C.jpg",
  "film_07_12_2025D.JPG",
  "film_07_12_2025E.jpg",
  "film_07_13_2025.JPG",
  "film_07_17_2025.JPG",
  "film_07_17_2025B.JPG",
  "film_07_17_2025C.JPG",
  "film_07_17_2025D.JPG",
  "film_07_18_2025.JPG",
  "film_07_19_2025.JPG",
  "film_07_19_2025B.JPG",
  "film_07_22_2025.JPG",
  "film_07_25_2025.JPG",
  "film_07_25_2025B.jpg",
  "film_07_25_2025C.JPG",
  "film_07_25_2025D.JPG",
  "film_07_25_2025E.JPG",
  "film_07_26_2025.JPG",
  "film_07_26_2025B.JPG",
  "film_07_26_2025C.JPG",
  "film_07_26_2025D.JPG",
  "film_07_26_2025E.JPG",
  "film_07_26_2025F.JPG",
  "film_07_26_2025G.JPG",
  "film_07_26_2025H.JPG",
  "film_07_26_2025I.JPG",
  "film_07_26_2025J.JPG",
  "film_07_26_2025K.JPG",
  "film_07_27_2025.JPG",
  "film_07_28_2025.JPG",
  "film_07_28_2025B.JPG",
  "film_07_28_2025C.JPG",
  "film_07_28_2025D.JPG",
  "film_07_28_2025E.JPG",
  "film_07_29_2025.JPG",
  "film_07_29_2025B.JPG",
  "film_07_29_2025C.JPG",
  "film_07_30_2025.JPG",
  "film_07_30_2025B.JPG",
  "film_07_31_2025.JPG",
  "film_08_04_2025.JPG",
  "film_09_17_2025.JPG",
  "film_09_21_2025.JPG",
  "film_09_21_2025B.JPG",
  "film_09_21_2025C.JPG",
  "film_09_21_2025D.JPG",
  "film_10_18_2025.JPG",
  "film_10_18_2025B.JPG",
  "film_10_18_2025C.JPG",
  "film_10_18_2025D.JPG",
  "film_10_18_2025E.JPG",
  "film_11_00_2025.JPG",
  "film_11_01_2025.JPG",
  "film_11_09_2025.JPG",
  "film_11_15_2025.JPG",
  "film_11_15_2025B.JPEG",
  "film_11_20_2025.JPG",
  "film_11_20_2025B.JPEG",
  "film_11_25_2025.JPG",
  "film_11_26_2025.JPG",
  "film_11_26_2025B.JPG",
  "film_11_26_2025C.JPG",
  "film_11_26_2025D.JPG",
  "film_11_28_2025.JPG",
  "film_11_28_2025B.JPG",
  "film_11_28_2025C.JPG",
  "film_11_28_2025D.JPG",
  "film_12_09_2025.JPG",
  "film_12_16_2025.JPG",
  "film_12_16_2025B.JPG",
  "film_12_16_2025C.JPG",
  "film_12_16_2025D.JPG",
  "film_12_16_2025E.JPG",
  "film_12_23_2025.JPG",
  "film_12_24_2025.JPG"
    ];

    // --- URL builder (replaces imageBasePath + filename) ---
    function getFullUrl(filename) {
        return imagekit.url({
            path: '/gallery2025/' + filename,
        });
    }

    function getThumbUrl(filename) {
        return imagekit.url({
            path: '/gallery2025/' + filename,
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
    });
})();


    
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
    });;