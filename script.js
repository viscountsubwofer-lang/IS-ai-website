const API_URL = "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-0.5B";
const API_KEY = "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";  // 

document.getElementById("sendBtn").onclick = async () => {
    const text = document.getElementById("inputText").value;

    if (!text.trim()) {
        document.getElementById("outputText").innerText = "Masukkan teks dulu!";
        return;
    }

    document.getElementById("outputText").innerText = "AI sedang memproses...";

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: text })
    });

    const result = await response.json();

    try {
        const aiText = result[0].generated_text;
        document.getElementById("outputText").innerText = aiText;
    } catch (e) {
        document.getElementById("outputText").innerText = "Terjadi error atau limit penuh.";
    }
};
