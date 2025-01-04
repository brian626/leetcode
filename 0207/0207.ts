class Course {
    name: number;
    prerequisites: number[];
    taken: boolean;

    constructor(name: number) {
        this.name = name;
        this.prerequisites = [];
        this.taken = false;
    }
}


function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if (prerequisites.length === 0) { return true; }

    const courses: Course[] = [];
    for (let i = 0; i < numCourses; i++) {
        courses[i] = new Course(i);
    }

    for (const p of prerequisites) {
        const [courseName1, courseName2] = p;
        const course1 = courses[courseName1];
        course1.prerequisites.push(courseName2);
        courses[courseName1] = course1;
    }

    const baseCourses: Course[] = [];
    for (const c of courses) {
        if (c.prerequisites.length === 0) {
            baseCourses.push(c);
        }
    }

    if (baseCourses.length === 0) {
        return false;
    }

    while (baseCourses.length > 0) {
        const bc = baseCourses.shift();
        let allPrerequisitesTaken = true;
        for (const p of bc.prerequisites) {
            if (!courses[p].taken) {
                allPrerequisitesTaken = false;
                break;
            }
        }

        if (!allPrerequisitesTaken) {
            continue;
        }

        bc.taken = true;
        console.log(`taking course ${bc.name}`);

        for (const c of courses) {
            if (!c.taken && c.prerequisites.includes(bc.name)) {
                baseCourses.push(c);
            }
        }
    }

    console.log(courses);

    return courses.filter(x => x.taken === false).length === 0;
};

const numCourses = 4;
const prerequisites = [[1,0],[2,0],[3,1],[3,2]]

console.log(canFinish(numCourses, prerequisites));
