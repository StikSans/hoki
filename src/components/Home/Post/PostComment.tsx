import { Coment } from "@/model/IPost.interface"
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react"
import { url } from "@/lib/api/config"
import { useGetOneUserByIdQuery, useGetUserByIdQuery } from "@/lib/api/user"

const PostComment = ({ comment }: { comment: Coment }) => {
  const { data: user } = useGetOneUserByIdQuery(comment.user_id)
  const { data } = useGetUserByIdQuery()

  return (
    <div>
      <Card>
        <CardHeader>
          <Avatar
            showFallback
            name={user?.name}
            isBordered
            radius="full"
            size="sm"
            src={user?.avatar ? `${url}/${user.avatar}` : ""}
          />
          <h4 className="text- font-bold ml-3">
            {`${user?.name} ${user?.sur_name}`}
          </h4>
        </CardHeader>
        <CardBody>
          <p>{comment.text}</p>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}
export default PostComment
