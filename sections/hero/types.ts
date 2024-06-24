import { HeroQuery } from '@/graphql/types/hero'

export interface HeroProps {
  data: HeroQuery['hero']
}
