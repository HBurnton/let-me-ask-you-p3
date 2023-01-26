import { useState } from "react";


export function useForm (initialState = {}, callBack) {
    const [formData, setData] = useState(initialState);

    return {
        formData,
        onChange: ({ target: { name, value }}) => setData({ ...formData, [name]: value }),
        onSubmit: (event) => {
            console.log(formData)
            event.preventDefault();
            return callBack();
        }
    };
}