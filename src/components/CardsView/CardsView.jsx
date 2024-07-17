import { ShopCard } from "../ShopCard/ShopCard";

export const CardsView = (props) => {
  const { cards } = props;
  let count = 0;
  const result = [];

  cards.map((obj) => {
    count += 1;
    result.push(<ShopCard info={obj} key={count} />);
  })
  
  return (
    <>
      { result }
    </>
  )
}
