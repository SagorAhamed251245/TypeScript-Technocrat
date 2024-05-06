{
  // static
  class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }
  const counter = new Counter();
  const increment = counter.increment();
  const increment2 = counter.increment();

  console.log({ increment });
  console.log({ increment2 });
  //
}
