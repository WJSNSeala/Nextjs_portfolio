import { style } from "@vanilla-extract/css";

export const AnimatedDialogStyle = style({
  // 기본 상태 - 닫혔을 때
  opacity: 0,
  transform: "scaleY(0)",
  // dialog의 모든 상태 변화에 대한 transition 적용
  transition: "all 0.7s ease-out",

  selectors: {
    // 열린 상태
    "&[open]": {
      opacity: 1,
      transform: "scaleY(1)",
    },
    // backdrop 기본 상태
    "&::backdrop": {
      backgroundColor: "rgb(0 0 0 / 0%)",
      transition: "all 0.7s ease-out",
    },
    // backdrop 열린 상태
    "&[open]::backdrop": {
      backgroundColor: "rgb(0 0 0 / 25%)",
    },
    // @starting-style 열린 상태
    "@starting-style &[open]": {
      opacity: 0,
      transform: "scaleY(0)",
    },
    // @starting-style backdrop 열린 상태
    "@starting-style &[open]::backdrop": {
      backgroundColor: "rgb(0 0 0 / 0%)",
    },
  },
});
