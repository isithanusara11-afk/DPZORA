// DPZORA - DP Lookup
// Developer: Isith Anusara

function lookupDP() {
    const number = document.getElementById("waNumber").value.trim();

    if (!number) {
        alert("Please enter a WhatsApp number!");
        return;
    }

    alert(
        "DPZORA cannot retrieve a WhatsApp profile photo using only a phone number. Ask the person to share their profile photo with you."
    );
}
