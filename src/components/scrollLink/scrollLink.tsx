import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.href.replace('/', "");
        console.log(e.currentTarget.href)
        console.log(targetId)
        const elem = document.getElementById(targetId);

        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    };
    return (
        <Link {...props} onClick={handleScroll}>
            {children}
        </Link>
    );
};
export default ScrollLink;