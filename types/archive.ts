import type { BlogItem } from './blog'

export interface ArchiveItem {
  id: number
  date: string
  list: BlogItem[]
}
