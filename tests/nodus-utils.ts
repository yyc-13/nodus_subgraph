import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Donation,
  OwnershipTransferred,
  PurchaseContent,
  PurchaseMembership
} from "../generated/Nodus/Nodus"

export function createDonationEvent(
  contentId: string,
  donor: Address,
  amount: BigInt
): Donation {
  let donationEvent = changetype<Donation>(newMockEvent())

  donationEvent.parameters = new Array()

  donationEvent.parameters.push(
    new ethereum.EventParam("contentId", ethereum.Value.fromString(contentId))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPurchaseContentEvent(
  contentId: string,
  buyer: Address
): PurchaseContent {
  let purchaseContentEvent = changetype<PurchaseContent>(newMockEvent())

  purchaseContentEvent.parameters = new Array()

  purchaseContentEvent.parameters.push(
    new ethereum.EventParam("contentId", ethereum.Value.fromString(contentId))
  )
  purchaseContentEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return purchaseContentEvent
}

export function createPurchaseMembershipEvent(
  membershipId: string,
  buyer: Address
): PurchaseMembership {
  let purchaseMembershipEvent = changetype<PurchaseMembership>(newMockEvent())

  purchaseMembershipEvent.parameters = new Array()

  purchaseMembershipEvent.parameters.push(
    new ethereum.EventParam(
      "membershipId",
      ethereum.Value.fromString(membershipId)
    )
  )
  purchaseMembershipEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return purchaseMembershipEvent
}
