import { Link } from "react-router-dom";
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="NotFoundBox">
        <h2>해당 페이지를 찾지 못했습니다.</h2>
        <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
        <Link to="/" className="LinkHome">메인 페이지로 이동</Link>
    </div>
  );
}
