"use server"
import { DashboardProvider } from "@/contexts/dasboardContext";

export default async function Layout({ children }) {
  return <DashboardProvider>
    {children}
  </DashboardProvider>
}