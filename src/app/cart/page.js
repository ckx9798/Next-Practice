import CartItem from "./CartItem";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Food", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem 장바구니={장바구니[0]} />
      <CartItem 장바구니={장바구니[1]} />
      <CartItem 장바구니={장바구니[2]} />
    </div>
  );
}

function Btn(props) {
  return <button style={(color = "props")}></button>;
}
