import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import { ILink } from "@/interfaces/ui_component.interfaces";

export default function Link({ href, children, color}: ILink) {
    return (
        <MuiLink href={href} component={NextLink} underline='none' color={color} >
            {children}
        </MuiLink>
    );
  }

