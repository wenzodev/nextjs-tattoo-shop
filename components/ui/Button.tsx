import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
    isPending?: boolean
}

const Button = ({ children, isPending, ...props }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${isPending ? styles.pending : ''}`}
        {...props} disabled={isPending}>
            {isPending ? 'Sending...' : children}
        </button>
    )
}

export default Button