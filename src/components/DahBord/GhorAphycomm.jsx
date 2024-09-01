import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { data } from "../GhoraphyChart/Dataghography";
import { geo } from "../GhoraphyChart/world_countries";

export default function GhoGraphyComponents() {
  let theme = useTheme();
  
  // إعداد ألوان وضع الداكن
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        height: "75vh",
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: '5px',
      }}
    >
      <ResponsiveChoropleth
        theme={{
          background: isDarkMode ? theme.palette.background.paper : "#ffffff",
          text: {
            fontSize: 11,
            fill: isDarkMode ? theme.palette.text.primary : "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: isDarkMode ? "#888888" : "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: isDarkMode ? theme.palette.text.primary : "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: isDarkMode ? "#888888" : "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: isDarkMode ? theme.palette.text.primary : "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: isDarkMode ? "#444444" : "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: isDarkMode ? theme.palette.text.primary : "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: isDarkMode ? theme.palette.text.primary : "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: isDarkMode ? theme.palette.text.primary : "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: isDarkMode ? theme.palette.text.primary : "#333333",
              outlineWidth: 2,
              outlineColor: isDarkMode ? theme.palette.background.paper : "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: isDarkMode ? "#ffffff" : "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: isDarkMode ? theme.palette.background.paper : "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: isDarkMode ? "#ffffff" : "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: isDarkMode ? theme.palette.background.paper : "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: isDarkMode ? "#ffffff" : "#000000",
              outlineWidth: 2,
              outlineColor: isDarkMode ? theme.palette.background.paper : "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: isDarkMode ? theme.palette.background.paper : "#ffffff",
              color: isDarkMode ? theme.palette.text.primary : "#333333",
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
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        domain={[0, 1500000000]} // تأكد من توافق النطاق مع بياناتك
        unknownColor={isDarkMode ? "#666666" : "#666666"}
        label="id"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor={isDarkMode ? "#444444" : "#dddddd"}
        borderWidth={0.5}
        borderColor={isDarkMode ? "#444444" : "#152538"}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: isDarkMode ? theme.palette.text.primary : "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: isDarkMode ? "#ffffff" : "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
