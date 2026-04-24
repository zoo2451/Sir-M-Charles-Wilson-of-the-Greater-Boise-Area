const dragWindow = document.getElementById("lilTabPhotos");
const dragHandle = dragWindow.querySelector("#liltitleBar");

if (dragHandle) {
    let isDragging = false;
    let offsetX, offsetY;

    dragHandle.addEventListener("mousedown", (e) => {
        isDragging = true;
        
        // Calculate the distance between the mouse and the top-left of the window
        offsetX = e.clientX - dragWindow.offsetLeft;
        offsetY = e.clientY - dragWindow.offsetTop;
        
        // XP Style: Ensure 'right' doesn't fight 'left'
        dragWindow.style.right = "auto";
        dragWindow.style.bottom = "auto";

        console.log("Grabbed!");
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        // Move the window to the mouse position minus the original offset
        dragWindow.style.left = (e.clientX - offsetX) + "px";
        dragWindow.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            console.log("Released!");
        }
    });
} else {
    console.log("Error: Could not find the title bar handle.");
}