const BlogsPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex items-center justify-between mt-10">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-butler font-medium">Filter:</h1>
          <button
            type="button"
            id="radix-:Rjffauda:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="flex items-center gap-3 border border-black font-butler font-medium rounded-md px-5 py-2"
          >
            All Blogs
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
