/** @jsx jsx */
import { jsx } from 'theme-ui';
import Content from '../elements/content';
import Divider from '../elements/divider';
import Inner from '../elements/inner';

const statItems = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '8+', label: 'Years in Business' },
  { value: '15+', label: 'Technologies' },
  { value: '3', label: 'Core Specialties' },
];

const Stats = ({ offset, factor = 0.6 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(180deg, rgba(139,92,246,0.06) 0%, rgba(34,211,238,0.04) 100%)"
      speed={0.1}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.3} offset={offset} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridTemplateColumns: [`repeat(2, 1fr)`, `repeat(2, 1fr)`, `repeat(4, 1fr)`],
            gap: [3, 4],
          }}
        >
          {statItems.map(({ value, label }) => (
            <div
              key={label}
              sx={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                textAlign: `center`,
                py: [3, 4],
                px: 3,
                background: `rgba(255,255,255,0.03)`,
                border: `1px solid rgba(255,255,255,0.07)`,
                borderRadius: `20px`,
                backdropFilter: `blur(8px)`,
              }}
            >
              <span
                sx={{
                  fontSize: [5, 6, 7],
                  fontWeight: 800,
                  lineHeight: 1,
                  background: `linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)`,
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundClip: `text`,
                  fontFamily: `heading`,
                  letterSpacing: `-0.03em`,
                }}
              >
                {value}
              </span>
              <span
                sx={{
                  mt: 2,
                  fontSize: [0, 1],
                  color: `textMuted`,
                  fontFamily: `body`,
                  fontWeight: 500,
                  letterSpacing: `0.06em`,
                  textTransform: `uppercase`,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </Inner>
    </Content>
  </div>
);

export default Stats;
