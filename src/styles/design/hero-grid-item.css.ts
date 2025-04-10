import { style } from "@vanilla-extract/css";
import { glass } from "@/styles/design/design-system.css";

// 3D Object 그리드 아이템 (2x2 사이즈)
export const objectGridItem = style({
  gridArea: "object",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

// 프로젝트 그리드 아이템
export const project1GridItem = style({
  gridArea: "project-row1",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

export const project2GridItem = style({
  gridArea: "project-row2",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

// Bio 그리드 아이템
export const bio1GridItem = style({
  gridArea: "bio-row1",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

export const bio2GridItem = style({
  gridArea: "bio-row2",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

// 애니메이션 텍스트 영역
export const animTextRow1 = style({
  gridArea: "anim-text-row1",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

export const animTextRow2 = style({
  gridArea: "anim-text-row2",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

// 캐릭터 그리드 아이템 (2x2 크기)
export const mouseFollow3DCharacter = style({
  gridArea: "mouse-follow-character",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

// 빈 그리드 아이템
export const blank1GridItem = style({
  gridArea: "blank1",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});

export const blank2GridItem = style({
  gridArea: "blank2",
  background: glass.light.background,
  backdropFilter: "blur(10px)",
  border: glass.dark.border,
});
