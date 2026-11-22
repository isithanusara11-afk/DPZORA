// DPZORA - App Controller
// Developer: Isith Anusara

const DPZORA = {
    name: "DPZORA",
    version: "1.0.0",
    developer: "Isith Anusara",

    init() {
        console.log("DPZORA Started!");

        this.loadGallery();
        this.setupButtons();
    },

    setupButtons() {
        const input = document.getElementById("media");

        if (input) {
            input.addEventListener("change", () => {
                this.loadGallery();
            });
        }
    },

    loadGallery() {
        const files = document.getElementById("media")?.files;

        if (!files) return;

        console.log("Selected files:", files.length);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    DPZORA.init();
});
