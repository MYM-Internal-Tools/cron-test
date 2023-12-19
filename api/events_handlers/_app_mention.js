import {postToChannel} from "../_utils"

export async function app_mention(req, res) {
  let event = req.body.event(async () => {
    try {
      let resp = await axios.get(`https://api.quotable.io/random`)
      const quote = resp.data.content
      const author = resp.data.author

      await postToChannel(
        event.channel,
        res,
        `Hi <@${event.user}>! :tada: \n  Quote of the day: "${quote}" by ${author} `
      )
    } catch (error) {
      console.log(erro)
    }
  })()
}
