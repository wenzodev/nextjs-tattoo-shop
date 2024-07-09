'use server'

import { contactFormSchema } from "./contactFormSchema"
import { transporter, mailOptions } from "./nodemailerConfig"

export async function contactFormAction(formData: FormData) {
    const data = Object.fromEntries(formData.entries())
        const parsedData = contactFormSchema.safeParse(data)

        if (!parsedData.success) {
           const errors = parsedData.error.flatten().fieldErrors
           const formattedErrors = Object.keys(errors).reduce((acc,key) => {
            acc[key] = errors[key].join(', ')
            return acc
           }, {} as Record<string, string>)
           return { success: false, error: formattedErrors }
        }

        const { name, email, message } = parsedData.data

        try {
            await transporter.sendMail(mailOptions(name, email, message))
            return { success: true }
        } catch (error) {
            console.error(error)
            return { success: false, error: { general: 'Error sending email' } }
        }
    }
