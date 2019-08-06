import React, { Component } from 'react';
import Counters from './counters';

class Counter extends Component {
    state = {
        value: this.props.value,
        count: 0
    };

    handleIncrease = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.handleIncrease() } 
                    className="btn btn-secondary btn-sm"
                >
                    Increase
                </button>
                <button 
                    onClick={ () => this.handleDecrease() } 
                    className="btn btn-secondary btn-sm"
                >
                    Decrease
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count <= 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;