{
  //generic type
  type GenericType<T> = Array<T>; // reuseable
  //   const rollNumber: number[] = [1, 2, 3, 4];
  const rollNumber: GenericType<number> = [1, 2, 3, 4]; // generic type

  //   const mentors: string[] = ["mir x", "mir y", "mir z"];
  const mentors: GenericType<string> = ["mir x", "mir y", "mir z"]; // generic type

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericType<boolean> = [true, false, true]; // generic type

  const info: GenericType<{
    name: string;
    age: number /* generic use kore amra array of object o use korte pari ..   */;
  }> = [
    { name: "sagor", age: 18 },
    { name: "sagor", age: 18 },
    { name: "sagor", age: 18 },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const manus: GenericTuple<string, string> = ["mr-x", "mir-y"];

  type GenericUserId<X, Y> = [X, Y];

  const userId: GenericUserId<string, { name: string; age: number }> = [
    "mir-x",
    {
      name: "mir-x",
      age: 20,
    },
  ];
  //
}
