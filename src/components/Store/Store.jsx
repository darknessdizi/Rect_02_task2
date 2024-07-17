import { useState } from "react"; // импортируем hook (хук)
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { CardsView } from '../CardsView/CardsView';
import { ListView } from "../ListView/ListView";
import { products } from '../const';

export const Store = () => {
  const [state, setState] = useState('view_list');
  let resultView = [];

  const clickMenu = () => {
    if (state === 'view_list') {
      setState('view_module');
      resultView.push(<CardsView cards={products} />);
    } else {
      setState('view_list');
      resultView.push(<ListView items={products} />);
    }
  }

  if (state === 'view_list') {
    resultView.push(<CardsView cards={products} key={state} />);
  } else {
    resultView.push(<ListView items={products} key={state} />);
  }

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
