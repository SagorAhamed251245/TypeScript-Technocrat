{
  //  Type assertion
  let anythings: any;
  anythings = "next level wev development";

  (anythings as string).length;

  anythings = 111;
  (anythings as number).toFixed(2);
  // console.log(anythings);

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const kgToGmConvert = parseFloat(value) * 1000;
      return `The converted value is ${kgToGmConvert}`;
    } else if (typeof value === "number") {
      const kgToGmConvert = value * 1000;
      return kgToGmConvert;
    }
  };
  const result = kgToGm(1000) as number;
  const result1 = kgToGm("1000") as string;
  console.log(result1);

  type CustomError = {
    messages: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).messages);
  }
  //
}
