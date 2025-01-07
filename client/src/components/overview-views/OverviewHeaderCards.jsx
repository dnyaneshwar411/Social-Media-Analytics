"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import useDashboardContent from "@/contexts/dasboardContext";
import { overviewHeaderCards } from "@/utils/utilities";

export function OverviewHeaderCards() {
  const {
    totalLikes,
    totalShares,
    totalComments,
    totalPosts
  } = useDashboardContent();

  const cards = overviewHeaderCards(
    totalLikes,
    totalShares,
    totalComments,
    totalPosts
  )
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map(card => <Card key={card.id} className="hover:scale-[1.05] hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
          {card.icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{card.amount}</div>
          {/* <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p> */}
        </CardContent>
      </Card>)}
    </div>
  )
}