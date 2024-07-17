import { useState } from "react"; // импортируем hook (хук)
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { CardsView } from '../CardsView/CardsView';
import { ListView } from "../ListView/ListView";

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

export const Store = () => {
  const [state, setState] = useState('view_list');
  let resultView = [];

  const clickMenu = () => {
    if (state === 'view_list') {
      setState('view_module');
      resultView.push(<CardsView cards={products} />);
    } else {
      setState('view_list');
      resultView.push(<ListView cards={products} />);
    }
  }

  if (state === 'view_list') {
    resultView.push(<CardsView cards={products} key={state} />);
  } else {
    resultView.push(<ListView cards={products} key={state} />);
  }
  console.log('----', resultView);

  return (
    <>
      <div className="control">
        <IconSwitch icon={state} onSwitch={clickMenu} />
      </div>
      <div className={`view type_${state}`}>
        { resultView }
      </div>
    </>
  )
}
