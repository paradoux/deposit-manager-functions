// require("dotenv").config()
// const ethers = require("ethers")
// const implementationContractAbi = require("../../smart-contract/VaultImplementation.json")
// const marshalVaultDetails = require("./utils/marshal")

exports.handler = async (event, context) => {
  // const vaultAddress = event.queryStringParameters.vaultAddress
  // var customHttpProvider = new ethers.providers.JsonRpcProvider(
  //   process.env.POLYGON_MUMBAI_RPC_URL
  // )
  // const signer = new ethers.Wallet(
  //   process.env.CONTRACT_ADMINISTRATOR_WALLET_PRIVATE_KEY,
  //   customHttpProvider
  // )
  // // Contract
  // const implementationContract = new ethers.Contract(
  //   vaultAddress,
  //   implementationContractAbi.abi,
  //   signer
  // )
  // try {
  //   const response = await implementationContract.getVaultDetails()
  //   console.log({ response })
  //   const parsedVault = marshalVaultDetails(response)
  //   console.log({ parsedVault })
  //   return {
  //     statusCode: 200,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers":
  //         "Origin, X-Requested-With, Content-Type, Accept",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(parsedVault)
  //   }
  // } catch (error) {
  //   console.log(error.message)
  //   return {
  //     statusCode: 500,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers":
  //         "Origin, X-Requested-With, Content-Type, Accept",
  //       "Content-Type": "application/json"
  //     },
  //     message: "Error listing vaults by owners"
  //   }
  // }

  return {
    statusCode: 200,
    body: "Hello"
  }
}
