export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "Line-through",
    };
    return (
        <div>
            <span style={oldStyles}>{ oldPrice }</span>
            &nbsp;&nbsp;&nbsp;
            <span>{ newPrice }</span>
        </div>
    );
}