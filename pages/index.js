import LotteryPage from '@/contexts/lottery';

function Home() {
  return (
    <LotteryPage />
  );
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
