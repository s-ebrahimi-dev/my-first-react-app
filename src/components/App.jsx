import CourseCard from "./CourseCard/CourseCard";

function App() {
  return (
    <main>
      <CourseCard
        onWatch={() => console.log("Watch course")}
        onLike={() => console.log("Like course")}
      />
    </main>
  );
}

export default App;