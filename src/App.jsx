import BlogList from "./components/blogList";

export default function App() {
  return (
    <div>
      <h1 className="font-bold text-6xl text-center underline underline-offset-[20px] mb-10">
        Blog Daily
      </h1>
      <BlogList />
    </div>
  );
}
