/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `24px`,
      px: 5,
      py: 5,
      color: `white`,
      background: `rgba(15, 10, 30, 0.55)`,
      backdropFilter: `blur(16px)`,
      WebkitBackdropFilter: `blur(16px)`,
      border: `1px solid rgba(255, 255, 255, 0.08)`,
      overflow: `hidden`,
      transition: `all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      boxShadow: `0 4px 24px rgba(0, 0, 0, 0.25)`,
      display: `flex`,
      flexDirection: `column`,
      gap: 3,
      "&::before": {
        content: `""`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        height: `3px`,
        background: bg || `linear-gradient(to right, #8B5CF6, #22D3EE)`,
        zIndex: 1,
      },
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-6px)`,
        boxShadow: `0 20px 48px rgba(0, 0, 0, 0.35)`,
        border: `1px solid rgba(255, 255, 255, 0.15)`,
        background: `rgba(20, 14, 40, 0.7)`,
      },
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `0.08em`,
        fontSize: [2, 3, 4],
        fontWeight: 700,
        lineHeight: 1.2,
        background: bg || `linear-gradient(to right, #a78bfa, #22d3ee)`,
        WebkitBackgroundClip: `text`,
        WebkitTextFillColor: `transparent`,
        backgroundClip: `text`,
      }}
    >
      {title}
    </div>
    <div
      sx={{
        p: {
          fontSize: [1, 2],
          color: `rgba(148, 163, 184, 0.9)`,
          margin: 0,
          lineHeight: 1.65,
          fontWeight: 400,
        },
      }}
    >
      {children}
    </div>
  </a>
)

export default ProjectCard
