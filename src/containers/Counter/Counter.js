import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubCounter}  />
           <hr/>
           <button onClick = {this.props.onStoreResult}>Store Result</button>
           <ul>
               {this.props.results.map( (result,index) => <li onClick = {() => this.props.onDeleteResult(index)} key = {index}>{result}</li> 
               )}
           </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onSubCounter: () => dispatch({type: 'SUB', value: 10}),
        onStoreResult: () => dispatch({type:'STORE'}),
        onDeleteResult: (index) => dispatch({type:'DELETE', value: index})
    };
};
 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);