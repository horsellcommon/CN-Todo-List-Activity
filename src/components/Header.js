import { useState } from "react";

const Header = () => {

    return (
        <div>
            <h1 id="header">TO-DO LIST</h1>
            <h2>Use the input box to type out something to be added to the list.</h2>
            <h3>Press 'Enter' or the button to add items to the list once they have been typed out.</h3>
            <h3>To move items to the completed section, use the button titled<button>PUSH TO COMPLETED LIST</button></h3>
        </div>
    )
}