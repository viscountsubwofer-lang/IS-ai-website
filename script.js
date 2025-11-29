const API_URL = "https://hf.space/embed/tiiuae/falcon-7b-instruct/+/api/predict";

document.getElementById("sendBtn").onclick = async () => {
    const text = document.getElementById("inputText").value;

    if (!text.trim()) {
        document.getElementById("outputText").innerText = "Masukkan teks dulu!";
        return;
    }

    document.getElementById("outputText").innerText = "AI sedang memproses...";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: [text] })
        });

        const result = await response.json();
        const aiText = result.data[0];

        document.getElementById("outputText").innerText = aiText;
    } catch (e) {
        document.getElementById("outputText").innerText = "AI Error / terlalu banyak pengguna. Coba ulang.";
    }
};
