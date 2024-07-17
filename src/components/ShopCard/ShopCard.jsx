export const ShopCard = (props) => {
  const { info } = props;

  return (
    <div className="card">
      <div className="card_title">{info.name}</div>
      <div className="card_color">{info.color}</div>
      <img src={info.img} alt="" className="card_img" />
      <div className="card_control">
        <span>${info.price}</span>
        <button type="button" className="card_button">ADD TO CART</button>
      </div>
    </div>
  )
}
