const Card = (card) => {
    console.log(card);
    return(
        <div className="card">
            <div className="font">
                <img src={card.img} alt=""/>
            </div>
        </div>
    );
}

export default Card;