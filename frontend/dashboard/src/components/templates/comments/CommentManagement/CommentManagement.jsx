import './CommentManagement.css'
import { FaCheckDouble } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';


function CommentManagement() {
    const {t} =useTranslation()
  return (
   <section className="commentManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Comment Management")}</h2>
                    <p>{t("Review and moderate comments")}</p>
                </div>
                    <button className="btn">
                        <span className="icon">
                            <FaCheckDouble/>
                        </span>
                        <span className="text">
                           {t("Approve All")}
                        </span>
                    </button>
            </div>
        </div>
   </section>
  )
}

export default CommentManagement