'use client'

import { useState, FormEvent, FocusEvent, ChangeEvent } from "react"
import { contactFormAction } from "../lib/contactFormAction"
import Button from "../../components/ui/Button"
import styles from './ContactForm.module.css'

type ErrorRecord = Record<string, string>

export default function ContactForm() {
    const [status, setStatus] = useState<string | null>(null)
    const [errors, setErrors] = useState<ErrorRecord>({})
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsPending(true)

        const formElement = e.currentTarget
            const formData = new FormData(formElement)
            const result = await contactFormAction(formData)

            if (result.success) {
                setStatus('Email sent successfully')
                formElement.reset()
                setErrors({})
            } else {
                setStatus('Error sending email')
                    setErrors(result.error || {})
            }

            setIsPending(false)

            // Hide the status message after 5 seconds
            setTimeout(() => {
                setStatus(null)
            }, 5000)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = e.target

        if (!field.validity.valid) {
            let validationMessage = ''
            if (field.name === 'name') {
                validationMessage = 'Please enter your name'
            } else if (field.name === 'email') {
                validationMessage = 'Please enter a valid email address'
            } else if (field.name === 'message') {
                validationMessage = 'Please enter your message'
            }
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field.name]: validationMessage
            }))
        } else {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors }
                delete newErrors[field.name]
                return newErrors
            })
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = e.target;
        if (field.validity.valid) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors }
                    delete newErrors[field.name]
                    return newErrors
            })
        }
    }

    const closePopup = () => {
        setStatus(null)
    }

    return (
    <div className={styles.container}>
            {status && (
                <div className={`${styles.popup} ${status.startsWith('Error') ? styles.error : ''}`}>
                    {/* this is important */}
                    <span>{status}</span>
            <button className={styles.closeButton} onClick={closePopup}>&times;
            </button>
            </div>
            )}
        <div className={styles.formwrapper}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input className={styles.input}
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                </div>
                <div>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input}
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                </div>
                <div>
                   <label className={styles.label} htmlFor="message">Message</label>
                   <textarea className={styles.textarea}
                   id="message" 
                   name="message" 
                   required
                   onBlur={handleBlur}
                   onChange={handleChange}
                   ></textarea>
                   {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
                </div>
                <Button isPending={isPending}>Send</Button>
        {/* {status && <p>{status}</p>} */}
            </form>
        </div>
    </div>
    )
}




