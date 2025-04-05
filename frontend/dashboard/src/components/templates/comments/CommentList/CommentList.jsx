import { FaSearch } from "react-icons/fa";
import "./CommentList.css";
import { useTranslation } from 'react-i18next';

function CommentList() {
  const {t} = useTranslation()
  return (
    <section className="commentList box">
      <div className="commentList_management">
        <h2 className="title_header">{t("Recent Comments")}</h2>
        <div className="commentList_search">
          <input
            type="text"
            className="form_input"
            placeholder={t("Search Comments")}
          />
          <button className="btn">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="items">
        <div className="item">
          <div>
            <div className="item_profile">
              <img src="" alt="" />
              <div>
                <p>John Doe</p>
                <small>On Iphone 13 Pro</small>
              </div>
            </div>
            <div className="btn_action">
              <button className="btn_save">{t("Approve")}</button>
              <button className="btn_delete">{t("Reject")}</button>
            </div>
          </div>
          <p>Great product! The camera quality is amazing and battery life is exceptional.</p>
        </div>
        <div className="item">
          <div>
            <div className="item_profile">
              <img src="" alt="" />
              <div>
                <p>John Doe</p>
                <small>On Iphone 13 Pro</small>
              </div>
            </div>
            <div className="btn_action">
              <button className="btn_save">{t("Approve")}</button>
              <button className="btn_delete">{t("Reject")}</button>
            </div>
          </div>
          <p>Great product! The camera quality is amazing and battery life is exceptional.</p>
        </div>
      </div>
    </section>
  );
}

export default CommentList;
