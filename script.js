async function askGPT(question) {
  document.getElementById("output").innerText = "Loading...";

  const response = await fetch("http://localhost:3000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.answer;
}
