// Componente de feedback visual para quando o item do nav menu esta ativo

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as))
    isActive = true;

  if (
    !shouldMatchExactHref &&
    (asPath.endsWith(String(rest.href)) || asPath.endsWith(String(rest.as)))
  )
    isActive = true;

  return (
    <>
      <Link {...rest}>
        {cloneElement(children, {
          color: isActive ? "yellow.400" : "gray.50",
        })}
      </Link>
    </>
  );
}
