import { useState } from 'react';
import logoImg from '../../assets/mm-money.svg';
import pigImg from '../../assets/pig.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <img className="imgHeader" src={pigImg} />
            <Content>
                <img src={logoImg} alt="mm money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    new transaction
                </button>

            </Content>
        </Container>
    );
}