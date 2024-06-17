import { HeroQuery } from '@/graphql/generated'

export interface HeroProps {
  data: HeroQuery['hero']
}
