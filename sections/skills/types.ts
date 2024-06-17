import { SkillsQuery } from '@/graphql/generated'

export interface SkillsProps {
  data: SkillsQuery['skills']
}
