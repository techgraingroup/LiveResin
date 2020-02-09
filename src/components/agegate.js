import React from "react"
import { Button } from "./button"
import { AGE_GATE_KEY } from "../data"

const AgeGate = () => {
  return (
    <div>
      Age Gate
      <Button onClick={() => localStorage.setItem(AGE_GATE_KEY, "true")}>
        Yes
      </Button>
    </div>
  )
}

export default AgeGate
