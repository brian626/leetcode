// 71. Simplify Path

// Given a string path, which is an absolute path (starting with a slash '/') to a file
// or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double
// period '..' refers to the directory up a level, and any multiple consecutive slashes
// (i.e. '//') are treated as a single slash '/'. For this problem, any other format of
// periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:

// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target
//   file or directory (i.e., no period '.' or double period '..')

// Return the simplified canonical path.


// Example 1:

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

// Example 2:

// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

// Example 3:

// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

// Example 4:

// Input: path = "/a/./b/../../c/"
// Output: "/c"


// Constraints:

// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.

function simplifyPath(path: string): string {
    let tempPath: string = path.replace(/\/+/g, "/").replace(/\/\.$/, "")
    while (tempPath != path) {
        path = tempPath
        tempPath = path.replace(/\/+/g, "/").replace(/\/\.$/, "")
    }

    tempPath = path.replace(/\/\.\//g, "/")
    while (tempPath != path) {
        path = tempPath
        tempPath = path.replace(/\/\.\//g, "/")
    }

    let pathParts: string[] = path.split("/")
    let dotDotIndex: number = pathParts.indexOf("..")
    while (dotDotIndex != -1) {
        if (dotDotIndex == 0) {
            pathParts = pathParts.slice(1)
        }
        else {
            pathParts.splice(dotDotIndex - 1, 2)
        }

        dotDotIndex = pathParts.indexOf("..")
    }

    let simplifiedPath: string = pathParts.join("/")
    if (simplifiedPath[simplifiedPath.length - 1] == "/") { simplifiedPath = simplifiedPath.slice(0, simplifiedPath.length - 1) }
    if (simplifiedPath[0] != "/") { simplifiedPath = "/" + simplifiedPath }

    return simplifiedPath
};

// console.log(simplifyPath("/home/"))
// // Output: "/home"

// console.log(simplifyPath("/../"))
// // Output: "/"

// console.log(simplifyPath("/home//foo/"))
// // Output: "/home/foo"

// console.log(simplifyPath("/a/./b/../../c/"))
// // Output: "/c"

// console.log(simplifyPath("/home/.../foo/"))
// // Output: "/home/.../foo"

// console.log(simplifyPath("/a/../../b/../c//.//"))
// // "/c"

// console.log(simplifyPath("/a//b////c/d//././/.."))
// // "/a/b/c/d"

// console.log(simplifyPath("/a//b////c/d//././/../"))
// // "/a/b/c/d"

// console.log(simplifyPath("/."))
// "/"

// console.log(simplifyPath("/.././GVzvE/./xBjU///../..///././//////T/../../.././zu/q/e"))
// "/zu/q/e"

console.log(simplifyPath("/////PO/../../FZ/ZQw/Ee/yAfy/zppA/OYajA/ZpX/./."))
// "/FZ/ZQw/Ee/yAfy/zppA/OYajA/ZpX"
