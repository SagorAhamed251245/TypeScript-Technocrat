{
  // Reference type === object;

  const user: {
    firstName: string;
    middleName: string;
    lastName: string;
    isMarried: boolean;
  } = {
    firstName: "Sagor",
    middleName: "Ahamed",
    lastName: "Developer",
    isMarried: true,
  };
  //all Property must be used

  const user2: {
    firstName: string;
    middleName?: string; // optional property type.. using the ?
    lastName: string;
  } = {
    firstName: "Sagor",
    //   middleName: "Ahamed",
    lastName: "Developer",
  };
  const user3: {
    firstName: "Sagor"; //  যদি এমন হয় যে প্রপারটি এর ভেলু কখনো পরিবর্তন হবে না । তাহলে আমরা চাইলে টাইপ এর পরিবর্তে সরাসরি ভেলু বসিয়ে দিতে পারি । এটি এররের ক্ষেত্ররে ও কাজ করবে । এটি নিজেই একটি টাইপে পরিণত হবে। যখন কোন ভেলু টাইপের কাজ করে অথবা টাইপের মত আচরন করে তখন তাকে বলা হয় literal type
    middleName?: string;
    lastName: string;
  } = {
    firstName: "Sagor",
    //   middleName: "Ahamed",
    lastName: "Developer",
  };

  const user4: {
    readonly firstName: string; // access modifier
    middleName: string;
    lastName: string;
  } = {
    firstName: "Sagors",
    middleName: "Ahamed",
    lastName: "Developer",
  };

  //  user4.firstName = "Anik"; its give an error because its a read only property
  const user5: {
    readonly firstName: "Sagor"; // access modifier you can also use like this
    middleName: string;
    lastName: string;
  } = {
    firstName: "Sagor",
    middleName: "Ahamed",
    lastName: "Developer",
  };
}
