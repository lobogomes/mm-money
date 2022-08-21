import Modal from 'react-modal';
import { Container, TransactionTypeContainer, TypeButton } from './styles';
import closeImg from '../../assets/close-icon.svg';
import earnImg from '../../assets/up-arrow-icon.svg';
import spendImg from '../../assets/down-arrow-icon.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [date, setDate] = useState('');
    const [initialBalance, setInitialBalance] = useState(0);
    const [value, setValue] = useState(0);
    const [type, setType] = useState('earn');
    const [description, setDescription] = useState('');



    async function handleCreateNewTransaction(event: FormEvent) {

        event.preventDefault();

        await createTransaction({
            date,
            initialBalance,
            value,
            type,
            description,
        })

        onRequestClose();
        setDate('');
        setInitialBalance(0);
        setValue(0)
        setType('earn');
        setDescription('');
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type='button' onClick={onRequestClose} className='close-modal'>
                <img src={closeImg} alt='fechar' />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>

                <h2>New Transation</h2>

                <label>Date</label>
                <input placeholder="Date"
                    type="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    required />

                <label>Initial Balance</label>
                <input placeholder="Initial Balance"
                    type="number"
                    value={initialBalance}
                    onChange={event => setInitialBalance(Number(event.target.value))}
                    required />

                <label>Value</label>
                <input placeholder="Value"
                    type="number"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                    required />

                <TransactionTypeContainer>

                    <TypeButton
                        type='button'
                        onClick={() => { setType('earn'); }}
                        isActive={type === 'earn'}
                        activeColor="green"
                    >
                        <img src={earnImg} alt='Earn' />
                        <span>Earn</span>
                    </TypeButton>

                    <TypeButton
                        type='button'
                        onClick={() => { setType('spend'); }}
                        isActive={type === 'spend'}
                        activeColor="red"
                    >
                        <img src={spendImg} alt='Spend' />
                        <span>Spend</span>
                    </TypeButton>

                </TransactionTypeContainer>

                <input placeholder="Description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    required />

                <button type="submit">create</button>

            </Container>
        </Modal>
    )
}