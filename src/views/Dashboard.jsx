import styles from './dashboard.module.scss'
import {AIAssistant} from "../components/AIAssistant"
import {useFeatureIsOn, useFeatureValue} from "@growthbook/growthbook-react"
import {CTAButton} from "../components/CTAButton"

export const Dashboard = () => {
    // the argument passed to the hook should be the same as your feature's name in the platform
    const shouldAIAssistantBeAvailable = useFeatureIsOn('ai-assistant-flag')
    const remoteCTAButtonColor = useFeatureValue('button-color-feature', '')

    console.log({remoteCTAButtonColor})

    return (
        <div className={styles['dashboard']}>
            {shouldAIAssistantBeAvailable && <AIAssistant />}
            <CTAButton background={''} />
        </div>
    )
}