require("dotenv").config()
const ethers = require("ethers")
const faunadb = require("faunadb")
const q = faunadb.query
const factoryContractAbi = require("../../../smart-contract/VaultFactory.json")

exports.handler = async (event, context) => {
  // var customHttpProvider = new ethers.providers.JsonRpcProvider(
  //   process.env.POLYGON_MUMBAI_RPC_URL
  // )
  // const signer = new ethers.Wallet(
  //   process.env.ADMIN_WALLET_PRIVATE_KEY,
  //   customHttpProvider
  // )
  // // Contract
  // const factoryContract = new ethers.Contract(
  //   process.env.FACTORY_ADDRESS,
  //   factoryContractAbi.abi,
  //   signer
  // )
  // Retrieve vault from blockchain
  // Verifies sending address = signing address = vault owner
  // Verifies correct Renter
  // Verifies proposed amount not bigger than deposit
  // If all good store new proposed amount
  // Returns response
  // const contract = require("../artifacts/contracts/generator.sol/NFTGenerator.json");
  // const alchemyProvider = new ethers.providers.AlchemyProvider(
  //   (network = "rinkeby"),
  //   API_KEY
  // );
  // // Signer
  // const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
  // // Contract
  // const nftGeneratorContract = new ethers.Contract(
  //   CONTRACT_ADDRESS,
  //   contract.abi,
  //   signer
  // );
  // const provider = new ethers.providers.Web3Provider(
  //   ethers.getDefaultProvider("http://127.0.0.1:8545/")
  // )
  // const signer = provider.getSigner()
  // const smartContract = new ethers.Contract(
  //   CONTRACT_ADDRESS,
  //   depositManagerContract.abi,
  //   signer
  // )
  // console.log("Going to pop wallet now to pay gas...");
  // let nftTxn = await connectedContract.makeAnNFT(tokenURI);
  // console.log("Mining...please wait.");
  // await nftTxn.wait();
  // console.log(
  //   `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
  // );
  // const client = new faunadb.Client({
  //   secret: process.env.FAUNADB_SERVER_SECRET
  // })
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
