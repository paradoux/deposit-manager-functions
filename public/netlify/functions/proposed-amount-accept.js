const faunadb = require("faunadb")
const q = faunadb.query

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })
  console.log({ event })
  // const data = JSON.parse(event.body)
  // console.log({ data })

  // const signerAddr = await ethers.utils.verifyMessage(
  //   data.message,
  //   data.signedMessage
  // )

  // console.log({ signerAddr })
  // console.log(data.address)

  // if (signerAddr === data.address) {
  //   console.log("Valid signature")
  // } else {
  //   console.log("Invalid signature")
  // }

  /* construct the fauna query */
  // return client
  //   .query(q.Create(q.Ref("classes/todos"), todoItem))
  //   .then((response) => {
  //     console.log("success", response)
  //     /* Success! return the response with statusCode 200 */
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(response)
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("error", error)
  //     /* Error! return the error with statusCode 400 */
  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify(error)
  //     }
  //   })
}
