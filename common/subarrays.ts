
function countCompleteSubarrays(nums: number[]): number {
    const distinctElementCount = new Set<number>(nums).size;

    let count = 0;

    for (let start = 0; start <= nums.length - distinctElementCount; start++) {
        for (let end = start + distinctElementCount - 1; end < nums.length; end++) {
            let subarray = nums.slice(start, end + 1);

            const subset: Set<number> = new Set<number>(subarray);
            if (subset.size === distinctElementCount) {
                // console.log(subarray);
                console.log(`adding ${nums.length - end} for [${subarray}] and followers`);
                count += (nums.length - end);
                break;
            }

        }
    }

    return count;
};


function countCompleteSubarrays(nums: number[]): number {
    const distinctElementCount = new Set<number>(nums).size;

    const subsets: Set<string> = new Set<string>();

    for (let start = 0; start < nums.length; start++) {
        let subarray = nums.slice(start); // , start + distinctElementCount);
        console.log(`[${subarray}]`);

        const subset: Set<number> = new Set<number>(subarray);
        console.log(`comparing ${subset.size} with ${distinctElementCount}`);
        if (subset.size === distinctElementCount) {
            console.log(subarray);
            for (let x = 0; x <= start; x++) {
                for (let y = start + distinctElementCount; y < nums.length; y++) {
                    console.log(`  adding [${[x,y]}]`);
                    subsets.add([x, y].join(','));
                }
            }
        }
    }

    return subsets.size;
};
