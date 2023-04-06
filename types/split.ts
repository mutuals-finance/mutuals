import React from 'react';

export interface RouteChild {
  label: string;
  slug: string;
  component: () => JSX.Element;
}

export type SplitTemplateTab = RouteChild;

export type SplitSettingsTemplateTab = RouteChild & {
  icon: React.ReactNode;
  description: string;
};
