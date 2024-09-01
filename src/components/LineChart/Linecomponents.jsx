import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

export default function Linecomponents() {
  const theme = useTheme();
  const data = [
    {
      id: "car",
      color: "hsl(205, 70%, 50%)",
      data: [
        { x: "2013", y: 100 },
        { x: "2014", y: 110 },
        { x: "2015", y: 95 },
        { x: "2016", y: 120 },
        { x: "2017", y: 140 },
        { x: "2018", y: 130 },
        { x: "2019", y: 110 },
        { x: "2020", y: 120 },
        { x: "2021", y: 150 },
        { x: "2022", y: 100 },
        { x: "2023", y: 170 },
        { x: "2024", y: 180 },
      ],
    },
    {
      id: "bike",
      color: "hsl(95, 70%, 50%)",
      data: [
        { x: "2013", y: 60 },
        { x: "2014", y: 70 },
        { x: "2015", y: 65 },
        { x: "2016", y: 80 },
        { x: "2017", y: 90 },
        { x: "2018", y: 85 },
        { x: "2019", y: 70 },
        { x: "2020", y: 80 },
        { x: "2021", y: 90 },
        { x: "2022", y: 60 },
        { x: "2023", y: 100 },
        { x: "2024", y: 120 },
      ],
    },
    {
      id: "bus",
      color: "hsl(15, 70%, 50%)",
      data: [
        { x: "2013", y: 30 },
        { x: "2014", y: 40 },
        { x: "2015", y: 35 },
        { x: "2016", y: 50 },
        { x: "2017", y: 60 },
        { x: "2018", y: 55 },
        { x: "2019", y: 45 },
        { x: "2020", y: 50 },
        { x: "2021", y: 60 },
        { x: "2022", y: 40 },
        { x: "2023", y: 80 },
        { x: "2024", y: 90 },
      ],
    },
  ];

  const nivoTheme = {
    background: theme.palette.background.default,
    textColor: theme.palette.text.primary,
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: theme.palette.text.primary,
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 0,
      },
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
  };

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: "#ffffff",
              color: "#333333",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        theme={nivoTheme}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="yFormatted"
        pointLabelYOffset={-12}
        enableCrosshair={true}
        useMesh={true}
        legends={[]}
      />
    </Box>
  );
}
