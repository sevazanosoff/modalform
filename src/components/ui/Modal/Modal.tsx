import React from 'react'
import { ModalProps } from '../../../types/types'
import Form from '../../Form'


const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    return (
        <Form closeModal={closeModal} />
    )
}

export default Modal





















// import React from 'react'

// import { SubmitHandler, useForm } from "react-hook-form";
// import { ModalProps, Inputs } from '../../../types/types'


// import cl from './Modal.module.scss'

// const Modal: React.FC<ModalProps> = ({ closeModal }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));


//     return (
//         <form
//             className={cl['modal__form-block']}
//             onSubmit={handleSubmit(onSubmit)}
//         >
//             <svg onClick={closeModal} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
//                 <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
//             </svg>
//             <label>Имя пользователя</label>
//             <input {...register('firstName', {
//                 required: 'Поле не заполнено!',
//                 minLength: {
//                     value: 4,
//                     message: 'Мин. кол-во символов 4'
//                 },
//                 maxLength: {
//                     value: 16,
//                     message: 'Макс. кол-во символов 16'
//                 },
//             })} />
//             {errors?.firstName && <p>{errors?.firstName?.message || 'Ошибка'}</p>}
//             <label>Пароль пользователя</label>
//             <input {...register('Password', {
//                 required: 'Поле не заполнено!',
//                 minLength: {
//                     value: 4,
//                     message: 'Мин. кол-во символов 4'
//                 },
//                 maxLength: {
//                     value: 18,
//                     message: 'Макс. кол-во символов 18'
//                 },
//             })} />
//             {errors?.Password && <p>{errors?.Password?.message || 'Ошибка'}</p>}
//             <button type='submit'>Отправить</button>
//         </form>
//     )
// }

// export default Modal
