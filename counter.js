let count = 0; // Initial counter value

function updateCounter() {
    document.getElementById("counter").textContent = count;
}

function plus() {
    count++; 
    updateCounter();
}

function minus() {
    count--; 
    updateCounter();
}

function reset() {
    count = 0; 
    updateCounter();
}
