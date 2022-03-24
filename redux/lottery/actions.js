const actions = {
  ADD_LOTTERY_WINNER: 'ADD_LOTTERY_WINNER',
  RESET_LOTTERY_WINNERS: 'RESET_LOTTERY_WINNERS',
  addLotteryWinner: ({
    lotteryWinner = {},
  }) => ({
    type: actions.ADD_LOTTERY_WINNER,
    payload: {
      lotteryWinner,
    },
  }),
  resetLotteryWinners: () => ({
    type: actions.RESET_LOTTERY_WINNERS,
  }),
};

export default actions;
