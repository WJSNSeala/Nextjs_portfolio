
// 스타일 정의
import {style} from "@vanilla-extract/css";
import {animations, colorPalette, glass} from "@/styles/design/design-system.css";

export const heroContainer = style({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  background: colorPalette.darkBg,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: colorPalette.textPrimary,
  zIndex: 1,
});

export const heroGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
  gap: '1rem',
  width: '90%',
  height: '90%',
});

export const canvas = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
});

export const nameText = style({
  fontSize: '6rem',
  fontWeight: 700,
  marginBottom: '1rem',
  position: 'relative',
  background: colorPalette.gradientPurple,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'white',
  transition: `transform ${animations.duration.normal} ${animations.easing.easeOut}`,
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

export const titleText = style({
  fontSize: '2rem',
  fontWeight: 500,
  marginBottom: '2rem',
  opacity: 0.9,
});

export const bioText = style({
  fontSize: '1.25rem',
  maxWidth: '600px',
  textAlign: 'center',
  lineHeight: 1.6,
  marginBottom: '2rem',
});

export const glassCard = style({
  background: glass.light.background,
  backdropFilter: 'blur(10px)',
  border: glass.dark.border,
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
});
