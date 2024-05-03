{
  // Never,unknown and nullable type
  //   nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("their is nothing to search");
    }
  };
  searchName(null);
  const getSpeedInMeterPerSec = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The spreed id ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unite] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The spreed id ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSec(null);

  const throwError = (meg: string): never => {
    throw new Error(meg); // jodi emn hoy je kono funcion konkhonoi kicu return korbe na tokhon seta never type
  };
  throwError("muskil se error");
  //
}
