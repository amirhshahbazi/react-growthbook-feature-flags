import styles from './styles.module.scss'

export const CTAButton = ({background}) => {
    return (
        <div style={{
            background
        }} className={styles['cta-button']}>
            I have interesting stories to tell!
        </div>
    )
}