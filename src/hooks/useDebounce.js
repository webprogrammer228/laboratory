import React, { useEffect, useState } from "react";

export function useDebounce(value, timeout, callback) {
  const [timer, setTimer] = useState(0);

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();

    if (value && callback) {
        const newTimer = setTimeout(callback, timeout);
        setTimer(newTimer);
    }
  }, [value]);
<<<<<<< HEAD
}
=======
}
>>>>>>> 859264e2 (все добавлено)
