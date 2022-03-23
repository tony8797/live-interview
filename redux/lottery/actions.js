const actions = {
  ADD_LOTTERY_WINNER: 'ADD_LOTTERY_WINNER',
  addLotteryWinner: ({
    lotteryWinner = {},
  }) => ({
    type: actions.ADD_LOTTERY_WINNER,
    payload: {
      lotteryWinner,
    },
  }),
};

export default actions;
