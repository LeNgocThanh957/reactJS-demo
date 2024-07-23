import logo from './logo.svg';
import './App.css';
import Ngocthanh from "./Ngocthanh";
import Demo from "./Demo";
import DemoClass from "./DemoClass";

let name = "Thanh";
let obj = {
    name: "Thanh",
    age: 22
};
let arr = [1, 2, 3];
let books = [
    {id: 1, title: "To Kill a Mockingbird", author: "Harper Lee"},
    {id: 2, title: "1984", author: "George Orwell"},
    {id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
];

function App() {
    return (
        <DemoClass/>
    );
}

export default App;
