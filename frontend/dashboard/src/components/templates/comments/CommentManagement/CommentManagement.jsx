import './CommentManagement.css'
import { FaCheckDouble } from "react-icons/fa6";


function CommentManagement() {
  return (
   <section className="commentManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>Comment Management</h2>
                    <p>Review and moderate comments</p>
                </div>
                    <button className="btn">
                        <span className="icon">
                            <FaCheckDouble/>
                        </span>
                        <span className="text">
                            Approve All
                        </span>
                    </button>
            </div>
        </div>
   </section>
  )
}

export default CommentManagement