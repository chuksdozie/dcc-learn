import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface CourseData {
  id: number;
  level: string;
  content: any[];
}

const CoursePage = () => {
  const router = useRouter();
  const [courseData, setCourseData] = useState<CourseData[] | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadCourse = async () => {
      if (router?.query?.id) {
        try {
          // Dynamically import the course module
          const courseModule = await import(
            `../../data/courses/${router.query.id}.ts`
          );
          console.log({ courseModule: courseModule.data });

          if (courseModule?.data) {
            setCourseData(courseModule.data);
          } else {
            throw new Error("Invalid course structure");
          }
        } catch (error) {
          console.error("Error loading course:", error);
          setError("Course not found or failed to load.");
        }
      }
    };

    loadCourse();
  }, [router.query.id]);

  if (error) return <p>{error}</p>;
  if (!courseData) return <p>Loading course...</p>;

  return (
    <div>
      <h1>Course Page</h1>
      {courseData.map((item) => (
        <div key={item.id}>
          <h2>{item.level}</h2>
          <p>Content Count: {item.content.length}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
