export const ShopItem = (props) => {
  const { info } = props;

  return (
    <div className="item">
      <div className="block_img">
        <img src={info.img} alt="" className="item_img" />
      </div>
      <div className="item_title">{info.name}</div>
      <div className="item_color">{info.color}</div>
      <div className="item_price">${info.price}</div>
      <div className="item_button">
        <button type="button" className="card_button">ADD TO CART</button>
      </div>
    </div>
  )
}
