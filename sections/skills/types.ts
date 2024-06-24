import { SkillsQuery } from '@/graphql/types/skills'

export interface SkillsProps {
  data: SkillsQuery['skills']
}
