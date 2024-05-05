{
  // map type
  const arrayOfNumbers: number[] = [1, 2, 3, 4];

  //   const arrayOfStrings: string[] = ["1", "2", "3", "4"]; // manual system
  const arrayOfStrings: string[] = arrayOfNumbers.map(
    (number: number): string => number.toString()
  );
  console.log({ arrayOfStrings });

  type AreNumber = { height: number; width: number };
  type AreString = {
    [index in keyof AreNumber]: string; // map type
  };

  type Height = AreNumber["height"]; //lookup type

  type GenericAreString<T> = {
    [index in keyof AreNumber]: T; // map type
  };
  const GenArea: GenericAreString<boolean> = {
    height: true,
    width: false,
  };

  type GenericAreString2<T> = {
    [key in keyof T]: T[key]; // map type
  };
  const GenArea2: GenericAreString2<{ height: number; width: string }> = {
    height: 100,
    width: "100",
  };
  //
}
