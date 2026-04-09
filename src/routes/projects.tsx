import Projects from '#/components/projects'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({ component: ProjectsPage })

function ProjectsPage() {
  return (
    <Projects />
  )
}
