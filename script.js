async function generateImage() {

    const prompt = document.getElementById("prompt").value;
    const image = document.getElementById("result");

    if (!prompt) {
        alert("Please enter a prompt");
        return;
    }

    image.style.display = "none";

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${Date.now()}`;

    image.src = url;

    image.onload = () => {
        image.style.display = "block";
    };

}
