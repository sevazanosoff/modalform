import React from 'react'

export type ButtonProps = {
    open: boolean
    openModal: React.MouseEventHandler
}

export type ModalProps = {
    closeModal: React.MouseEventHandler
}

export type InputsOption = {
    firstName: string,
    Password: string,
}
