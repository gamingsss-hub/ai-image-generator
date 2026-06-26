async function generateImage() {
    const prompt = document.getElementById("prompt").value;
    const image = document.getElementById("result");

    if (!prompt.trim()) {
        alert("Please enter a prompt!");
        return;
    }

    image.style.display = "none";

    try {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        if (!data.success) {
            alert(data.error || "Image generation failed.");
            return;
        }

        image.src = data.image;

        image.onload = () => {
            image.style.display = "block";
        };

    } catch (err) {
        console.error(err);
        alert("Something went wrong!");
    }
}
