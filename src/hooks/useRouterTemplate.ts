import { NextRouter, useRouter } from 'next/router';

export interface TemplatedRouteChild {
  label: string;
  slug: string;
  component: () => JSX.Element;
}

export function useRouterTemplate<TTemplate extends TemplatedRouteChild>(
  routes: TTemplate[],
  slug: ((router: NextRouter) => string | undefined) | string,
) {
  const { ...router } = useRouter();
  const currentSlug = typeof slug === 'string' ? slug : slug(router);

  return (routes.find((route) => route.slug === currentSlug) ||
    routes[0]) as TTemplate;
}
