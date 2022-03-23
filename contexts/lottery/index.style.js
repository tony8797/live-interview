import styled from 'styled-components';
import Box from '@mui/material/Box';
import { theme, deviceSize } from '@/themes/styles';

const { neutral, primary } = theme.color;
const { mobile } = deviceSize;

const LotteryContainer = styled(Box)`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  @media ${mobile} {
    flex-direction: column;
  }
`;

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

const UserList = styled(Box)`
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media ${mobile} {
    width: 95%;
    margin: 20px auto 0px;
    padding-top: 20px;
  }

  & > .user-list-content {
    height: 100%;
    overflow: auto;
  }
`;

const UserListTitle = styled(Box)`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const UserListItem = styled(Box)`
  width: 100%;
  display: flex;
  padding: 10px;
  margin-bottom: 6px;
  border: 1px solid ${neutral.gray6};

  & > .user-name {
    margin-left: 6px;
  }

  &:last-child {
    margin-bottom: 0px;
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

const Split = styled(Box)`
  width: 100%;
  justify-content: center;
  display: none;

  @media ${mobile} {
    width: 95%;
    margin: 20px auto 0px;
    padding-top: 20px;
    display: flex;
  }

  & > span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${neutral.black};
    margin-right: 10px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export default {
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
};
