export async function app_home_opened(req, res) {
  let event = req.body.event(async () => {
    try {
      await postToChannel(
        event.channel,
        res,
        `Hello <@${event.user}>, How is the day going :slightly_smiling_face: \n I provide daily quote, you can just type something that start with "quote" to get quote of the day or mention me in your channel`
      )
    } catch (error) {
      console.log(erro)
    }
  })()
}
