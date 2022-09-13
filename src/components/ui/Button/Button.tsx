import React from 'react'
import { ButtonProps } from '../../../types/types'

import cl from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ open, openModal }) => {
    return (
        <button
            // onClick={openModal}
            className={cl['button']}
            onClick={(e) => openModal(e)}
        >
            Открыть форму регистрации
        </button>
    )
}

export default Button
