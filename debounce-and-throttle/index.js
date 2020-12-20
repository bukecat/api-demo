// 防抖
const debounce = function (func, awaitTime, rightNow = true) {
  let timeer;
  let done;
  let reset;

  const timeerFunc = () => {
    return setTimeout(() => {
      func.apply(this, arguments);
    }, awaitTime);
  };

  return (() => {
    if (timeer) {
      clearTimeout(timeer);
    }

    if (rightNow) {
      if (done) {
        if (reset) {
          clearTimeout(reset);
        }
      } else {
        func.apply(this, arguments);
        done = true;
      }

      reset = setTimeout(() => {
        done = false;
      }, awaitTime);
    } else {
      timeer = timeerFunc();
    }
  })
};

export { debounce };
