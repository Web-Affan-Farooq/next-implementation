import React, { useState } from "react"
import Notification from "./components/notification";

const App = () => {
  const [content, setcontent] = useState<string>("");
  const [status, setstatus] = useState(false)

  const copyToClipboard = () => {
    setstatus(!status)
    navigator.clipboard.writeText(content)

    setTimeout(() => {
      setstatus(false)
    }, 2000);
  }

  return (
    <div>
      <input type="text" placeholder="Enter some content" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
        setcontent(e.target.value)        
      }} />
      <button type="button" onClick={copyToClipboard}>
        Copy
      </button>
      <Notification status={status}/>
    </div>
  )
}

export default App