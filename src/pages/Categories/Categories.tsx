import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getStore, getStoreJson } from "../../util/tool";

type Props = {};

export default function Categories({}: Props) {
  const params = useParams();
const jobCate = getStoreJson("jobCate")
console.log(jobCate[0].tenLoaiCongViec)

  let { id } = params;
  useEffect(() => {
    console.log(id);
  }, [params.id]);
  return <div className="container">
    {/* banner */}
    <div className="banner"></div>


{/* content */}


  </div>;
}
