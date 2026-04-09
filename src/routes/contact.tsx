import Contact from '#/components/Contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  return (
    <Contact />
  )
}
