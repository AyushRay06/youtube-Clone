import { VideoCard } from "./VideoCard"

const Videos = [
  {
    title: "Brock Lesner wins Money In The Bank",
    image: "thumb1.webp",
    icon: "icon1.jpg",
    author: "WWE",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "I DESERVE TO BE EXECUTED",
    image: "thumb2.webp",
    icon: "icon2.jpg",
    author: "Cell Mate",
    views: "10M",
    days: "1 year ago",
  },
  {
    title: "That's Life | JOKER",
    image: "thumb3.webp",
    icon: "icon3.jpg",
    author: "JOKER",
    views: "167k",
    days: "1 month ago",
  },
  {
    title: "Street Fight Kills In the UFC",
    image: "thumb4.webp",
    icon: "icon4.jpg",
    author: "VS",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Sidemen THE CHASE",
    image: "thumb5.webp",
    icon: "icon5.jpg",
    author: "Sidemen",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Death row Documentary",
    image: "thumb6.webp",
    icon: "icon6.jpg",
    author: "OUR",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Brock Lesner wins Money In The Bank",
    image: "thumb1.webp",
    icon: "icon1.jpg",
    author: "WWE",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "I DESERVE TO BE EXECUTED",
    image: "thumb2.webp",
    icon: "icon2.jpg",
    author: "Cell Mate",
    views: "10M",
    days: "1 year ago",
  },
  {
    title: "That's Life | JOKER",
    image: "thumb3.webp",
    icon: "icon3.jpg",
    author: "JOKER",
    views: "167k",
    days: "1 month ago",
  },
  {
    title: "Street Fight Kills In the UFC",
    image: "thumb4.webp",
    icon: "icon4.jpg",
    author: "VS",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Sidemen THE CHASE",
    image: "thumb5.webp",
    icon: "icon5.jpg",
    author: "Sidemen",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Death row Documentary",
    image: "thumb6.webp",
    icon: "icon6.jpg",
    author: "OUR",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Brock Lesner wins Money In The Bank",
    image: "thumb1.webp",
    icon: "icon1.jpg",
    author: "WWE",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "I DESERVE TO BE EXECUTED",
    image: "thumb2.webp",
    icon: "icon2.jpg",
    author: "Cell Mate",
    views: "10M",
    days: "1 year ago",
  },
  {
    title: "That's Life | JOKER",
    image: "thumb3.webp",
    icon: "icon3.jpg",
    author: "JOKER",
    views: "167k",
    days: "1 month ago",
  },
  {
    title: "Street Fight Kills In the UFC",
    image: "thumb4.webp",
    icon: "icon4.jpg",
    author: "VS",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Sidemen THE CHASE",
    image: "thumb5.webp",
    icon: "icon5.jpg",
    author: "Sidemen",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Death row Documentary",
    image: "thumb6.webp",
    icon: "icon6.jpg",
    author: "OUR",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Brock Lesner wins Money In The Bank",
    image: "thumb1.webp",
    icon: "icon1.jpg",
    author: "WWE",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "I DESERVE TO BE EXECUTED",
    image: "thumb2.webp",
    icon: "icon2.jpg",
    author: "Cell Mate",
    views: "10M",
    days: "1 year ago",
  },
  {
    title: "That's Life | JOKER",
    image: "thumb3.webp",
    icon: "icon3.jpg",
    author: "JOKER",
    views: "167k",
    days: "1 month ago",
  },
  {
    title: "Street Fight Kills In the UFC",
    image: "thumb4.webp",
    icon: "icon4.jpg",
    author: "VS",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Sidemen THE CHASE",
    image: "thumb5.webp",
    icon: "icon5.jpg",
    author: "Sidemen",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Death row Documentary",
    image: "thumb6.webp",
    icon: "icon6.jpg",
    author: "OUR",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Brock Lesner wins Money In The Bank",
    image: "thumb1.webp",
    icon: "icon1.jpg",
    author: "WWE",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "I DESERVE TO BE EXECUTED",
    image: "thumb2.webp",
    icon: "icon2.jpg",
    author: "Cell Mate",
    views: "10M",
    days: "1 year ago",
  },
  {
    title: "That's Life | JOKER",
    image: "thumb3.webp",
    icon: "icon3.jpg",
    author: "JOKER",
    views: "167k",
    days: "1 month ago",
  },
  {
    title: "Street Fight Kills In the UFC",
    image: "thumb4.webp",
    icon: "icon4.jpg",
    author: "VS",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Sidemen THE CHASE",
    image: "thumb5.webp",
    icon: "icon5.jpg",
    author: "Sidemen",
    views: "43M",
    days: "10 days ago",
  },
  {
    title: "Death row Documentary",
    image: "thumb6.webp",
    icon: "icon6.jpg",
    author: "OUR",
    views: "43M",
    days: "10 days ago",
  },
]

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
      {Videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            icon={video.icon}
            author={video.author}
            days={video.days}
            views={video.views}
          ></VideoCard>
        </div>
      ))}
    </div>
  )
}
