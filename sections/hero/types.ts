import { HeroQuery } from '@/graphql/hero'

export interface HeroProps {
  data: HeroQuery['hero']
}
