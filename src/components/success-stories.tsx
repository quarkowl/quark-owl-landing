/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect, useRef } from 'react';
import Content from '../elements/content';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Svg from './svg';
import { UpDown } from '../styles/animations';

const stories = [
  {
    id: 'medical-ai',
    tab: 'Medical AI',
    category: 'Healthcare · Computer Vision',
    title: 'Radiological Imaging Analysis',
    description:
      'Developed an open-source AI-powered DICOM viewer enabling radiologists to annotate, segment, and analyse medical imagery with deep learning models. The platform integrates directly into clinical workflows, reducing diagnostic turnaround and surfacing AI-assisted findings alongside traditional reads.',
    link: 'https://zhiva.org/',
    linkLabel: 'Visit zhiva.org',
    accent: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    accentStart: '#06b6d4',
    tags: ['Python', 'PyTorch', 'React', 'DICOM', 'FastAPI'],
    metric: { value: '40%', label: 'faster review cycle' },
  },
  {
    id: 'dpo',
    tab: 'Film Production',
    category: 'Entertainment · SaaS',
    title: 'Digital Production Office',
    description:
      'Built a end-to-end production management platform for film and TV crews. The system handles scheduling, call sheets, budget tracking, asset management, and cross-department communication — replacing spreadsheet chaos with a single source of truth for productions of any scale.',
    link: null,
    linkLabel: null,
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    accentStart: '#f59e0b',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    metric: { value: '3×', label: 'crew coordination speed' },
  },
  {
    id: 'farm-ai',
    tab: 'AgriTech AI',
    category: 'Agriculture · Machine Learning',
    title: 'Farm Animal Tracking System',
    description:
      'Designed a computer-vision pipeline that identifies and tracks individual livestock across CCTV feeds in real time. The system monitors animal behaviour, detects health anomalies, and provides farmers with dashboards and alerts — enabling proactive herd management without manual observation.',
    link: "https://github.com/burnpiro/farm-animal-tracking",
    linkLabel: "Farm Animal Tracking Project",
    accent: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    accentStart: '#22c55e',
    tags: ['Python', 'PyTorch', 'OpenCV', 'React'],
    metric: { value: '24/7', label: 'automated monitoring' },
  },
  {
    id: 'refugee',
    tab: 'Humanitarian',
    category: 'Public Sector · Social Impact',
    title: 'Refugee Accommodation Platform',
    description:
      'Delivered a multi-stakeholder coordination system connecting refugees, volunteer hosts, and NGO case workers. The platform manages housing applications, eligibility checks, matching logic, and status tracking — helping organisations place displaced families faster and with full audit trails.',
    link: "https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/volunteering-accommodation-ukrainians-europe",
    linkLabel: "EU - OSOR review",
    accent: 'linear-gradient(135deg, #8B5CF6 0%, #ec4899 100%)',
    accentStart: '#8B5CF6',
    tags: ['React', 'Node.js', 'GCP', 'Docker'],
    metric: { value: '300k+', label: 'people housed' },
  },
];

const SuccessStories = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const pendingRef = useRef<number | null>(null);

  const switchTo = (idx: number) => {
    if (idx === active) return;
    setVisible(false);
    pendingRef.current = idx;
  };

  useEffect(() => {
    if (!visible && pendingRef.current !== null) {
      const t = setTimeout(() => {
        setActive(pendingRef.current!);
        pendingRef.current = null;
        setVisible(true);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const story = stories[active];

  return (
    <div>
      <Divider
        bg="radial-gradient(ellipse at 20% 60%, rgba(139,92,246,0.10) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(34,211,238,0.07) 0%, transparent 50%), linear-gradient(180deg, #080D1E 0%, #0b0f21 100%)"
        speed={0.15}
        offset={offset}
        factor={factor}
      />
      <Divider speed={0.06} offset={offset} factor={factor}>
        <UpDown>
          <Svg icon="circle" hiddenMobile width={7} color="icon_purple" left="6%" top="30%" sx={{ opacity: 0.2 }} />
          <Svg icon="hexa" width={9} stroke color="icon_blue" left="90%" top="65%" sx={{ opacity: 0.18 }} />
          <Svg icon="triangle" hiddenMobile width={6} stroke color="icon_purple" left="55%" top="8%" sx={{ opacity: 0.18 }} />
        </UpDown>
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          {/* Section header */}
          <h2
            sx={{
              background: `linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)`,
              WebkitBackgroundClip: `text`,
              WebkitTextFillColor: `transparent`,
              backgroundClip: `text`,
              mb: 1,
              mt: 0,
            }}
          >
            Success Stories
          </h2>
          <p sx={{ color: `textMuted`, mt: 0, mb: [3, 4], fontSize: [1, 2], maxWidth: `580px` }}>
            Real-world products we designed, built, and shipped.
          </p>

          {/* Main layout: content left, tabs right */}
          <div
            sx={{
              display: `grid`,
              gridTemplateColumns: [`1fr`, `1fr`, `1fr 260px`],
              gap: [3, 4],
              alignItems: `stretch`,
            }}
          >
            {/* Content panel */}
            <div
              sx={{
                position: `relative`,
                background: `rgba(255,255,255,0.03)`,
                border: `1px solid rgba(255,255,255,0.07)`,
                borderRadius: `24px`,
                p: [4, 5],
                backdropFilter: `blur(12px)`,
                overflow: `hidden`,
                minHeight: [`auto`, `auto`, `320px`],
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`,
                '&::before': {
                  content: `""`,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: `3px`,
                  background: story.accent,
                  transition: `background 0.4s ease`,
                },
              }}
            >
              {/* Animated inner wrapper */}
              <div
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? `translateY(0)` : `translateY(10px)`,
                  transition: `opacity 0.25s ease, transform 0.25s ease`,
                  display: `flex`,
                  flexDirection: `column`,
                  gap: 3,
                  flex: 1,
                }}
              >
                {/* Category badge */}
                <span
                  sx={{
                    display: `inline-block`,
                    fontSize: 0,
                    fontWeight: 600,
                    letterSpacing: `0.08em`,
                    textTransform: `uppercase`,
                    color: `secondary`,
                    background: `rgba(34,211,238,0.1)`,
                    border: `1px solid rgba(34,211,238,0.2)`,
                    borderRadius: `999px`,
                    px: 3,
                    py: 1,
                    alignSelf: `flex-start`,
                  }}
                >
                  {story.category}
                </span>

                {/* Title */}
                <h3
                  sx={{
                    m: 0,
                    fontSize: [3, 4, 5],
                    fontWeight: 800,
                    color: `heading`,
                    fontFamily: `heading`,
                    letterSpacing: `-0.02em`,
                    lineHeight: 1.15,
                  }}
                >
                  {story.title}
                </h3>

                {/* Description */}
                <p sx={{ color: `textMuted`, fontSize: [1, 2], lineHeight: 1.7, m: 0, maxWidth: `560px` }}>
                  {story.description}
                </p>

                {/* Bottom row: metric + tags + link */}
                <div
                  sx={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    alignItems: `center`,
                    gap: 3,
                    mt: `auto`,
                    pt: 2,
                  }}
                >
                  {/* Key metric */}
                  <div
                    sx={{
                      display: `flex`,
                      flexDirection: `column`,
                      borderLeft: `2px solid`,
                      borderColor: `primary`,
                      pl: 3,
                    }}
                  >
                    <span
                      sx={{
                        fontSize: [4, 5],
                        fontWeight: 800,
                        background: story.accent,
                        WebkitBackgroundClip: `text`,
                        WebkitTextFillColor: `transparent`,
                        backgroundClip: `text`,
                        fontFamily: `heading`,
                        lineHeight: 1,
                        letterSpacing: `-0.03em`,
                      }}
                    >
                      {story.metric.value}
                    </span>
                    <span sx={{ fontSize: 0, color: `textMuted`, mt: 1, letterSpacing: `0.04em` }}>
                      {story.metric.label}
                    </span>
                  </div>

                  {/* Tags */}
                  <div sx={{ display: `flex`, flexWrap: `wrap`, gap: 2, flex: 1 }}>
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        sx={{
                          fontSize: 0,
                          px: 2,
                          py: `4px`,
                          borderRadius: `6px`,
                          background: `rgba(255,255,255,0.05)`,
                          border: `1px solid rgba(255,255,255,0.1)`,
                          color: `text`,
                          fontFamily: `monospace`,
                          letterSpacing: `0.02em`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External link */}
                  {story.link && (
                    <a
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: `inline-flex`,
                        alignItems: `center`,
                        gap: 1,
                        fontSize: 1,
                        fontWeight: 600,
                        color: `secondary`,
                        textDecoration: `none`,
                        borderBottom: `1px solid`,
                        borderColor: `rgba(34,211,238,0.4)`,
                        pb: `2px`,
                        transition: `border-color 0.2s`,
                        '&:hover': { borderColor: `secondary` },
                      }}
                    >
                      {story.linkLabel}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Tab list — right side on desktop, top on mobile */}
            <div
              sx={{
                display: `flex`,
                flexDirection: [`row`, `row`, `column`],
                gap: 2,
                overflowX: [`auto`, `auto`, `visible`],
                pb: [`2px`, `2px`, 0],
                order: [`-1`, `-1`, 0],
              }}
            >
              {stories.map((s, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => switchTo(idx)}
                    sx={{
                      flexShrink: 0,
                      textAlign: `left`,
                      background: isActive ? `rgba(255,255,255,0.06)` : `rgba(255,255,255,0.02)`,
                      border: `1px solid`,
                      borderColor: isActive ? `rgba(139,92,246,0.35)` : `rgba(255,255,255,0.07)`,
                      borderRadius: `16px`,
                      px: [3, 3, 4],
                      py: [2, 2, 3],
                      cursor: `pointer`,
                      transition: `all 0.2s ease`,
                      position: `relative`,
                      overflow: `hidden`,
                      '&:hover': {
                        borderColor: `rgba(139,92,246,0.25)`,
                        background: `rgba(255,255,255,0.05)`,
                      },
                      '&::before': {
                        content: `""`,
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        width: [`100%`, `100%`, `3px`],
                        height: [`3px`, `3px`, `100%`],
                        background: s.accent,
                        opacity: isActive ? 1 : 0,
                        transition: `opacity 0.25s ease`,
                      },
                    }}
                  >
                    <span
                      sx={{
                        display: `block`,
                        fontSize: [0, 0, 1],
                        fontWeight: 700,
                        color: isActive ? `heading` : `textMuted`,
                        fontFamily: `heading`,
                        transition: `color 0.2s`,
                        whiteSpace: `nowrap`,
                      }}
                    >
                      {s.tab}
                    </span>
                    <span
                      sx={{
                        display: [`none`, `none`, `block`],
                        fontSize: 0,
                        color: `textMuted`,
                        mt: 1,
                        opacity: 0.7,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.category.split(' · ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Inner>
      </Content>
    </div>
  );
};

export default SuccessStories;
