import { useEffect } from 'react';

function useInterval(
  callback = () => {},
  isWorking = false,
  delay = 1000,
) {
  useEffect(() => {
    if (!delay || !isWorking) {
      return () => { };
    }

    const interval = setInterval(() => {
      if (callback) callback();
    }, delay);

    return () => clearInterval(interval);
  }, [delay, isWorking, callback]);
}

export default useInterval;
