import { useState } from "react";

export default function LikeButton() {
    let [like, setLike] = useState(false)

    let toggleLike = ()=> {
        setLike(!like);
    };

    return (
        <>
            <h2 onClick={toggleLike}>
                {
                    like ? (
                        <h2>Liked<i className="fa-solid fa-heart"></i></h2>
                    ) : (
                        <i className="fa-regular fa-heart"></i>
                    )
                }
            </h2>
        </>
    );
}