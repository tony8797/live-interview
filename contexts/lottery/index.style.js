import styled from 'styled-components';
import Box from '@mui/material/Box';
import { theme, deviceSize } from '@/themes/styles';

const { neutral } = theme.color;
const { mobile } = deviceSize;

const LotteryContainer = styled(Box)`
  width: 100%;
  max-width: 600px;
  min-height: calc(100vh - 50px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  @media ${mobile} {
    flex-direction: column;
  }
`;

const UserList = styled(Box)`
  width: 200px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;

  @media ${mobile} {
    width: 95%;
    margin: 20px auto 0px;
    padding-top: 20px;
  }

  & > .user-list-content {
    max-height: 80vh;
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
  UserList,
  UserListTitle,
  UserListItem,
  Split,
};
