// 468. Validate IP Address

// Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a
// valid IPv6 address or "Neither" if IP is not a correct IP of any type.

// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and
// xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are
// valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

// A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

// 1 <= xi.length <= 4
// xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f')
// and upper-case English letters ('A' to 'F').
// Leading zeros are allowed in xi.
// For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334"
// are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.



// Example 1:

// Input: IP = "172.16.254.1"
// Output: "IPv4"
// Explanation: This is a valid IPv4 address, return "IPv4".

// Example 2:

// Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
// Output: "IPv6"
// Explanation: This is a valid IPv6 address, return "IPv6".

// Example 3:

// Input: IP = "256.256.256.256"
// Output: "Neither"
// Explanation: This is neither a IPv4 address nor a IPv6 address.

// Example 4:

// Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
// Output: "Neither"

// Example 5:

// Input: IP = "1e1.4.5.6"
// Output: "Neither"


// Constraints:

// IP consists only of English letters, digits and the characters '.' and ':'.

function isValidIPv4Octet(o: string): boolean {
    if (o.length > 1 && o[0] == "0") { return false }

    let oNum = parseInt(o, 10)
    return oNum >= 0 && oNum <= 255
}

function parseIPv4(IP: string): boolean {
    const re = new RegExp("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", "g")
    const match = IP.match(re)

    if (match) {
        let [x1, x2, x3, x4] = match.toString().split(".")
        return isValidIPv4Octet(x1) && isValidIPv4Octet(x2) && isValidIPv4Octet(x3) && isValidIPv4Octet(x4)
    }

    return false
}

function isValidIPv6Part(p: string): boolean {
    return true
}

function parseIPv6(IP: string): boolean {
    const re = new RegExp("^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$", "g")
    const match = IP.toUpperCase().match(re)

    if (match) {
        let [x1, x2, x3, x4, x5,x6, x7, x8] = match.toString().split(":")
        return isValidIPv6Part(x1) && isValidIPv6Part(x2) && isValidIPv6Part(x3) && isValidIPv6Part(x4) &&
               isValidIPv6Part(x5) && isValidIPv6Part(x6) && isValidIPv6Part(x7) && isValidIPv6Part(x8)
    }

    return false
}

function validIPAddress(IP: string): string {
    let validIPv4 = parseIPv4(IP)
    let validIPv6 = parseIPv6(IP)

    if (validIPv4)      { return "IPv4"}
    else if (validIPv6) { return "IPv6" }
    else                { return "Neither"}
};

console.log(validIPAddress("172.16.254.1")) // Output: "IPv4"
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")) // Output: "IPv6"
console.log(validIPAddress("256.256.256.256")) // Output: "Neither"
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:")) // Output: "Neither"
console.log(validIPAddress("1e1.4.5.6")) // Output: "Neither"
console.log(validIPAddress("01.01.01.01")) // Output: "Neither"
console.log(validIPAddress("192.0.0.1")) // Output: "IPv4"
