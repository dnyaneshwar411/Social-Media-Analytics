"use client";
import useDashboardContent from "@/contexts/dasboardContext";
import { overviewPieChart } from "@/utils/utilities";
import PieChartComponent from "../core/pie-chart";

export default function OverviewPieChart() {
  const {
    images,
    carousel,
    reel
  } = useDashboardContent();

  const { chartConfig, chartData } = overviewPieChart(
    images,
    carousel,
    reel
  );

  if (!chartConfig && chartData) return <></>

  return <PieChartComponent
    chartConfig={chartConfig}
    chartData={chartData}
  />
}