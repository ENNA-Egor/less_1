import { Card } from "./Card";

export function Cards (props) {
    return <div>
        {
            props.cards.map(card =>(
                <Card key= {card.id}
                id = {card.id}
                name= {card.name}
                size = {card.size}
                removeCard ={props.removeCard}/>
            ))
        }
    </div>
}