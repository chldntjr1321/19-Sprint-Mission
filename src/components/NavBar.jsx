import styled from 'styled-components';
import LogoImg from '../assets/logo.svg';
import ProfileImg from '../assets/profile.svg';

const TopNav = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  padding: 0 200px;

  .nav__menu {
    display: flex;
    gap: 32px;
  }

  .logo {
    width: 153px;
  }
  .nav__btns {
    display: flex;
    align-items: center;
    a {
      color: #4b5563;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      text-decoration: none;
      padding: 21px 15px;
    }
  }
`;

export default function NavBar() {
  return (
    <>
      <TopNav>
        <div className="nav__menu">
          <img src={LogoImg} alt="판다마켓 로고" className="logo" />
          <div className="nav__btns">
            <a href="/">자유게시판</a>
            <a href="/items ">중고마켓</a>
          </div>
        </div>
        <img src={ProfileImg} alt="프로필 이미지" />
      </TopNav>
    </>
  );
}
