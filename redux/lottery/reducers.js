import actions from '@/redux/lottery/actions';
import lotteryData from '@/datas/lottery';

const { lotteryUserList } = lotteryData;

const initState = {
  lotteryUserList,
  lotteryWinners: [],
};

export default function reducer(state = initState, action = '') {
  switch (action.type) {
    case actions.ADD_LOTTERY_WINNER:
      return {
        ...state,
        lotteryUserList: lotteryUserList.filter((ele) => (
          ele.id !== action.payload.lotteryWinner.id
        )),
        lotteryWinners: [
          ...state.lotteryWinners,
          action.payload.lotteryWinner,
        ],
      };
    default:
      return state;
  }
}