import React from 'react';

var romanBreakpoints = {"M": 1000,"CM":900, "D": 500, "CD":400, "C": 100, "XC":90, "L": 50, "XL":40, "X": 10, "IX": 9, "V": 5, "IV": 4,"I": 1}

class RomanConversor extends React.Component {
    constructor(props) {
        super(props);

        this.state = { romanValue: "", decimalValue: 0 }
        this.calculateRoman = this.calculateRoman.bind(this);
    }

    calculateRoman(event) {
        var result = "";
        this.setState({ decimalValue: event.target.value })
        var aux = event.target.value;
        for (var key in romanBreakpoints) {
            var value = romanBreakpoints[key];
            
            while (aux >= value) {
                aux = aux - value;
                result += key;
            }
        }

        this.setState(state => ({
            romanValue: result
        }));
    }

    render() {
        return (
            <div>
                <input onChange={this.calculateRoman} value={this.state.decimalValue}></input>
                <div>{this.state.romanValue}</div></div>
        );
    }
}

export default RomanConversor;