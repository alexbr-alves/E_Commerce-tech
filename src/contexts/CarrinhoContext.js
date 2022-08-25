import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export function InfoProvider({children}){
    const [carrinho , setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    

    function limparCarrinho(){
        setCarrinho([])
        setTotal(0)
    }

     function addCarrinho(name, price, image, black, white, red, blue){
        setTotal(total + parseInt(price))
        carrinho.unshift({name, price, image , black, white, red, blue})       
    }



    return(
        <CarrinhoContext.Provider value={{
            carrinho, addCarrinho, total, limparCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}