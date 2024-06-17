import { ExperienceQuery } from '@/graphql/generated'

export interface ExperienceProps {
  data: ExperienceQuery['experience']
}
