import {
  Donation as DonationEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PurchaseContent as PurchaseContentEvent,
  PurchaseMembership as PurchaseMembershipEvent
} from "../generated/Nodus/Nodus"
import {
  Donation,
  OwnershipTransferred,
  PurchaseContent,
  PurchaseMembership
} from "../generated/schema"

export function handleDonation(event: DonationEvent): void {
  let entity = new Donation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contentId = event.params.contentId
  entity.donor = event.params.donor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchaseContent(event: PurchaseContentEvent): void {
  let entity = new PurchaseContent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contentId = event.params.contentId
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchaseMembership(event: PurchaseMembershipEvent): void {
  let entity = new PurchaseMembership(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.membershipId = event.params.membershipId
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
