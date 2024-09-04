export default function Blog({ blog }) {
  let img = blog.image;
  let title = blog.title;
  let des = blog.description;
  return (
    <div className="max-w-[300px] h-[400px] border border-slate-400 m-6">
      <img src={img} />
      <div className="px-2">
        <h1 className="text-xl py-2">{title}</h1>
        <p className="pb-6 text-sm">{des}</p>

        <a
          href="#"
          className="px-7 py-2 bg-green-500 rounded-full text-white hover:shadow-md font-medium
        "
        >
          Read More
        </a>
      </div>
    </div>
  );
}
