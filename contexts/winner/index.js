import { useDispatch, useSelector } from 'react-redux';
import WinnerCard from '@/components/cards';
import Button from '@/components/buttons';
import lotteryActions from '@/redux/lottery/actions';
import winnerStyle from '@/contexts/winner/index.style';

const { WinnerContainer, WinnerList } = winnerStyle;

function Lottery() {
  const dispatch = useDispatch();
  const { lotteryWinners = [] } = useSelector((state) => state.lottery);

  return (
    <WinnerContainer>
      <Button
        sx={{ width: '100px' }}
        onClick={() => {
          window.location.href = '/';
          return true;
        }}
      >
        繼續抽獎
      </Button>
      <WinnerList>
        {
          lotteryWinners.length
            ? (
              lotteryWinners.map((ele) => (
                <WinnerCard name={ele.name} />
              ))
            )
            : null
        }
      </WinnerList>
      {
        lotteryWinners?.length
          ? (
            <Button
              sx={{ width: '130px' }}
              onClick={() => dispatch(lotteryActions.resetLotteryWinners())}
            >
              重置得獎名單
            </Button>
          )
          : null
      }
    </WinnerContainer>
  );
}

export default Lottery;
