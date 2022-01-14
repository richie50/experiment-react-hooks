import "./styles.scss";

import { Link, Outlet } from "react-router-dom";
import React, { useMemo } from "react";

import Groceries from "../../../components/grocery/Groceries";
import { getList } from "../../../mock";
import useHttp from "../../../hooks/use-http";

function HomePage() {
  const lists = useMemo(() => {
    return getList();
  }, []);

  console.log(lists);

  const { data, loading, error } = useHttp(
    "https://api.github.com/users/richie50",
    "GET",
    null
  );
  console.log("In hook ", data, loading, error);
  return (
    <>
      {loading ? (
        <p>Loading ......</p>
      ) : (
        <main className="main-layout">
          <div className="main-layout__groceries">
            <Groceries listItems={lists} />
          </div>
        </main>
      )}
    </>
  );
}

export default HomePage;
