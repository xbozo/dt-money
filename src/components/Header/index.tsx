import logoImg from "../../assets/Logo.svg";
import * as C from "./styles";

import { NewTransactionModal } from "../NewTransactionModal";

import * as Dialog from '@radix-ui/react-dialog';


export function Header() {
    return (
        <C.HeaderContainer>
            <C.HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <C.NewTransactionButton>Nova transação</C.NewTransactionButton> 
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
                
            </C.HeaderContent>
        </C.HeaderContainer>
    )
}