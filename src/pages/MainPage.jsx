import NavBar from '../components/NavBar';
import BestItems from '../components/BestItems';

export default function MainPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">
        <BestItems />
      </div>
    </>
  );
}
