import { IPost } from "@/model/IPost.interface"
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react"

interface IPostItem {
  post: IPost
}

const PostItem = ({ post }: IPostItem) => {
  return (
    <Card className="max-w-[500px] mx-auto mb-3">
      <CardHeader>
        <Avatar isBordered radius="full" size="sm" src="sync.svg" />
        <h4 className="text-lg font-bold ml-3">
          {`${post.user.name} ${post.user.sur_name}`}
        </h4>
      </CardHeader>
      <CardBody>{post.text && <p>{post.text}</p>}</CardBody>
      <CardFooter>
        <Button
          variant="flat"
          radius="full"
          size="sm"
          startContent={<i className="fi fi-rr-heart text-[18px]"></i>}
        >
          {post.likes}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostItem
