import React from 'react';
import store from '../../config/store';
import '../ItemStore/styles.css';

class ItemStore extends React.Component {
    constructor(props){
        super(props);
    }
    

    componentDidMount() {
    }

    static getDerivedStateFromProps(props, state) {
        // if (props.inBattle === 'flex') {
        //     props.battleOn();
        // }
    }


    render() {
        return (
            <div style={{display: this.props.inStore, flexDirection: 'column'}}>
                <div className="ItemStoreScreen"></div>
                <div>
                    <button onClick={this.props.buySword}>Buy Sword (+5 attack)</button>
                    <button onClick={this.props.buyArmor}>Buy Armor (+10 HP)</button>
                    <button onClick={this.props.closeStore}>Close Store</button>
                </div>
            </div>
        )
    }
}

export default ItemStore;