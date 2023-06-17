import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Donation } from "../generated/schema"
import { Donation as DonationEvent } from "../generated/Nodus/Nodus"
import { handleDonation } from "../src/nodus"
import { createDonationEvent } from "./nodus-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let contentId = "Example string value"
    let donor = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let newDonationEvent = createDonationEvent(contentId, donor, amount)
    handleDonation(newDonationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Donation created and stored", () => {
    assert.entityCount("Donation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Donation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contentId",
      "Example string value"
    )
    assert.fieldEquals(
      "Donation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "donor",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Donation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
