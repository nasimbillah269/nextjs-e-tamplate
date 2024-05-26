import comments from "@/data/comment";
export async function GET(request, { params }) {
  commentId = params.id;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return Response.json(comment);
}
