import * as Dialog from "@radix-ui/react-dialog";

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as C from "./styles";


export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <C.Overlay />

            <C.Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <C.CloseButton>
                    <X size={24} />
                </C.CloseButton>

                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

                <C.TransactionType>
                    <C.TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp />
                        Entrada
                    </C.TransactionTypeButton>

                    <C.TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown />
                        Saída
                    </C.TransactionTypeButton>
                </C.TransactionType>
            </C.Content>
        </Dialog.Portal>
    )
}