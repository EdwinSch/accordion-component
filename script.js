/* ---- TARGETS && INITIALIZERS ---- */
const toggleBtn = document.querySelectorAll(".toggle")


/* ---- FUNCTIONS ---- */

toggleBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        // Show/Hide text content
        this.parentElement.nextElementSibling.classList.toggle("show-text");
        // Switch Icon
        this.children[0].classList.toggle("show-chevron-up");
        this.children[1].classList.toggle("hide-chevron-down");
    })
});