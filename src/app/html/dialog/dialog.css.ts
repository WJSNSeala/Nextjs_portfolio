import { style } from "@vanilla-extract/css";

export const DialogStyle = style({
  selectors: {
    "&[open]": {
      overlay: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      /* 마진 제거 (기본 마진이 있을 수 있음) */
      margin: 0,
    },
  },
});
