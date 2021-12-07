import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [catUrl, setCatUrl] = useState("");

  useEffect(() => {
    async function fetchCat() {
      const result: any = await axios.get("https://aws.random.cat/meow");

      setCatUrl(result.data.file);
    }
    fetchCat();
  }, []);
  return (
    <>
      <div>오픈 api 연습</div>
      <img src={catUrl} />
    </>
  );
}
