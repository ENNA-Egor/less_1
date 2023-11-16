import React,{Component} from 'react';
import { Cards } from './Cards';


class AppRemoveCard extends Component{
    state ={
        cards: [
            {id: 'zzs1', name: 'Костюм зимний', size: '44-46'},
            {id: 'zzs2', name: 'Костюм зимний', size: '48-50'},
            {id: 'zzs3', name: 'Костюм зимний', size: '52-54'},
            {id: 'zzs4', name: 'Костюм летний', size: '44-46'},
            {id: 'zzs5', name: 'Костюм летний', size: '48-50'},
            {id: 'zzs6', name: 'Костюм летний', size: '52-54'},
        ],
    };

    removeCard =(id) =>{
        this.setState ({cards:this.state.cards.filter(card => card.id !==id)})
    };


    render(){
        const {cards} = this.state;

        return(
            <div className='AppRemoveCard'>
                <Cards cards={cards} removeCard ={this.removeCard} />
            </div>
        )
    }
}

export default AppRemoveCard;