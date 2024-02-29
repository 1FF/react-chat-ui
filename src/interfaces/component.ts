import { MouseEvent, HTMLInputTypeAttribute, ReactNode, ChangeEvent, KeyboardEvent } from 'react'
import { AssistantRecord, UserMessageContent } from './'
import { ConfigState, MetaState } from './store'
import { BasicVariants } from '../components/Button/variants'
import { ScreenOrientation } from '../config/enums'

export interface MarkdownLinkProps {
  properties: { href?: string | undefined, }
}

export interface AppProps { config: { app: ConfigState, meta: MetaState } }

export interface ButtonProps extends BasicVariants {
  text?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  e2e?: string
}

export interface IconProps extends BasicVariants {
  children: ReactNode,
  outlined?: boolean,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  e2e?: null | string,
  disabled?: boolean
}

export type Ref = HTMLInputElement

export interface BasicInputProps {
  disabled?: boolean,
  e2e?: null | string,
  isLoading: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void,
  name: string,
  placeholder: string,
  type: HTMLInputTypeAttribute,
  value: string,
}

export interface LayoutBaseProps {
  head: ReactNode
  stream: ReactNode
  foot: ReactNode
}

export interface LinkProps {
  text: string,
  href: string,
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void,
}

export interface OverlayProps { children: ReactNode }


export interface PaymentButtonProps {
  text: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  e2e?: string,
  disabled: boolean,
}

export interface CloseButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export interface LinkProps {
  href: string,
  text: string,
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void,
  e2e?: string
}

export interface ProfileProps {
  orientation?: ScreenOrientation.vertical | ScreenOrientation.horizontal
  minimized?: boolean,
}

export interface AssistantProps {
  message: { content: Array<AssistantRecord> }
  itemId?: string
}

export type UserProps = { record: UserMessageContent & { itemId: string } }
