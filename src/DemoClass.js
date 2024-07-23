import {Component} from "react";

export default class DemoClass extends Component {
    constructor() {
        super();
        this.state = {
            element: 0,
            arr: [1, 3, 5],
            value1: "",
            value2: ""
        }
    }

    render() {
        return (
            <>
                {/*{this.state.arr.map((item)=>(*/}
                {/*    <h3>{item}</h3>*/}
                {/*))}*/}
                {/*Demo class component {this.state.element}!*/}
                {/*<input*/}
                {/*    value={this.state.element}*/}
                {/*    onChange={(e) => {*/}
                {/*    this.setState({element: e.target.value})*/}
                {/*}}/>*/}

                {/*<button onClick={e => {*/}
                {/*    this.setState({*/}
                {/*        arr: [...this.state.arr, this.state.element],*/}
                {/*        element: ''*/}
                {/*    })*/}

                {/*}}>add element*/}
                {/*</button>*/}

                <input
                    onChange={(e) => {
                        this.setState({value1: e.target.value})
                    }}/>
                <input
                    onChange={(e) => {
                        this.setState({value2: e.target.value})
                    }}/>

                <button onClick={e => {

                    let {value1, value2} = this.state;
                    let v1 = parseFloat(value1);
                    let v2 = parseFloat(value2);
                    let tong = v1 + v2;
                    let hieu = v1 - v2;
                    let tich = v1 * v2;
                    let thuong = v1 / v2;
                    this.setState({
                        tong,
                        hieu,
                        tich,
                        thuong
                    })
                }}> Tính
                </button>
                {<h3>Tổng: {this.state.tong}</h3>}
                {<h3>Hiệu: {this.state.hieu}</h3>}
                {<h3>Tích: {this.state.tich}</h3>}
                {<h3>Thương: {this.state.thuong}</h3>}
            </>
        )
    }
}