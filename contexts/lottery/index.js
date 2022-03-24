import NextImage from 'next/image';
import { useSelector } from 'react-redux';
import Timer from '@/contexts/lottery/timer';

import userImage from '@/images/user.png';
import LotteryStyle from '@/contexts/lottery/index.style';

const {
  LotteryContainer,
  UserList,
  UserListTitle,
  UserListItem,
  Split,
} = LotteryStyle;

function Lottery() {
  const { lotteryUserList = [] } = useSelector((state) => state.lottery);

  return (
    <LotteryContainer>
      <Timer />
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
