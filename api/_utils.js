import fetch from "node-fetch"
import {token} from "./_constants"

export function tokenizeString(string) {
  const array = string.split(" ").filter((element) => {
    return element !== ""
  })
  console.log("Tokenized version:", array)
  return array
}

export async function postToChannel(channel, res, payload) {
  console.log("channel:", channel)

  const message = {
    channel: channel,
    text: payload,
  }

  try {
    const url = "https://slack.com/api/chat.postMessage"
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(message),
    })
    const data = await response.json()

    console.log("data from fetch:", data)
    res.json({ok: true})
  } catch (err) {
    console.log("fetch Error:", err)
    res.send({
      response_type: "ephemeral",
      text: `${err}`,
    })
  }
}
