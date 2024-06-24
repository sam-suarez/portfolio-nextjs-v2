import { ExperienceQuery } from '@/graphql/types/experience'

export interface ExperienceProps {
  data: ExperienceQuery['experience']
}
