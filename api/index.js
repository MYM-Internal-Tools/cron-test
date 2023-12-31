const axios = require("axios")
const schedule = require("node-schedule")
const {postToChannel} = require("./_utils")
const techDiscussions = [
  {
    id: 1,
    discussionName:
      "Choosing the Right Tech Stack for Your Web Development Project: Considerations and Best Practices.",
  },
  {
    id: 2,
    discussionName:
      "Full Stack vs. Microservices: Pros and Cons in Modern Software Architecture.",
  },
  {
    id: 3,
    discussionName:
      "Frontend Frameworks Showdown: React vs. Vue vs. Angular - Which One Suits Your Project?",
  },
  {
    id: 4,
    discussionName:
      "The Evolution of Backend Technologies: From Monolithic to Serverless Architectures.",
  },
  {
    id: 5,
    discussionName:
      "Database Dilemmas: Comparing SQL and NoSQL in Different Tech Stacks.",
  },
  {
    id: 6,
    discussionName:
      "Containerization with Docker and Kubernetes: Streamlining Deployment in Tech Stacks.",
  },
  {
    id: 7,
    discussionName:
      "Serverless Computing: How Does It Fit Into Your Tech Stack Strategy?",
  },
  {
    id: 8,
    discussionName:
      "The Battle of the Programming Languages: Python, JavaScript, Java, and More in Tech Stacks.",
  },
  {
    id: 9,
    discussionName:
      "DevOps in Action: Integrating Continuous Integration/Continuous Deployment (CI/CD) Pipelines in Your Tech Stack.",
  },
  {
    id: 10,
    discussionName:
      "Choosing the Right Cloud Service Provider for Your Tech Stack: AWS, Azure, or Google Cloud?",
  },
  {
    id: 11,
    discussionName:
      "Micro Frontends: Breaking Down Monolithic Frontend Architectures for Scalability.",
  },
  {
    id: 12,
    discussionName:
      "GraphQL vs. REST: Optimizing API Design in Your Tech Stack.",
  },
  {
    id: 13,
    discussionName:
      "Mobile App Development: Native vs. Cross-Platform in Your Tech Stack.",
  },
  {
    id: 14,
    discussionName:
      "The Role of Progressive Web Apps (PWAs) in Modern Tech Stacks.",
  },
  {
    id: 15,
    discussionName:
      "The Importance of Monitoring and Logging in Maintaining a Healthy Tech Stack.",
  },
]

function getRandomDiscussion() {
  const randomIndex = Math.floor(Math.random() * techDiscussions.length)
  return techDiscussions[randomIndex]
}

// Example: Displaying a random discussion
const randomDiscussion = getRandomDiscussion()
console.log("Random Tech Discussion:")
console.log(randomDiscussion.discussionName)

const job = schedule.scheduleJob(
  {hour: 13, minute: 1, dayOfWeek: 2, tz: "UTC+01:00"},
  function () {
    console.log("Time for techtuesday")
    ;(async (req, res) => {
      try {
        await postToChannel(
          "#random",
          res,
          `Hey everyone <!channel>, How is it going. :blush:  Its Another TechTuesday :technologist: :tada: \n\nLet give our input to the discussion below and have a nice engagement.\n\n*${randomDiscussion.discussionName}* \n\nLet's go :rocket: :rocket:  `
        )
      } catch (error) {
        console.log("schedule error: " + error)
      }
    })()
  }
)

const jobQuotes = schedule.scheduleJob(
  {hour: 13, minute: 0, tz: "UTC+01:00"},
  function () {
    ;(async (req, res) => {
      try {
        let resp = await axios.get(`https://api.quotable.io/random`)
        const quote = resp.data.content
        const author = resp.data.author

        await postToChannel(
          "#random",
          res,
          `Hey everyone <!channel>, How is it going. :blush:  What are your agenda for today? :technologist:  \n\n*Quote of the day* .\n\n>*${quote}* by _${author}_ \n\n*Let's get to work*  🤸 🤸 🤓. `
        )
      } catch (error) {
        console.log("schedule error: " + error)
      }
    })()
  }
)
const jobQ = schedule.scheduleJob(
  {hour: 11, minute: 6, tz: "UTC+01:00"},
  function () {
    ;(async (req, res) => {
      try {
        let resp = await axios.get(`https://api.quotable.io/random`)
        const quote = resp.data.content
        const author = resp.data.author

        await postToChannel(
          "#random",
          res,
          `Hey everyone <!channel>, How is it going. :blush:  What are your agenda for today? :technologist:  \n\n*Quote of the day* .\n\n>*${quote}* by _${author}_ \n\n*Let's get to work*  🤸 🤸 🤓. `
        )
      } catch (error) {
        console.log("schedule error: " + error)
      }
    })()
  }
)
