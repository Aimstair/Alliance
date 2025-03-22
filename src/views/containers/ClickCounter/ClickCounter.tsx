import React, {useState, createContext, useContext} from "react";

const CounterContext = createContext({
    counter:0,
    updateCounter: () => {}
});


export const ClickCounter = () => {
    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter + 1);
    };

    const value = {counter, updateCounter};

    return(
        <div>
            <CounterContext value =  {value}>
                <CounterDisplay />
                <ClickCounter />
            
            </CounterContext>
        </div>
    );
}

const CounterButton = () => {
    const {counter, updateCounter} = useContext(CounterContext);

    return(
        <button onClick={() => updateCounter()}>Click Me</button>
    );
}

const CounterDisplay = () => {
    const {counter} = useContext(CounterContext);
    return(
        <span>
            {counter}
        </span>
    );
}
