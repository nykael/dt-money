import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;  
    category: string;
    createdAt: string;
  }

interface TransactionnContextType {
    transactions: Transaction[];
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionnContextType)

export function TransactionsProvider({children} : TransactionProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/transactions')
        .then(response => response.json())
        .then(data => {
            setTransaction(data)
            console.log(data)
        })
    },[])

    return (
        <TransactionsContext.Provider value={{ transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}
