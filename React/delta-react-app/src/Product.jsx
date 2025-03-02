import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, id }){
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "277"];
    let description = ["8,000 DPI", "Intuitive surface", "Designed for iPad Pro", "Wireless"]
    return (
        <div className = "Product" >
           <h4>{title}</h4>
           <p>{description[id]}</p>
           <Price oldPrice={oldPrices[id]} newPrice={newPrices[id]} />
        </div>
    );
}

export default Product;