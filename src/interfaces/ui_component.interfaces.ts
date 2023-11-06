export interface ILink {
    href: string,
    children: string,
    color?: string,
    variant?: string
}

export interface IButton {
    children: string,
    disabled?: boolean,
    onClick: any
}

export interface IModal {
    open: boolean,
    onClose: () => void,
    makeRefresh: () => void
}