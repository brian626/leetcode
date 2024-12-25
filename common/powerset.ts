function getAllSubsets(array: any[]): any[][] {
    const subsets: any[][] = [[]];

    for (const el of array) {
        const last = subsets.length-1;
        for (let i = 0; i <= last; i++) {
            subsets.push( [...subsets[i], el] );
        }
    }

    return subsets;
}

function getAllSubarrays(array: any[]): any[][] {
    const subarrays: any[][] = [[]];

    for (let start = 0; start < array.length; start++) {
        for (let end = start; end < array.length; end++) {
            subarrays.push(array.slice(start, end + 1));
        }
    }

    return subarrays;
}
