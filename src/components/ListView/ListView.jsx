import { ShopItem } from "../ShopItem/ShopItem";

export const ListView = (props) => {
  const { items } = props;
  let count = 0;
  const result = [];

  items.map((obj) => {
    count += 1;
    result.push(<ShopItem info={obj} key={count} />);
  })

  return (
    <>
      { result }
    </>
  )
}
