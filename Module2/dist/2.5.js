"use strict";
{
    //
    // function  genetic
    const createArray = (prams) => {
        return [prams];
    };
    const res = createArray("bangladesh");
    const createArrayWithGeneric = (prams) => {
        return [prams];
    };
    const resGeneric = createArrayWithGeneric(true);
    const resGeneric2 = createArrayWithGeneric("Bangladesh");
    const resGeneric3 = createArrayWithGeneric({ age: 100, id: "qq1" });
    const createArrayWithGenericTuple = (prams1, prams2) => {
        return [prams1, prams2];
    };
    const resGenericTuple = createArrayWithGenericTuple("Bangladesh", 1);
    const resGenericTuple2 = createArrayWithGenericTuple("Bangladesh", { id: "sagor", age: 10 });
    const addCourseToStudents = (student) => {
        const course = "Next level web development";
        return Object.assign({ course }, student);
    };
    const student1 = addCourseToStudents({
        name: "student 1",
        id: "1111",
        email: "sss@",
        dev: "mss",
    });
    const student2 = addCourseToStudents({
        name: "student 1",
        email: "sss@",
        id: "332",
        ssa: "mss",
    });
    //
}
