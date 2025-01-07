import { Clapperboard, DollarSign, MessageCircle, Share2 } from "lucide-react";
import { mockData } from "./mockData";
import { formatDate_HH_MM } from "./lib";

export function initData() {
  const data = {
    totalLikes: 0,
    totalComments: 0,
    totalShares: 0,
    images: 0,
    carousel: 0,
    reel: 0,
    months: new Map()
  }

  for (const post of mockData) {
    data.totalLikes = data.totalLikes + post.Likes;
    data.totalComments = data.totalComments + post.Comments;
    data.totalShares = data.totalShares + post.Shares;

    const earlierMonthCount = formatDate_HH_MM(new Date(post.Date))
    data.months.set(
      earlierMonthCount,
      (data.months.get(earlierMonthCount) || 0) + 1
    )

    switch (post.Type) {
      case "Carousel":
        data.carousel = data.carousel + 1
        break;
      case "Reel":
        data.reel = data.reel + 1
        break;
      case "Static":
        data.images = data.images + 1
        break;
      default:
        break;
    }
  }

  const totalPosts = mockData.length;
  return {
    ...data,
    totalPosts
  }
}

export function overviewHeaderCards(
  totalLikes,
  totalShares,
  totalComments,
  totalPosts
) {
  return [
    {
      id: 1,
      title: "Total Posts",
      amount: totalPosts,
      icon: <Clapperboard className="h-4 w-4 text-muted-foreground" />
    },
    {
      id: 2,
      title: "Total Shares",
      amount: totalShares,
      icon: <Share2 className="h-4 w-4 text-muted-foreground" />
    },
    {
      id: 3,
      title: "Total Comments",
      amount: totalComments,
      icon: <MessageCircle className="h-4 w-4 text-muted-foreground" />
    },
    {
      id: 4,
      title: "Total Likes",
      amount: totalLikes,
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
    },
  ];
}

export function overviewPieChart(
  images,
  carousel,
  reels
) {
  const chartData = [
    { postType: "static", visitors: images, fill: "var(--color-static)" },
    { postType: "carousel", visitors: carousel, fill: "var(--color-carousel)" },
    { postType: "reel", visitors: reels, fill: "var(--color-reel)" },
  ]

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    static: {
      label: "Static",
      color: "hsl(var(--chart-1))",
    },
    carousel: {
      label: "Carousel",
      color: "hsl(var(--chart-2))",
    },
    reel: {
      label: "Reel",
      color: "hsl(var(--chart-3))",
    }
  }

  return {
    chartConfig,
    chartData
  }
}