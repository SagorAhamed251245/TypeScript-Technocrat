{
  //
  //  Ternary, optional chaining & nullish coalescing operator

  const age = 19;
  if (age >= 18) {
    // console.log("adult");
  } else {
    // console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });
  //   nullish coalescing operator its depends on null or undefine

  const isAuth = null; // only work on null or undefine
  const result = isAuth ?? "Guest";
  console.log({ result }); // output { result: 'Guest' }

  const isAuth2 = "";

  const result2 = isAuth2 ?? "Guest";
  const result3 = isAuth2 ? isAuth2 : "Guest";
  console.log({ result2 }, { result3 }); //  output { result2: 'Guest' }

  type User = {
    name: string;
    address: {
      city: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Sagor",
    address: { city: "dhk", presentAddress: "nafrayanganmj" },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanentAddress";
  console.log({ permanentAddress }); //{ permanentAddress: 'no permanentAddress' }
  //
}
