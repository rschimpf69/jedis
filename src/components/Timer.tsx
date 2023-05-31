import { useEffect, useState } from "react"

export default function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
  }, [])

  return (
    <div>
      Seconds passed: {count}
    </div>
  )
}