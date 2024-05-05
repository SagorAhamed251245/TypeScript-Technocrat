"use strict";
{
    // Constraints
    const addCourseToStudents = (student) => {
        const course = "Next level web development";
        return Object.assign({ course }, student);
    };
    const student1 = addCourseToStudents({
        name: "student 1",
        id: 1111,
        email: "sss@",
        dev: "mss",
    });
    const student2 = addCourseToStudents({
        name: "student 1",
        email: "sss@",
        id: 332,
        ssa: "mss",
    });
    //
}
