import { createPortal } from "react-dom"

const Notification = ({status}:{status:boolean}) => {
    const root = document.querySelector("#notification") as HTMLDivElement;

  return createPortal (
    <div>
        {status? "Notification":""}
    </div>,
    root
  )
}

export default Notification