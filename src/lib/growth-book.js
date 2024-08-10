import { GrowthBook } from "@growthbook/growthbook-react"

export const growthbook = new GrowthBook({
    apiHost: process.env.REACT_APP_GROWTHBOOK_API_HOST,
    clientKey: process.env.REACT_APP_GROWTHBOOK_CLIENT_KEY,
    enableDevMode: true,
    trackingCallback: (experiment, result) => {
        // FORGET ABOUT THIS PART FOR NOW
        console.log("Viewed Experiment", {
            experimentId: experiment.key,
            variationId: result.key
        })
    }
})