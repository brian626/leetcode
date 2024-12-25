// 1366. Rank Teams by Votes

// In a special ranking system, each voter gives a rank from highest to lowest to all
// teams participated in the competition.

// The ordering of teams is decided by who received the most position-one votes. If two
// or more teams tie in the first position, we consider the second position to resolve
// the conflict, if they tie again, we continue this process until the ties are resolved.
// If two or more teams are still tied after considering all positions, we rank them
// alphabetically based on their team letter.

// Given an array of strings votes which is the votes of all voters in the ranking systems.
// Sort all teams according to the ranking system described above.

// Return a string of all teams sorted by the ranking system.


// Example 1:

// Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
// Output: "ACB"
// Explanation: Team A was ranked first place by 5 voters. No other team was voted as first place so team A is the first team.
// Team B was ranked second by 2 voters and was ranked third by 3 voters.
// Team C was ranked second by 3 voters and was ranked third by 2 voters.
// As most of the voters ranked C second, team C is the second team and team B is the third.

// Example 2:

// Input: votes = ["WXYZ","XYZW"]
// Output: "XWYZ"
// Explanation: X is the winner due to tie-breaking rule. X has same votes as W for the first position but
// X has one vote as second position while W doesn't have any votes as second position.

// Example 3:

// Input: votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
// Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"
// Explanation: Only one voter so his votes are used for the ranking.

// Example 4:

// Input: votes = ["BCA","CAB","CBA","ABC","ACB","BAC"]
// Output: "ABC"
// Explanation:
// Team A was ranked first by 2 voters, second by 2 voters and third by 2 voters.
// Team B was ranked first by 2 voters, second by 2 voters and third by 2 voters.
// Team C was ranked first by 2 voters, second by 2 voters and third by 2 voters.
// There is a tie and we rank teams ascending by their IDs.

// Example 5:

// Input: votes = ["M","M","M","M"]
// Output: "M"
// Explanation: Only team M in the competition so it has the first rank.


// Constraints:

// 1 <= votes.length <= 1000
// 1 <= votes[i].length <= 26
// votes[i].length == votes[j].length for 0 <= i, j < votes.length.
// votes[i][j] is an English upper-case letter.
// All characters of votes[i] are unique.
// All the characters that occur in votes[0] also occur in votes[j] where 1 <= j < votes.length.

function getNthPlaceWinners(voteMap: Map<string, number[]>, place: number): string[] {
    log(`getNthPlaceWinners called for place ${place}`)
    // To find out who won nth place, look in the nth value for each team and find the
    // largest number of votes. If there's a tie, use the (n+1)th place, etc.
    let nthPlaceTeams: [string, number[]][] = Array.from(voteMap.entries()).filter(x => x[1][place] > 0)
    let winners: string[] = []

    // If there's only one nth-place vote getter, they're the winner.
    if (nthPlaceTeams.length == 1) {
        log(`    a`)
        winners.push(nthPlaceTeams[0][0])
    }

    // If there were no nth-place vote getters, move to the next place.
    else if (nthPlaceTeams.length == 0) {
        log(`    aa`)
        winners = Array.from(voteMap.entries()).map(x => x[0])
    }

    // Otherwise, see if there's a team that got more votes than the rest.
    else {
        log(`    b ${nthPlaceTeams.length}: [${nthPlaceTeams}]`)
        let teamsWithMostVotes: string[] = []
        let mostNthPlaceVotes = 0
        nthPlaceTeams.forEach(team => {
            log(`      considering team ${team}`)
            if (team[1][place] > mostNthPlaceVotes) {
                log(`      b1`)
                mostNthPlaceVotes = team[1][place]
                teamsWithMostVotes = [team[0]]
            }
            else if (team[1][place] == mostNthPlaceVotes) {
                log(`      b2`)
                teamsWithMostVotes.push(team[0])
            }
        })

        // If there was a top vote-getter, they're the winner.
        if (teamsWithMostVotes.length == 1) {
            log(`    c`)
            winners.push(teamsWithMostVotes[0])
        }

        // Otherwise, return all the tied teams
        else {
            log(`    d: ${teamsWithMostVotes.length} [${teamsWithMostVotes}]`)
            winners = winners.concat(teamsWithMostVotes)
        }

    }

    log(`-----> returning [${winners}]`)
    return winners
}


function rankTeams(votes: string[]): string {
    if (votes.length == 1) { return votes[0] }

    let voteMap: Map<string, number[]> = new Map<string, number[]>()
    let numVotes: number = votes[0].length

    votes.forEach(vote => {
        // vote is a string such as "ABC", means that A received a first-place vote,
        // B recieved a second-place vote, and C received a third-place vote.
        for (let i = 0; i < vote.length; i++) {
            let voteArray: number[] = voteMap.get(vote[i])
            if (voteArray === undefined) {
                voteArray = Array.from(Array(numVotes + 1), () => 0)
            }
            voteArray[i+1] += 1
            voteMap.set(vote[i], voteArray)
        }
    })

    // voteMap will now contain a map of strings to number arrays. The entry for "A",
    // for example, will contain a list of all the votes that team received, with the nth
    // member of the array containing the number of nth-place votes.

    // console.log(voteMap)

    let place = 1
    let output: string = ""

    while (true) {
        const nthPlaceWinners: string[] = getNthPlaceWinners(voteMap, place)
        log(`top of loop: nthPlaceWinners = [${nthPlaceWinners}]`)

        // If there was a single nth-place winner, add it to the output string and move on.
        if (nthPlaceWinners.length == 1) {
            log(`*****adding ${nthPlaceWinners[0]} to output 1`)
            output += nthPlaceWinners[0]
            voteMap.delete(nthPlaceWinners[0])
        }

        // If there were no nth-place winners, advance to the next place.
        else if (nthPlaceWinners.length == 0) {
            log(`  no nth place winners, moving to next place`)
            place++
        }

        // Otherwise, move to a tiebreaker.
        else {
            log(`  tiebreaker...`)
            let tiebreakVoteMap: Map<string, number[]> = new Map<string, number[]>()
            let tiebreakPlace = place + 1
            nthPlaceWinners.forEach(winner => {
                tiebreakVoteMap.set(winner, voteMap.get(winner))
            })

            // console.log(tiebreakVoteMap)
            while (true) {
                const tiebreakWinners: string[] = getNthPlaceWinners(tiebreakVoteMap, tiebreakPlace)
                log(`  tiebreak returned ${tiebreakWinners.length} winners for place ${tiebreakPlace}`)
                if (tiebreakWinners.length == 1) {
                    log(`*****adding ${tiebreakWinners[0]} to output 2`)
                    output += tiebreakWinners[0]
                    voteMap.delete(tiebreakWinners[0])
                    break
                }
                else {
                    tiebreakVoteMap.clear()
                    tiebreakWinners.forEach(winner => {
                        tiebreakVoteMap.set(winner, voteMap.get(winner))
                    })
                    tiebreakPlace++
                }

                if (tiebreakPlace == numVotes) {
                    tiebreakWinners.sort()
                    log(`*****adding ${tiebreakWinners[0]} to output 3`)
                    output += tiebreakWinners[0]
                    voteMap.delete(tiebreakWinners[0])
                    break
                }
            }
        }

        if (place == numVotes) {
            break
        }
    }

    return output
};

let DEBUG_1366: boolean = false
function log(s: string): void {
    if (DEBUG_1366) {
        console.log(s)
    }
}

console.log(rankTeams(["ABC","ACB","ABC","ACB","ACB"]))
// Output: "ACB"

console.log(rankTeams(["WXYZ","XYZW"]))
// Output: "XWYZ"

console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]))
// Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"

console.log(rankTeams(["BCA","CAB","CBA","ABC","ACB","BAC"]))
// Output: "ABC"

console.log(rankTeams([
    "FVSHJIEMNGYPTQOURLWCZKAX",
    "AITFQORCEHPVJMXGKSLNZWUY",
    "OTERVXFZUMHNIYSCQAWGPKJL",
    "VMSERIJYLZNWCPQTOKFUHAXG",
    "VNHOZWKQCEFYPSGLAMXJIUTR",
    "ANPHQIJMXCWOSKTYGULFVERZ",
    "RFYUXJEWCKQOMGATHZVILNSP",
    "SCPYUMQJTVEXKRNLIOWGHAFZ",
    "VIKTSJCEYQGLOMPZWAHFXURN",
    "SVJICLXKHQZTFWNPYRGMEUAO",
    "JRCTHYKIGSXPOZLUQAVNEWFM",
    "NGMSWJITREHFZVQCUKXYAPOL",
    "WUXJOQKGNSYLHEZAFIPMRCVT",
    "PKYQIOLXFCRGHZNAMJVUTWES",
    "FERSGNMJVZXWAYLIKCPUQHTO",
    "HPLRIUQMTSGYJVAXWNOCZEKF",
    "JUVWPTEGCOFYSKXNRMHQALIZ",
    "MWPIAZCNSLEYRTHFKQXUOVGJ",
    "EZXLUNFVCMORSIWKTYHJAQPG",
    "HRQNLTKJFIEGMCSXAZPYOVUW",
    "LOHXVYGWRIJMCPSQENUAKTZF",
    "XKUTWPRGHOAQFLVYMJSNEIZC",
    "WTCRQMVKPHOSLGAXZUEFYNJI"]))
// Output: "VWFHSJARNPEMOXLTUKICZGYQ"
