import React from 'react';
import { GatsbySSR, withPrefix } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="fonts-preconnect-1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="fonts-preconnect-2" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link key="icons-preload-atom" rel="preload" href={withPrefix(`/icons/atom.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-beaker" rel="preload" href={withPrefix(`/icons/beaker.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-cable" rel="preload" href={withPrefix(`/icons/cable.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-cd" rel="preload" href={withPrefix(`/icons/cd.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-chip" rel="preload" href={withPrefix(`/icons/chip.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-clock" rel="preload" href={withPrefix(`/icons/clock.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-code" rel="preload" href={withPrefix(`/icons/code.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-search" rel="preload" href={withPrefix(`/icons/search.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-tree" rel="preload" href={withPrefix(`/icons/tree.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-wifi" rel="preload" href={withPrefix(`/icons/wifi.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload-zap" rel="preload" href={withPrefix(`/icons/zap.svg`)} as="image" type="image/svg+xml" />,
  ]);
};
