import { useRouter } from "next/router";
import "../styles/Card.css";

export default function (props) 
{
    const {query} = useRouter()
  const { id, link, title, subtitle, getCardId, onCardClick } = props;
  return (
<div>Пользователь {query.id}</div>
  );
}