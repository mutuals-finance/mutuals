import Link, { LinkProps } from 'next/link';
import React, { useEffect, useState } from 'react';

interface AppSidebarLinkProps extends LinkProps {
  dense?: boolean;
  icon?: React.ReactNode;
}

export default function SidebarLink({
  children,
  icon,
  dense = false,
  ...props
}: React.PropsWithChildren<AppSidebarLinkProps>) {
  const className = `px-4 space-x-6 justify-start relative font-semibold text-sm flex h-12 items-center hover:bg-default-2 whitespace-nowrap truncate transition-color duration-200 rounded-default ${
    dense ? 'w-12' : 'w-52'
  }`;
  const activeClassName = 'bg-default-1';

  // const { pathname } = useRouter();
  const segments = [''];
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    const linkURL = new URL((props.as || props.href) as string, location.href);
    const segment = linkURL.pathname.replace('/', '');
    const newClassName = segments.includes(segment)
      ? `${className} ${activeClassName}`
      : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [segments, props.as, props.href, computedClassName, className]);

  return (
    <Link {...props} className={computedClassName}>
      {!!icon ? (
        <>
          <span className={'block'}>{icon}</span>
          <span className={'block'}>{children}</span>
        </>
      ) : (
        children
      )}
    </Link>
  );
}
