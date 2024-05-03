{
  //
  //   union Types

  type FrontendDev = "not good developer" | "Best developer"; // যেহেতু আমি সরা সরি টাইপের মধ্যে ভেলু দিক্লার করে দিচ্ছি তাই এই ধরনের টাইপকে বলা হয় string literal type
  type FullstackDev = "Frontend" | "expert";

  type Developer = FrontendDev | FullstackDev; // আমরা চাইলে একাদিক type কে একটি টাইপের মদ্দে রাখতে পারি

  let frontendDev: FrontendDev = "Best developer";
  let frontendDev2: FrontendDev = "not good developer";

  let fullstackDev: Developer = "expert";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    blood: "O+" | "O-" | "A+" | "A-";
    developer: Developer;
  };
  const user1: User = {
    name: "sagor",
    blood: "A+",
    gender: "Male",
    developer: "Frontend",
  };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "FrontendDeveloper";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "BackendDeveloper";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper; // & inter section type. its mens must be full fill all property

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "css", "mongodb"],
    designation2: "BackendDeveloper",
    designation1: "FrontendDeveloper",
  };
  //
}
