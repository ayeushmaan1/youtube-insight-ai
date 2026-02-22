document.getElementById("askBtn").addEventListener("click", async () => {

    const question = document.getElementById("question").value;
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");

    resultDiv.innerText = "";
    loadingDiv.classList.remove("hidden");

    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let url = new URL(tab.url);
    let video_id = url.searchParams.get("v");

    try {
        let response = await fetch("http://127.0.0.1:8000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                video_id: video_id,
                question: question
            })
        });

        let data = await response.json();
        resultDiv.innerText = data.answer;

    } catch (error) {
        resultDiv.innerText = "Error: Could not connect to backend.";
    }

    loadingDiv.classList.add("hidden");
});