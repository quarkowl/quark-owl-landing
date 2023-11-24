import React from 'react';
import { GatsbySSR, withPrefix } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/atom.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/beaker.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/cable.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/cd.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/chip.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/clock.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/code.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/search.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/tree.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/wifi.svg`)} as="image" type="image/svg+xml" />,
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons/zap.svg`)} as="image" type="image/svg+xml" />,
  ]);
};
