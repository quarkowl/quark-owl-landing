/** @jsx jsx */
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `5/6`, `3/4`], textAlign: `left` }} className={className}>
    {children}
  </div>
)

export default Inner
