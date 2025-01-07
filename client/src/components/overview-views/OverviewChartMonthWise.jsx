"use client";
import useDashboardContent from "@/contexts/dasboardContext";
import { Overview } from "../core/overview";

export default function OverviewChartMonthWise() {
  const { months } = useDashboardContent();

  // const data = [
  //   { name: "Jan", total: 1500 },
  //   { name: "Feb", total: 2800 },
  //   { name: "Mar", total: 1800 },
  //   { name: "Apr", total: 3500 },
  //   { name: "May", total: 1900 },
  //   { name: "Jun", total: 2500 },
  //   { name: "Jul", total: 2200 },
  //   { name: "Aug", total: 4800 },
  //   { name: "Sep", total: 3800 },
  //   { name: "Oct", total: 2800 },
  //   { name: "Nov", total: 4800 },
  //   { name: "Dec", total: 4300 },
  // ]

  if (!months) return

  const monthsData = Array.from(months).slice().sort(([keyA], [keyB]) => keyB.localeCompare(keyA)).map(([month, value]) => {
    return {
      name: month,
      total: value
    }
  });

  return <Overview
    data={monthsData}
  />
}