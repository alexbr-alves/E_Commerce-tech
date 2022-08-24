import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export function InfoProvider({children}){
    const [carrinho , setCarrinho] = useState([]);

   function addCarrinho(name, price, image){
        let novoCarrinho = []
        novoCarrinho.push({name, price, image})
        setCarrinho(novoCarrinho)
        
    }
    return(
        <CarrinhoContext.Provider value={{
            carrinho, addCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}