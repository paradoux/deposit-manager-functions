const ethers = require("ethers")

module.exports = function marshalVaultDetails(vault) {
  return {
    vaultId: ethers.BigNumber.from(vault.vaultId).toString(),
    propertyOwner: vault.propertyOwner,
    propertyRenter: vault.propertyRenter,
    rentalPeriodEnd: ethers.BigNumber.from(vault.rentalPeriodEnd).toString(),
    deposit: vault.deposit,
    deployedAddress: vault.deployedAddress,
    amountToReturn: vault.amountToReturn,
    isDepositStored: vault.isDepositStored,
    isAmountAccepted: vault.isAmountAccepted,
    isRenterChunkReturned: vault.isRenterChunkReturned,
    isOwnerChunkReturned: vault.isOwnerChunkReturned,
  }
}
