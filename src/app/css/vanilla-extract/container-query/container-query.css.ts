import { style } from "@vanilla-extract/css";

export const container = style({
  containerType: "inline-size",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
});

export const heading = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const description = style({
  marginBottom: "1rem",
  color: "#666",
});

export const grid = style({
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
});

export const card = style({
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  "@container": {
    "(min-width: 400px)": {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "1rem",
    },
  },
});

export const cardImage = style({
  width: "100%",
  aspectRatio: "16/9",
  backgroundColor: "#f0f0f0",
  borderRadius: "4px",
  marginBottom: "1rem",
  overflow: "hidden",
  "@container": {
    "(min-width: 400px)": {
      marginBottom: 0,
    },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
});

export const cardDescription = style({
  color: "#666",
  fontSize: "0.875rem",
});
