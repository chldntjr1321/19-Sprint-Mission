import axios from 'axios';
import ItemCard from './ItemCard';
import { useEffect, useState } from 'react';

export default function BestItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite'
      )
      .then((res) => {
        setItems(res.data.list);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4 pt-[94px]">
      <span className="text-xl font-bold leading-8">베스트 상품</span>

      <div className="grid grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            image={item.images[0]}
            title={item.name}
            price={item.price.toLocaleString() + '원'}
            likes={item.favoriteCount}
          />
        ))}
      </div>
    </div>
  );
}
