export default function Blog({ blog }) {
  let img = blog.image;
  let title = blog.title;
  let des = blog.description;
  return (
    <div className="max-w-[300px] h-[400px] border border-slate-400 m-6">
      <img src={img} />
      <div className="px-2 flex flex-col justify-between h-[50%]">
        <div>
          <h1 className="text-xl py-2">{title}</h1>
          <p className="pb-10 text-sm">{des}</p>
        </div>

        <div className="mb-4">
          <a
            href="#"
            className="px-7 py-2 bg-green-500 rounded-full text-white hover:shadow-md font-medium
        "
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
