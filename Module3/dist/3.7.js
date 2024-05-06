"use strict";
{
    // static
    class Counter {
        increment() {
            return (Counter.count = Counter.count + 1);
        }
        decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    const counter = new Counter();
    const increment = counter.increment();
    const increment2 = counter.increment();
    console.log({ increment });
    console.log({ increment2 });
    //
}
