import heartIcon from '../assets/icon_heart.svg';

export default function ItemCard({ image, title, price, likes }) {
  return (
    <div className="flex flex-col gap-3 w-full cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover rounded-lg"
      />

      <span className="text-sm font-medium leading-6">{title}</span>

      <span className="text-base font-bold leading-[26px]">{price}</span>

      <div className="flex items-center gap-1 text-xs text-gray-500 leading-[18px]">
        <img src={heartIcon} alt="좋아요 수" />
        {likes}
      </div>
    </div>
  );
}
