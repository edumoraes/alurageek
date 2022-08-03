export default function mouse() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let arrayX = useState(0);
    let x = arrayX[0]
    const alterarX = arrayX[1]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let arrayY = useState(0);
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    };

    function quandoMover(ev) {
        alterarX(ev.clientX)
        alterarY(ev.clientY)
    }

    const [tamanhoLabel, setTamanhoLabel] = useState("text-base");
    
    const diminuiLabel = (ev) => {
        if(ev.target.value === "") {
            setTamanhoLabel("text-base");
        } else {
            setTamanhoLabel("text-[0.75rem]");
        }
        console.log(ev);
    }

    return(
        <div style={estilo} onMouseMove={quandoMover} >
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>

            <div className={`relative`}>
                <label htmlFor=""
                       className={`absolute top-2 left-3 ${tamanhoLabel} font-base text-escuro-100`}
                >Input</label>
                <input type="text" onChange={diminuiLabel}
                       className={`w-full pt-7 pb-2 px-3 font-normal text-base text-escuro-200 bg-claro-100 border-x-0 border-t-0 border-b-[1px] border-escuro-100 rounded-sm focus:ring-0`}
                />
            </div>

        </div>
    )
}

import {useState} from "react";
