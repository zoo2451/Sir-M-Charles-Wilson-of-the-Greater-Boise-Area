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
        "film_02_06_2026.JPG",
        "film_03_09_26.JPG",
        "film_03_09_26B.JPG",
        "film_03_14_26.JPG",
        "film_03_14_26B.JPG",
        "film_03_18_26.JPG",
        "film_03_18_26B.JPG",
        "film_03_18_26C.JPG",
        "film_03_18_26D.JPG",
        "film_03_18_26E.JPG",
        "film_03_18_26F.JPG",
        "film_03_18_26G.JPG",
        "film_03_19_26.JPG",
        "film_03_19_26B.JPG",
        "film_03_20_26.JPG",
        "film_03_20_26B.JPG",
        "film_03_21_26.JPG",
        "film_03_22_26.JPG",
        "film_03_27_26.JPG",
        "film_03_27_26B.JPG",
        "film_03_27_26C.JPG",
        "film_03_27_26D.JPG",
        "film_03_27_26E.JPG",
        "film_03_28_26.JPG",
        "film_03_28_26B.JPG",
        "film_03_28_26C.JPG",
        "film_03_28_26D.JPG",
        "film_03_28_26E.JPG",
        "film_03_28_26F.JPG",
        "film_03_28_26G.JPG",
        "film_03_28_26H.JPG",
        "film_03_31_26.JPG"
    ];

    // --- URL builder (replaces imageBasePath + filename) ---
    function getFullUrl(filename) {
        return imagekit.url({
            path: '/gallery2026/' + filename,
        });
    }

    function getThumbUrl(filename) {
        return imagekit.url({
            path: '/gallery2026/' + filename,
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