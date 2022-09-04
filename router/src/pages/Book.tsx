import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { CTX } from "../layouts/BooksLayout";

export default function Book() {
  const { id } = useParams();

  const { message } = useOutletContext<CTX>();

  return (
    <>
      <h4>
        Book id: {id} / '{message}'
      </h4>
    </>
  );
}
