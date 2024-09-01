import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

export default function Piecomponents() {
  const theme = useTheme();
  const data = [
    {
      id: "javascript",
      label: "JavaScript",
      value: 29,
      color: "hsl(52, 70%, 50%)",
    },
    {
      id: "python",
      label: "Python",
      value: 21,
      color: "hsl(192, 70%, 50%)",
    },
    {
      id: "go",
      label: "Go",
      value: 14,
      color: "hsl(171, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "Ruby",
      value: 10,
      color: "hsl(348, 70%, 50%)",
    },
    {
      id: "scala",
      label: "Scala",
      value: 20,
      color: "hsl(25, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "Elixir",
      value: 25,
      color: "hsl(282, 70%, 50%)",
    },
    {
      id: "lisp",
      label: "Lisp",
      value: 24,
      color: "hsl(111, 70%, 50%)",
    },
    {
      id: "c",
      label: "C",
      value: 20,
      color: "hsl(33, 70%, 50%)",
    },
  ];

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsivePie
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          legends: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-180}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={16}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.5"]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsRadiusOffset={0.55}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          { match: { id: "ruby" }, id: "dots" },
          { match: { id: "c" }, id: "dots" },
          { match: { id: "go" }, id: "dots" },
          { match: { id: "python" }, id: "dots" },
          { match: { id: "scala" }, id: "lines" },
          { match: { id: "lisp" }, id: "lines" },
          { match: { id: "elixir" }, id: "lines" },
          { match: { id: "javascript" }, id: "lines" },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: theme.palette.text.primary,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.text.primary,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
