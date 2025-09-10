import React from "react";
import { useParams } from "react-router-dom";

function HookDetail() {
  const { id } = useParams();

  return <div>HookDetail {id}</div>;
}

export default HookDetail;
