import { useState } from "react";

export const Formulario = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const onSubmit = (e) => {
        agregarTarea(inputValue);

        // DEL EJEMPLO DE PASAR UNA FUNCION AL HIJO

        // const envio = {
        //     nombre: inputValue,
        //     visto: false
        // }
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Nueva Tarea'
                value={inputValue}
                onChange={onInputChange}
            />
        </form >
    )
}
