import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - useEffect sem dependencias 
    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    // 2 - array de dependencias vazio
    useEffect(() => {
        console.log("Estou sendo executado apenas uma vez");
    }, []);

    // 3 - array de dependencias com valores
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0 ) {
            console.log("Sou executado apenas quando muda o anotherNumber");
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("Hello World")
    //         setAnotherNumber(anotherNumber + 1);
    //     }, 2000);
    //     return () => clearTimeout(timer)
    // }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                Mudar o anotherNumber
            </button>
        </div>
    );
};

export default HookUseEffect;