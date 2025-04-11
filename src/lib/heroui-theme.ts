// Hero UI 主题配置文件
// 这个文件定义了 Hero UI 在全局使用的主题颜色和变量

export const heroColors = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },
  // 添加其他颜色...
};

// 导出主题配置，可以在 provider.tsx 中使用
export const heroTheme = {
  colors: heroColors,
  fonts: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  // 可以添加更多配置...
}; 