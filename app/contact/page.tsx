import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import styles from './page.module.css'

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <h2>Contact Us</h2>
            <div className={styles.formWrapper}>
                <ContactForm />
            </div>
            <div className={styles.imageContainer}>
                <Image src='https://via.placeholder.com/600x200' alt='Contact Us' width={600} height={200} />
            </div>
        </div>
    )
}
