import { style } from "@vanilla-extract/css";
import { animations, colorPalette, glass, breakpoints } from "@/styles/design/design-system.css";

export const heroContainer = style({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  background: colorPalette.darkBg,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: colorPalette.textPrimary,
  zIndex: 1,
  padding: '2rem',
});

export const canvas = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
});

// 벤토 그리드 레이아웃 정의
export const bentoGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '1rem',
  width: '100%',
  height: '100%',
  gridTemplateAreas: `
    "object object project-row1 project-row1 bio-row1 bio-row1"
    "object object project-row2 project-row2 bio-row2 bio-row2"
    "anim-text-row1 anim-text-row1  mouse-follow-character mouse-follow-character blank1 blank2"
    "anim-text-row2 anim-text-row2 mouse-follow-character mouse-follow-character blank3 blank4"
  `,
  '@media': {
    [`screen and (max-width: ${breakpoints.tablet})`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridTemplateAreas: `
        "object1 object2"
        "object3 object4"
        "project1 project2"
        "row1-1 row1-2"
        "row2-1 row2-2"
        "bio1 bio2"
        "anim1 anim2"
        "text1 text2"
        "char1 char2"
        "char3 char4"
        "blank1 blank2"
        "blank3 blank4"
      `,
    }
  }
});

// 기본 글래스 카드 스타일
export const glassCard = style({
  background: glass.dark.background,
  backdropFilter: 'blur(10px)',
  border: glass.dark.border,
  borderRadius: '16px',
  padding: '1.5rem',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: `all ${animations.duration.normal} ${animations.easing.easeOut}`,
  overflow: 'hidden',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    border: `1px solid ${colorPalette.accentBlue}`,
  }
});

// 공통 텍스트 스타일
export const nameText = style({
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: '0.5rem',
  position: 'relative',
  background: colorPalette.gradientPurple,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  transition: `transform ${animations.duration.normal} ${animations.easing.easeOut}`,
  ':hover': {
    transform: 'translateY(-5px)',
  },
  '@media': {
    [`screen and (max-width: ${breakpoints.tablet})`]: {
      fontSize: '2rem',
    }
  }
});

export const titleText = style({
  fontSize: '1.5rem',
  fontWeight: 500,
  marginBottom: '1rem',
  opacity: 0.9,
  '@media': {
    [`screen and (max-width: ${breakpoints.tablet})`]: {
      fontSize: '1.2rem',
    }
  }
});

export const bioText = style({
  fontSize: '1rem',
  lineHeight: 1.6,
  textAlign: 'center',
  '@media': {
    [`screen and (max-width: ${breakpoints.tablet})`]: {
      fontSize: '0.9rem',
    }
  }
});