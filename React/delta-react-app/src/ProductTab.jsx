import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };
    return (
        <div style={styles}>
            <Product title = "Logitech MX Master" id = {0} />
            <Product title = "Apple Pencle (2nd Gen)" id = {1} />
            <Product  title = "Zebronics Zeb-transformer" id = {2} />
            <Product title = "PertronicsToad 23" id = {3} />
        </div>
    );
}

export default ProductTab;