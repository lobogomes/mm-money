import { Container } from "./styles";
import upImg from "../../assets/up-arrow-icon.svg"
import downImg from "../../assets/down-arrow-icon.svg"
import coinImg from "../../assets/coin-icon.svg"
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        
        if (transaction.type === 'earn') {
            acc.earnings += transaction.value;
            acc.balance += transaction.value;
        } else {
            acc.spendings += transaction.value;
            acc.balance -= transaction.value
        }
        return acc
    }, {
        earnings: 0,
        spendings: 0,
        balance: 0
    })

    var className = summary.balance < 0 ? 'highlight-red' : 'highlight-green'
    
    return (
        <Container>
            <div>
                <header>
                    <p>earnings</p>
                    <img src={upImg} alt="earnings" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.earnings)}
                </strong>
            </div>
            <div>
                <header>
                    <p>spendings</p>
                    <img src={downImg} alt="spendings" />
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.spendings)}
                </strong>
            </div>
            <div className={className}>
                <header>
                    <p>balance</p>
                    <img src={coinImg} alt="balance" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.balance)}
                </strong>
            </div>
        </Container>
    );
}