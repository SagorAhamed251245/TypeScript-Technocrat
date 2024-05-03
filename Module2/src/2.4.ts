{
  // interface generic
  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      price: number;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }
  type EmileWatch = {
    brand: string;
    model: string;
    display: string;
    price: number;
  };
  const poorDev: Developer<EmileWatch> = {
    name: "Poor",
    computer: {
      brand: "Ausus",
      model: "ssia",
      price: 1000,
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "normal",
      model: "string",
      display: "string",
      price: 20,
    },
  };
  interface SupperWatch {
    brand: string;
    model: string;
    display: string;
    price: number;
    feature: {
      heartTrack: boolean;
      sleepTrack: boolean;
    };
  }

  interface YamahaBike {
    brand: string;
    model: string;
  }
  const richDev: Developer<SupperWatch, YamahaBike> = {
    name: "Poor",
    computer: {
      brand: "Ausus",
      model: "ssia",
      price: 1000,
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "normal",
      model: "string",
      display: "string",
      price: 20,
      feature: {
        heartTrack: true,
        sleepTrack: true,
      },
    },
    bike: {
      brand: "Yamaha",
      model: "xyx",
    },
  };
  //
}
