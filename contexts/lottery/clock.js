import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TimerCard from '@/components/timers';
import useInterval from '@/hooks/useInterval';
import timeUtil from '@/utils/timer';
import timerStyle from '@/contexts/lottery/timer.style';

const { convertTime } = timeUtil;
const {
  Timer,
} = timerStyle;

function Clock({
  countDownSeconds,
  isWorking,
  setIsWorking,
  setIsDone,
  setCountDownSeconds,
}) {
  const [timerSeconds, setTimerSeconds] = useState(countDownSeconds);
  const { hours = 0, minutes = 0, seconds = 0 } = convertTime(timerSeconds);

  useEffect(() => {
    setTimerSeconds(countDownSeconds);
  }, [countDownSeconds]);

  useInterval(
    () => {
      if (!timerSeconds) return;

      const newTimerSeconds = timerSeconds > 1000 ? timerSeconds - 1000 : 0;
      setTimerSeconds(newTimerSeconds);

      if (!newTimerSeconds) {
        setIsWorking(false);
        setCountDownSeconds(0);
        setIsDone(true);
      }
    },
    isWorking,
  );

  return (
    <Timer>
      <TimerCard title="小時" time={hours} isShowDot />
      <TimerCard title="分鐘" time={minutes} isShowDot />
      <TimerCard title="秒" time={seconds} />
    </Timer>
  );
}

Clock.propTypes = {
  countDownSeconds: PropTypes.number,
  isWorking: PropTypes.bool,
  setIsWorking: PropTypes.func.isRequired,
  setIsDone: PropTypes.func.isRequired,
  setCountDownSeconds: PropTypes.func.isRequired,
};

Clock.defaultProps = {
  isWorking: false,
  countDownSeconds: 0,
};

export default Clock;
