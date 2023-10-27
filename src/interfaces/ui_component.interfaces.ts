export interface ILink {
    href: string,
    children: string,
    color?: string,
    variant?: string
}

export interface IModal {
    open: boolean,
    onClose: () => void
}