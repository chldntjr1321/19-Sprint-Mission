import NavBar from '../components/NavBar';
import BestItems from '../components/BestItems';
import styled from 'styled-components';

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainPage() {
  return (
    <>
      <NavBar />
      <MainSection>
        <BestItems />
      </MainSection>
    </>
  );
}
