import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({ posts }) => {
  return (
    <div
      className={`grid ${
        posts.length === 1
          ? "min-[1450px]:grid-cols-1"
          : posts.length === 2
          ? "min-[1450px]:grid-cols-2"
          : "min-[1450px]:grid-cols-3"
      } lg:grid-cols-2 md:grid-cols-1 gap-6 px-[5%] max-[800px]:px-[10%] place-self-center`}
    >
      {posts.map((post, idx) => (
        <div key={idx} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              loading="lazy"
              rel="preload"
              src={`assets/images/${post.previewImage}`}
              alt={post.title}
              className="max-h-80 w-full object-cover"
            />
          </figure>
          <div className="card-body justify-between text-sm">
            <h1 className="card-title text-secondary">{post.title}</h1>
            <p className="indent-0">{post.previewText}</p>
            <div className="card-actions mt-5 justify-center">
              <Link
                to={`/projects/${post.title.replace(/\s+/g, "-").toLowerCase()}`}
                state={{ post: post }}
                className="btn btn-primary"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                aria-label="Read more"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
