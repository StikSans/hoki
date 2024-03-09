import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@nextui-org/react"

const PostSkeleton = () => {
  return (
    <Card className="max-w-[500px] mx-auto mb-3">
      <CardHeader className="gap-3">
        <Skeleton className="rounded-full">
          <div className="w-[32px] h-[32px]"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="w-[100px] h-[24px]"></div>
        </Skeleton>
      </CardHeader>
      <CardBody className="gap-1">
        <Skeleton className="self-start rounded-lg">
          <div className="w-[100px] h-[14px]"></div>
        </Skeleton>
        <Skeleton className=" self-start rounded-lg">
          <div className="w-[150px] h-[14px]"></div>
        </Skeleton>
        <Skeleton className="self-start rounded-lg">
          <div className="w-[120px] h-[14px]"></div>
        </Skeleton>
      </CardBody>
      <CardFooter>
        <Skeleton className="self-start rounded-full">
          <div className="w-[62px] h-[35px]"></div>
        </Skeleton>
      </CardFooter>
    </Card>
  )
}

export default PostSkeleton
