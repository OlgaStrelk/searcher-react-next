import { useRouter } from "next/router";

export default function () {
  const { query } = useRouter();
  console.log(`query,  ${query} `);
  return <div>Пользователь {query.id}</div>;
}
