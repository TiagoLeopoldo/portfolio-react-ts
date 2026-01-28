import Button from "../../base/Button/Button";
import "./Accordion.css"
import { useState } from "react";

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const Accordion = ({ title, children, defaultOpen = true }: AccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className={`accordion ${open ? '' : 'open'}`}>
      <Button
        title={title}
        open={open}
        onClick={() => setOpen(!open)}
      />

      <div className="content">
        {children}
      </div>

    </section>
  )
}

export default Accordion;