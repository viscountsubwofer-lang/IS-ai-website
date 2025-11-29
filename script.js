document.getElementById("sendBtn").onclick = () => {
    const text = document.getElementById("inputText").value;

    if (text.trim() === "") {
        document.getElementById("outputText").innerText = "Masukkan teks terlebih dahulu!";
        return;
    }

    // Demo: membalik teks
    const output = "AI: " + text.split("").reverse().join("");

    document.getElementById("outputText").innerText = output;
};
