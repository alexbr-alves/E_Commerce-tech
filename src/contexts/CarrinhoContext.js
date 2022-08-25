import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export function InfoProvider({children}){
    const [carrinho , setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);
    

    function limparCarrinho(){
        setCarrinho([])
        setTotal(0)
    }

     function addCarrinho(name, price, image){
        setTotal(total + parseInt(price))
        carrinho.unshift({name, price, image})
       
        
    }
    return(
        <CarrinhoContext.Provider value={{
            carrinho, addCarrinho, total, limparCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}