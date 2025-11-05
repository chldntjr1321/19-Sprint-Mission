import LogoImg from '../assets/logo.svg';
import ProfileImg from '../assets/profile.svg';

export default function NavBar() {
  return (
    <nav className="fixed w-full h-[70px] flex justify-between items-center border-b border-gray-300 px-[200px] bg-white z-50">
      <div className="flex items-center gap-8">
        <img src={LogoImg} alt="판다마켓 로고" className="w-[153px]" />

        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-gray-600 text-lg font-bold leading-[26px] px-4 py-5 hover:text-gray-900 transition"
          >
            자유게시판
          </a>
          <a
            href="/items"
            className="text-gray-600 text-lg font-bold leading-[26px] px-4 py-5 hover:text-gray-900 transition"
          >
            중고마켓
          </a>
        </div>
      </div>

      <img src={ProfileImg} alt="프로필 이미지" className="cursor-pointer" />
    </nav>
  );
}
