export interface yelpReview {
  url: string,
  text: string,
  rating: number,
  user: {
    image_url: string,
    name: string
  },
  time_created: string
}
