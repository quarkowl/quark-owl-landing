/** @jsx jsx */
import { jsx } from 'theme-ui';
import Content from '../elements/content';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Svg from './svg';
import { UpDown } from '../styles/animations';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start by deeply understanding your business, users, and goals. No assumptions — just clarity.',
    accent: 'linear-gradient(135deg, #8B5CF6 0%, #a78bfa 100%)',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We design a solution tailored to your needs — choosing the right stack, structure, and approach.',
    accent: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'We ship production-ready software, iterating with you until every detail is right.',
    accent: 'linear-gradient(135deg, #0891b2 0%, #34d399 100%)',
  },
];

const Process = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.09) 0%, transparent 55%), linear-gradient(180deg, #080D1E 0%, #0c1020 100%)"
      bgLight="radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.05) 0%, transparent 55%), linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.05} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="hexa" width={10} stroke color="icon_purple" left="8%" top="20%" sx={{ opacity: 0.3 }} />
        <Svg icon="circle" width={6} color="icon_blue" left="88%" top="70%" sx={{ opacity: 0.25 }} />
        <Svg icon="cross" width={8} stroke color="icon_purple" left="75%" top="15%" sx={{ opacity: 0.25 }} />
      </UpDown>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h2
          sx={{
            background: `linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)`,
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
            backgroundClip: `text`,
            mb: 2,
            mt: 0,
          }}
        >
          How We Work
        </h2>
        <p sx={{ color: `textMuted`, mt: 0, mb: 4, fontSize: [1, 2], maxWidth: `480px` }}>
          A proven process that turns your ideas into reliable software.
        </p>
        <div
          sx={{
            display: `grid`,
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(3, 1fr)`],
            gap: [3, 4],
          }}
        >
          {steps.map(({ number, title, description, accent }) => (
            <div
              key={number}
              sx={{
                position: `relative`,
                background: `cardBg`,
                border: `1px solid`,
                borderColor: `cardBorder`,
                borderRadius: `20px`,
                p: [4, 5],
                backdropFilter: `blur(10px)`,
                overflow: `hidden`,
                transition: `all 0.3s ease`,
                '&:hover': {
                  borderColor: `cardBorderHover`,
                  transform: `translateY(-4px)`,
                  boxShadow: `0 12px 32px rgba(139,92,246,0.12)`,
                },
                '&::before': {
                  content: `""`,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: `3px`,
                  background: accent,
                },
              }}
            >
              <div
                sx={{
                  fontSize: [6, 7],
                  fontWeight: 800,
                  lineHeight: 1,
                  background: accent,
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundClip: `text`,
                  fontFamily: `heading`,
                  letterSpacing: `-0.04em`,
                  mb: 3,
                  opacity: 0.8,
                }}
              >
                {number}
              </div>
              <div
                sx={{
                  fontSize: [2, 3],
                  fontWeight: 700,
                  color: `heading`,
                  fontFamily: `heading`,
                  mb: 2,
                  letterSpacing: `-0.01em`,
                }}
              >
                {title}
              </div>
              <p sx={{ color: `textMuted`, fontSize: [1, 2], lineHeight: 1.65, m: 0 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </Inner>
    </Content>
  </div>
);

export default Process;
