import { url } from 'inspector';

export class SplitwiseKeys {
    private splitwiseConsumerKey = 'splitwise-consumer-key-test';
    private splitwiseConsumerSecret = 'splitwise-consumer-secret-test';
    private splitwiseTokenUrl = 'splitwise-token-url-test';
    private splitwiseAuthorizeUrl = 'splitwise-authorize-url-test';

    get consumerKey() {
        return this.splitwiseConsumerKey;
    }

    get consumerSecret() {
        return this.splitwiseConsumerSecret;
    }

    get tokenUrl() {
        return this.splitwiseTokenUrl;
    }

    get authorizeUrl() {
        return this.splitwiseAuthorizeUrl;
    }
}