import styled from 'styled-components';

const BestItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 94px 0 0 0;
`;
const Items = styled.div`
  display: flex;
  gap: 24px;
`;

export default function BestItems() {
  return (
    <>
      <BestItemsDiv>
        <span>베스트 상품</span>
        <Items>
          <div>상품1</div>
          <div>상품2</div>
          <div>상품3</div>
          <div>상품4</div>
        </Items>
      </BestItemsDiv>
    </>
  );
}
