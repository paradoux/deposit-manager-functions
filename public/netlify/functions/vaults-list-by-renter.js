require("dotenv").config()
const ethers = require("ethers")
const factoryContractAbi = require("../../../smart-contract/VaultFactory.json")
const implementationContractAbi = require("../../../smart-contract/VaultImplementation.json")
const marshalVaultDetails = require("./utils/marshal")

exports.handler = async (event, context) => {
  const vaultRenter = event.queryStringParameters.renter

  var customHttpProvider = new ethers.providers.JsonRpcProvider(
    process.env.POLYGON_MUMBAI_RPC_URL
  )

  const signer = new ethers.Wallet(
    process.env.CONTRACT_ADMINISTRATOR_WALLET_PRIVATE_KEY,
    customHttpProvider
  )

  // Contract
  const factoryContract = new ethers.Contract(
    process.env.FACTORY_ADDRESS,
    factoryContractAbi.abi,
    signer
  )
  try {
    const response = await factoryContract.getDeployedVaults()

    const filteredVaults = response.filter(
      (vault) => vault.renter === vaultRenter
    )

    const detailedVaults = []

    filteredVaults.forEach((vault) => {
      const implementationContract = new ethers.Contract(
        vault.deployedAddress,
        implementationContractAbi.abi,
        signer
      )
      detailedVaults.push(implementationContract.getVaultDetails())
    })

    const resolvedDetailedVaults = await Promise.all(detailedVaults)

    const parsedVaults = resolvedDetailedVaults.map((vault) =>
      marshalVaultDetails(vault)
    )

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(parsedVaults)
    }
  } catch (error) {
    console.log(error.message)
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
      },
      message: "Error listing vaults by owners"
    }
  }
}
