import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from './components/Search';
import Dropdown from "./components/Dropdown";

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end javascript library'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }

// ];
const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <button onClick={()=> setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? ( 
            <Dropdown
                selected={selected}
                options={options}
                onSelectedChange={setSelected}
            /> ) : null
            }
        </div>
    );
};
export default App;