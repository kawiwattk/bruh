import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(150);
  const [product3, setProduct3] = useState(150);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItem} </h3>
        <h3>จำนวนสินค้านในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="fumo.png" all="fumo" width="150" />
        <br />
        fumo reimu ตัวถูกๆ ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItem(totalItem + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          setTotalItem(totalItem - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        นำออกตะกร้า
      </button>
      <br></br>
      <br />
      <div>
        <img src="fumo02.jpg" all="fumo02" width="150" />
        <br />
        fumo cirno ตัวถูกๆ ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItem(totalItem + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          setTotalItem(totalItem - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        นำออกตะกร้า
      </button>
      <br></br>
      <br />
      <div>
        <img src="fumo03.jpg" all="fumo03" width="150" />
        <br />
        fumo yuyuko ตัวถูกๆ ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItem(totalItem + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          setTotalItem(totalItem - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        นำออกตะกร้า
      </button>
    </div>
  );
}

export default App;
