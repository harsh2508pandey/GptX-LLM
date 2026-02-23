import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = "PASTE_YOUR_API_KEY_HERE";

app.post("/ask", async (req, res) => {
  const userQuestion = req.body.question;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userQuestion }]
    })
  });

  const data = await response.json();
  res.json({ answer: data.choices[0].message.content });
});

app.listen(3000, () => {
  console.log("FreshGPT running on port 3000");
});
