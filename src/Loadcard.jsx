import { useEffect, useState } from 'react';

export default function useLoadcard() {
  const [card, setcard] = useState([]);
  const [mockcard, setmockcard] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Twin')
      .then((response) => response.json())
      .then((data) => {
        const twinCards = data.data.filter((card) => {
          return (
            card.name.includes('Evil★Twin') || card.name.includes('Live☆Twin')
          );
        });

        const formatdata = twinCards.map((item) => {
          return {
            id: item.id,
            name: item.name,
            img: item.card_images[0].image_url_small,
            price: item.card_prices[0].cardmarket_price,
            desc: item.desc,
            type: item.type,
            frametype: item.frameType,
          };
        });

        setcard(formatdata);
        setmockcard(twinCards);
      })
      .catch((error) => seterror(error))
      .finally(() => setloading(false));
  }, []);
  return { card, mockcard, error, loading };
}
