import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-24 py-8 border-t">
      <p className="text-slate-500">
        Built by{" "}
        <a
          href="https://www.github.com/bptiago"
          target="_blank"
          className="border-b-2 border-slate-500 font-semibold"
        >
          bptiago
        </a>
        . The source code is avaible on{" "}
        <a
          href="https://www.github.com/bptiago/movie-viewer"
          target="_blank"
          className="border-b-2 border-slate-500 font-semibold"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
