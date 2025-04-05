import CommentList from '../../components/templates/comments/CommentList/CommentList'
import CommentManagement from '../../components/templates/comments/CommentManagement/CommentManagement'
import MetaTag from '../../hook/MetaTag/MetaTag'

function Comments() {
  return (
    <>
    <MetaTag title='Dashboard | Comments'/>
    <CommentManagement/>
    <CommentList/>
    </>
  )
}

export default Comments