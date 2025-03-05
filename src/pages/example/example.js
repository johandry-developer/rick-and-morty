import React from "react";




const Example = () => {

    return (
        <div>
            <h1>GRID</h1>
            <div className="container">
                <div className="box special-box blue">
                <div className="mini-box yellow"></div>
                <div className="mini-box purple"></div>
                <div className="mini-box brown"></div>
                <div className="mini-box red"></div> 
                </div>

                <div className="box green">
                   
                </div>

                <div className="box red">
                    #3
                </div>

                <div className="box yellow">
                    #4
                </div>

                <div className="box purple">
                    #5
                </div>

                <div className="box special-box brown">
                <div className="mini-box yellow"></div>
                <div className="mini-box purple"></div>
                <div className="mini-box brown"></div>
                <div className="mini-box red"></div> 
                </div> 
            </div>
            
            <h1>FLEX</h1>
            
            <div className="container-flex">
                <div className="box blue col-3">
                    1
                </div>

                <div className="box green col-3">
                   2
                </div>

                <div className="box red col-3">
                 3
                </div>

                <div className="box yellow col-3">
                  4
                </div>

                <div className="box purple col-3">
                 5
                </div>

                <div className="box brown col-3">
                6
                </div> 
            </div>

        </div>
    )
}

export default Example;