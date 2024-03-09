import PostContainer from "@/components/Home/Post/PostContainer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Новости",
}

const Home = () => {
  return (
    <section>
      <PostContainer />
    </section>
  )
}
export default Home
