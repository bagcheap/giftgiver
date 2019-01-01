import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {

    constructor(){
        super();

        this.state = { gifts: [] };
    }

    /*
        addGift function is initialized using the error function. This
        enables the "this" object to be transferred to the addGift function
        where it can be udpated.
    */
    addGift = () => {
        const { gifts } = this.state;
        const ids = this.state.gifts.map(gift => gift.id);

        const maxId = Math.max(...ids);

        maxId > 0? gifts.push({id : maxId}) : 1;
    };

    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <Button className='btn-add' onClick='addGift()'>Add Gift</Button>
            </div>
        )
    }
}

export default App;