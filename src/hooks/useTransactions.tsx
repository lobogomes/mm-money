import { createContext, ReactNode, useContext, useEffect, useState  } from "react";
import { api } from "../services/api";


interface Transaction {
    id: number,
    date: string,
    initialBalance: number,
    type: string,
    value: number,
    finalBalance: number,
    description: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'finalBalance'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}
const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);




export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {

        var finalBalance = transactionInput.type==='earn' 
        ? transactionInput.initialBalance + transactionInput.value 
        : transactionInput.initialBalance - transactionInput.value

        const response = await api.post('/transactions',{
            ...transactionInput,
            finalBalance: finalBalance
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}