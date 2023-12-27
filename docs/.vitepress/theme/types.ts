import type { DefaultTheme } from 'vitepress'

export interface ThemeConfig extends DefaultTheme.Config{
  sidebar?: object[]
  search: any
  nav:any
  socialLinks: any
  music?:Song[]
  outlineTitle?: string
  docFooter?: object
  darkModeSwitchLabel?:string
  sidebarMenuLabel?:string
  returnToTopLabel?:string
  articlecc?: object
  website?: object
  logo:any
}

export interface Post{
  frontmatter?: Record<string, any>
  relativePath?: string
}

export interface Song {
  title?: string
  id?: number
  author?: string
  url?: string
  pic?: string
  lrc?: any
}

export interface Toolitem {
  icon?: string
  title: string
  desc?: string
  link?: string
  linktxt?: string
}

export interface Tools {
  title : string
  items: Toolitem[]
}