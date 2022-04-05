import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import Clock from '@/contexts/lottery/clock';

import Button from '@/components/buttons';
import Spinner from '@/components/spinners';
import WinnerCard from '@/components/cards';

import lotteryActions from '@/redux/lottery/actions';
import timerStyle from '@/contexts/lottery/timer.style';

const {
  TimerContainer,
  SettingTimer,
  LotteryWinnerContainer,
  LoadingContainer,
} = timerStyle;

function Timer() {
  const dispatch = useDispatch();
  const { lotteryWinners = [], lotteryUserList = [] } = useSelector((state) => state.lottery);
  const [isWorking, setIsWorking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [countDownMinutes, setCountDownMinutes] = useState(0);
  const [countDownSeconds, setCountDownSeconds] = useState(0);
  const [lotteryWinner, setLotteryWinner] = useState(null);

  const setTimer = () => {
    setIsDone(false);
    setIsWorking(!isWorking);
    setLotteryWinner(null);
    const diffMS = moment().add(countDownMinutes, 'minutes').diff(moment()) || 0;
    setCountDownSeconds(!Number.isNaN(diffMS) && !isWorking ? diffMS : 0);
  };

  useEffect(() => {
    if (!isDone || lotteryWinner) return;

    const random = parseInt(Math.random() * (lotteryUserList.length - 1), 10);
    setLotteryWinner(lotteryUserList[random]);
    dispatch(lotteryActions.addLotteryWinner({
      lotteryWinner: lotteryUserList[random],
    }));
  }, [dispatch, isDone, lotteryWinner, lotteryUserList, lotteryWinners]);

  return (
    <TimerContainer>
      <SettingTimer>
        <Box className="setting-timer-row">
          <Box>倒數時間：</Box>
          <Input
            key="countDownMinutes"
            margin="dense"
            label="倒數時間"
            value={countDownMinutes}
            disabled={isWorking}
            onChange={(e) => setCountDownMinutes(+e.target.value ? +e.target.value : 0)}
            variant="contained"
            size="small"
            sx={{ width: '50px' }}
          />
          分鐘
          <Button
            sx={{ height: 30, ml: 1, zIndex: 2 }}
            variant="contained"
            disabled={!countDownMinutes}
            onClick={() => setTimer()}
          >
            {isWorking ? '倒數中' : '開始抽獎'}
          </Button>
        </Box>
      </SettingTimer>
      <Clock
        countDownSeconds={countDownSeconds}
        isWorking={isWorking}
        setCountDownSeconds={setCountDownSeconds}
        setIsWorking={setIsWorking}
        setIsDone={setIsDone}
      />
      {
        countDownSeconds > 0
          ? (
            <LoadingContainer>
              <Spinner size={60} />
              <span>抽獎倒數中...</span>
            </LoadingContainer>
          )
          : null
      }
      {
        lotteryWinner?.name
          ? (
            <LotteryWinnerContainer sx={{ mt: 1 }}>
              <div className="lottery-winner-card-title">本輪中獎者</div>
              <WinnerCard name={lotteryWinner.name} />
            </LotteryWinnerContainer>
          )
          : null
      }
      {
        lotteryWinners?.length
          ? (
            <Button
              sx={{ mt: 5 }}
              onClick={() => {
                window.location.href = '/winner';
                return true;
              }}
            >
              前往中獎名單
            </Button>
          )
          : null
      }
    </TimerContainer>
  );
}

export default Timer;
