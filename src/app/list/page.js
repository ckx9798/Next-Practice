export default function List() {
  let 상품 = ["tomato", "Pasta", "Coconut"];

  return (
    <div className="main_container">
      <h3> Products List</h3>
      {상품.map((item, i) => {
        return (
          <div className="Product_List" key={i}>
            <img src={`/food${i}.png`} className="map_img" />
            <img src={"/food" + i + ".png"} className="map_img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
      ;
    </div>
  );
}
