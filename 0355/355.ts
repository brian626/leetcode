// 355. Design Twitter

// Design a simplified version of Twitter where users can post tweets, follow/unfollow
// another user, and is able to see the 10 most recent tweets in the user's news feed.

// Implement the Twitter class:

// Twitter() Initializes your twitter object.
// void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the
//   user userId. Each call to this function will be made with a unique tweetId.
// List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the
//   user's news feed. Each item in the news feed must be posted by users who the user followed
//   or by the user themself. Tweets must be ordered from most recent to least recent.
// void follow(int followerId, int followeeId) The user with ID followerId started
//   following the user with ID followeeId.
// void unfollow(int followerId, int followeeId) The user with ID followerId started
//   unfollowing the user with ID followeeId.


// Example 1:

// Input
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// Explanation
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.


// Constraints:

// 1 <= userId, followerId, followeeId <= 500
// 0 <= tweetId <= 104
// All the tweets have unique IDs.
// At most 3 * 104 calls will be made to postTweet, getNewsFeed, follow, and unfollow.

class Tweet {
    constructor(userId: number, tweetId: number) {
        this.tweetId = tweetId;
        this.userId = userId;
    }

    tweetId: number;
    userId: number;
}

class Twitter {
    constructor() {
        this.tweets = [];
        this.followMap = new Map<number, number[]>();
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.unshift(new Tweet(userId, tweetId));
    }

    getNewsFeed(userId: number): number[] {
        let feed: number[] = [];
        this.tweets.forEach(tweet => {
            if (tweet.userId === userId || (this.followMap.has(tweet.userId) && this.followMap.get(tweet.userId).indexOf(userId) != -1)) {
                // console.log(`adding tweet ${tweet.tweetId} to feed because ${tweet.userId} === ${userId} or ${this.followMap.get(tweet.userId)} includes ${userId}`);
                feed.push(tweet.tweetId);
            }
        })
        feed.length = Math.min(feed.length, 10);
        return feed;
    }

    follow(followerId: number, followeeId: number): void {
        if (this.followMap.has(followeeId)) {
            const followers: Set<number> = new Set(this.followMap.get(followeeId));
            followers.add(followerId);
            this.followMap.set(followeeId, Array.from(followers));
        }
        else {
            this.followMap.set(followeeId, [followerId]);
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followMap.has(followeeId)) {
            const followers: number[] = this.followMap.get(followeeId).filter(x => x !== followerId);
            this.followMap.set(followeeId, followers);
        }
    }

    tweets: Tweet[]
    followMap: Map<number, number[]>
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

let twitter: Twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// console.log(twitter.getNewsFeed(1));  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// console.log(twitter.getNewsFeed(1));  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// console.log(twitter.getNewsFeed(1));  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

// twitter.follow(1, 2);
// twitter.follow(1, 3);
// twitter.postTweet(3, 7);
// twitter.postTweet(4, 8);
// console.log(twitter.getNewsFeed(1));
// twitter.unfollow(1, 2);
// console.log(twitter.getNewsFeed(1));
// twitter.unfollow(1, 3);
// console.log(twitter.getNewsFeed(1));
// twitter.follow(2, 4);
// console.log(twitter.getNewsFeed(2));

twitter.postTweet(1,5)
twitter.postTweet(1,3)
twitter.postTweet(1,101)
twitter.postTweet(1,13)
twitter.postTweet(1,10)
twitter.postTweet(1,2)
twitter.postTweet(1,94)
twitter.postTweet(1,505)
twitter.postTweet(1,333)
twitter.postTweet(1,22)
twitter.postTweet(1,11)
console.log(twitter.getNewsFeed(1))
