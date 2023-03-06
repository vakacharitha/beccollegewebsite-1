import React from "react";
import "/src/components/Cards/Card.css"

let Cards = (props) => {
    const { item } = props;

    return(
        <>
        <div className="card-container overflow-hidden m-4">
            <div className="image-container">
                <img className="overflow-hidden" style={{width:"300px", height:"200px"}} src={item.image} alt="" />
            </div>
            <div className="card-content overflow-hidden" style={{height:"200px"}}>
                <div className="card-title">
                    <h3>{item.title}</h3>
                </div>
                <div className="card-body">
                    <p>{item.desc}</p>
                </div>
            </div>
            <div className="flex btn justify-center">
                <button className="p-2 border-0">
                    <a href="">View More</a>
                </button>
            </div>
        </div>
        </>
    )
}
export default Cards;