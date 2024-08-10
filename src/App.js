import {GrowthBookProvider} from "@growthbook/growthbook-react"
import {growthbook} from "./lib/growth-book"
import {Dashboard} from "./views/Dashboard"
import {useEffect} from "react"
import {users} from "./users"

function App() {
    const currentUser = users.dave

    // initialize growthbook every first time the app gets opened.
    useEffect(() => {
        growthbook.init({
            /*
            setting this option to true means every change to flags will update your
            frontend immediately and without a need to refresh the page
             */
            streaming: true
        })

        // set attributes for the current user being connected to the platform
        growthbook.setAttributes(currentUser)
    }, [currentUser])

  return (
    <div className="App">
      <GrowthBookProvider growthbook={growthbook}>
          <Dashboard />
      </GrowthBookProvider>
    </div>
  )
}

export default App
