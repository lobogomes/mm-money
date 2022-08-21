import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function TransactionsTable() {

    const { transactions } = useTransactions()
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Initial Balance</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Description</th>
                        <th>Final Balance</th>
                    </tr>
                </thead>
                <tbody>
                   {transactions.map(transaction => (
                     <tr key={transaction.id}>
                     <td>
                        {new Intl.DateTimeFormat('pt-BR')
                        .format(new Date(transaction.date))}
                     </td>
                     <td>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.initialBalance)}
                     </td>
                     <td>{transaction.type}</td>
                     <td className={transaction.type}>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.value)}
                     </td>
                     <td>{transaction.description}</td>
                     <td>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.finalBalance)}
                     </td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </Container>
    );
}