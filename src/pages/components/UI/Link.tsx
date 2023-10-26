import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

interface ILink {
    href: string,
    children: string,
    color?: string,
    variant?: string
}

export default function Link({ href, children, color, variant}: ILink) {
    return (
        <MuiLink href={href} component={NextLink} underline='none' color={color} >
            {children}
        </MuiLink>
    );
  }

