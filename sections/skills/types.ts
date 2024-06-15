import { SkillsQuery } from '@/graphql/skills'

export interface SkillsProps {
  data: SkillsQuery['skills']
}
