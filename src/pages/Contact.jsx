import Profile from "../components/Profile"
import Modal from "../components/Modal"
import { useState } from "react"

export default function Contact() {
  const [open, setOpen] = useState(false);
    return (
      <div>
        <Profile open={open} setOpen={setOpen}/>
        <Modal open={open} onClose={() => setOpen(false)} />
      </div>
    )
}