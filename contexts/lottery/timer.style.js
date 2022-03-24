import styled from 'styled-components';
import Box from '@mui/material/Box';
import { theme, deviceSize } from '@/themes/styles';

const { primary } = theme.color;
const { mobile } = deviceSize;

const TimerContainer = styled(Box)`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  @media ${mobile} {
    width: 100%;
  }

  & > .redirect-link {
    text-decoration: none;
    margin-top: 10px;
    color: ${primary.default};
  }
`;

const SettingTimer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .setting-timer-row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Timer = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LotteryWinnerContainer = styled(Box)`
  width: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${mobile} {
    max-width: 200px;
    margin: 0 auto;
  }

  & > .lottery-winner-card-title {
    font-size: 24px;
    font-weight: bold;
  }
`;

const LoadingContainer = styled(Box)`
  width: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;

  @media ${mobile} {
    max-width: 200px;
    margin: 0 auto;
  }

  & > span {
    margin: 0 auto;
  }
`;

export default {
  TimerContainer,
  SettingTimer,
  Timer,
  LotteryWinnerContainer,
  LoadingContainer,
};
