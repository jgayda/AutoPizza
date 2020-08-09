import { keys } from './../private/splitwise-keys';
import { testKeys } from './../private/testing-keys';
import { Injectable } from '@angular/core';
import { Splitwise } from 'splitwise';

@Injectable({
  providedIn: 'root'
})
export class SplitwiseService {

  testing = false;

  private splitwise: Splitwise;
  private consumerKey;
  private consumerSecret;

  constructor() {
    if (!this.testing) {
      this.consumerKey = keys.splitwiseConsumerKey;
      this.consumerSecret = keys.splitwiseConsumerSecret;
    } else {
      this.consumerKey = testKeys.splitwiseConsumerKey;
      this.consumerSecret = testKeys.splitwiseConsumerSecret;
    }
  }
}
