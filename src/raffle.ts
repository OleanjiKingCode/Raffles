import { BigInt } from "@graphprotocol/graph-ts"
import { Bytes } from '@graphprotocol/graph-ts'
import {
  Raffle,
  OwnershipTransferred,
  RandomNumberReceived
} from "../generated/Raffle/Raffle"
import { RandomNumber } from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  
}

export function handleRandomNumberReceived(event: RandomNumberReceived): void {
  let entity = RandomNumber.load(event.params.id.toHexString());

  if (!entity) {
    entity = new RandomNumber(event.params.id.toHexString());
  }

 
  entity.Result = event.params.result;
  entity.RandomnessValue = event.params.value;
  entity.Date = event.block.timestamp
  entity.save()

}
