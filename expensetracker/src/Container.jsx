import React from "react";

function Container(){
    return (
        <div className="container"> 
            <div className="expFont"> Expense Tracker </div>
            <div className="frame">

            </div>
            <div className="frame2">
                <div className="recExp">
                    <p className="recFont">Recent Transactions</p>
                </div>
                
                <div className="topExp">
                    <p className="recFont">Top Expenses</p>
                </div>
            </div>
        </div>
    );
}

export default Container;