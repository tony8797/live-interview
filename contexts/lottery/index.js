import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import Button from '@/components/buttons';
import TimerCard from '@/components/timers';
import Spinner from '@/components/spinners';
import WinnerCard from '@/components/cards';

import useInterval from '@/hooks/useInterval';
import timeUtil from '@/utils/timer';
import lotteryActions from '@/redux/lottery/actions';
import userImage from '@/images/user.png';
import LotteryStyle from '@/contexts/lottery/index.style';

const { convertTime } = timeUtil;
const {
  LotteryContainer,
  TimerContainer,
  SettingTimer,
  UserList,
  UserListTitle,
  UserListItem,
  Timer,
  LotteryWinnerContainer,
  LoadingContainer,
  Split,
} = LotteryStyle;

function Lottery() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { lotteryWinners = [], lotteryUserList = [] } = useSelector((state) => state.lottery);
  const [isWorking, setIsWorking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [countDownMinutes, setCountDownMinutes] = useState(0);
  const [countDownSeconds, setCountDownSeconds] = useState(0);
  const [lotteryWinner, setLotteryWinner] = useState(null);

  const { hours = 0, minutes = 0, seconds = 0 } = convertTime(countDownSeconds);

  useInterval(() => {
    const newCountDownSecond = countDownSeconds > 0 ? countDownSeconds - 1000 : 0;
    setCountDownSeconds(newCountDownSecond);
    if (!countDownSeconds) setIsWorking(false);
    if (!newCountDownSecond && countDownSeconds) setIsDone(true);
  });

  const setTimer = () => {
    setIsDone(false);
    setIsWorking(!isWorking);
    setLotteryWinner(null);
    const diffMS = moment().add(countDownMinutes, 'minutes').diff(moment()) || 0;
    setCountDownSeconds(!Number.isNaN(diffMS) && !isWorking ? diffMS : 0);
  };

  useEffect(() => {
    if (!isDone || !isWorking || lotteryWinner) return;

    const random = parseInt(Math.random() * (lotteryUserList.length - 1), 10);
    setLotteryWinner(lotteryUserList[random]);
    dispatch(lotteryActions.addLotteryWinner({
      lotteryWinner: lotteryUserList[random],
    }));
  }, [dispatch, isDone, lotteryWinner, isWorking, lotteryUserList, lotteryWinners]);

  return (
    <LotteryContainer>
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
        <Timer>
          <TimerCard title="小時" time={hours} isShowDot />
          <TimerCard title="分鐘" time={minutes} isShowDot />
          <TimerCard title="秒" time={seconds} />
        </Timer>
        {
          isWorking && countDownSeconds > 0
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
                onClick={() => router.push('/winner')}
              >
                前往中獎名單
              </Button>
            )
            : null
        }
      </TimerContainer>
      <Split>
        <span />
        <span />
        <span />
      </Split>
      <UserList>
        <UserListTitle>參與者</UserListTitle>
        <div className="user-list-content">
          {
            lotteryUserList.map((ele) => (
              <UserListItem key={`userListItem${ele.id}`}>
                <NextImage src={userImage} width={24} height={24} />
                <span className="user-name">{ele.name || '匿名'}</span>
              </UserListItem>
            ))
          }
        </div>
      </UserList>
    </LotteryContainer>
  );
}

export default Lottery;
