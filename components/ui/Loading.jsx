import { Router } from "next/router";
import { useState } from "react";

export default function Loaidng() {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center bg-opacity-70 bg-slate-300 w-screen h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="loadingio-eclipse">
            <div className="ldio-rpinwye8j0b">
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
