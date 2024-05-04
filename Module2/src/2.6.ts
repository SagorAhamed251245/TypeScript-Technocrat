{
  // Constraints
  const addCourseToStudents = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Next level web development";
    return {
      course,
      ...student,
    };
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
