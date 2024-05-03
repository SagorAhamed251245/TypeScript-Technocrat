{
  //
  // function  genetic

  const createArray = (prams: string): string[] => {
    return [prams];
  };
  const res = createArray("bangladesh");
  const createArrayWithGeneric = <T>(prams: T): T[] => {
    return [prams];
  };

  interface User {
    id: string;
    age: number;
  }
  const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGeneric2 = createArrayWithGeneric<string>("Bangladesh");
  const resGeneric3 = createArrayWithGeneric<User>({ age: 100, id: "qq1" });

  const createArrayWithGenericTuple = <T, Q>(prams1: T, prams2: Q): [T, Q] => {
    return [prams1, prams2];
  };
  const resGenericTuple = createArrayWithGenericTuple<string, number>(
    "Bangladesh",
    1
  );
  const resGenericTuple2 = createArrayWithGenericTuple<string, User>(
    "Bangladesh",
    { id: "sagor", age: 10 }
  );

  const addCourseToStudents = <T>(student: T) => {
    const course = "Next level web development";
    return {
      course,
      ...student,
    };
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
