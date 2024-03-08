const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = process.env.port || 3000

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "969d2ae0-676b-4ea4-b7b0-d4e316fd696e" } }
    );

    console.log(r.data);
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(port, () => {
  console.log('app is listening');
});
