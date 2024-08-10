import styles from './styles.module.scss'
import { FaRobot } from "react-icons/fa"

export const AIAssistant = () => {
    return (
        <div className={styles['ai-assistant']}>
            <FaRobot size={28} color='white'/>
        </div>
    )
}