
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get, set } from "firebase/database";

import { auth, database } from "./firebase";
import "./CourseDetails.css";

const courseData = {
  web: {
    title: "Full Stack Development",
    description:
      "Learn HTML, CSS, JavaScript, React and backend development.",
    icon: "🌐",
    lessons: [
      {
        title: "Introduction to Web Development",
        content:
          "Web development is the process of creating websites and web applications. It includes frontend development, backend development, and database management.",
        topics: ["What is web development?", "Frontend vs Backend", "How websites work"],
      },
      {
        title: "HTML Fundamentals",
        content:
          "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.",
        topics: ["HTML structure", "Headings and paragraphs", "Links and images", "Forms"],
      },
      {
        title: "CSS Fundamentals",
        content:
          "CSS stands for Cascading Style Sheets. It is used to style HTML elements and create attractive web pages.",
        topics: ["Selectors", "Colors and fonts", "Box model", "Flexbox and Grid"],
      },
      {
        title: "JavaScript Basics",
        content:
          "JavaScript is a programming language used to make websites interactive.",
        topics: ["Variables", "Data types", "Functions", "Conditions and loops"],
      },
      {
        title: "Introduction to React",
        content:
          "React is a JavaScript library used to build user interfaces using reusable components.",
        topics: ["What is React?", "JSX", "Components", "Props"],
      },
      {
        title: "React Components",
        content:
          "Components are reusable parts of a React application. They help organize the user interface.",
        topics: ["Functional components", "Props", "State", "Hooks"],
      },
      {
        title: "Backend Development",
        content:
          "Backend development handles server-side logic, databases, authentication, and APIs.",
        topics: ["Servers", "APIs", "Databases", "Authentication"],
      },
    ],
  },

  c: {
    title: "C Programming",
    description: "Learn programming fundamentals using the C language.",
    icon: "💻",
    lessons: [
      { title: "Introduction to C", content: "C is a general-purpose programming language used for system programming and application development.", topics: ["History of C", "Features", "Structure of a C program"] },
      { title: "Variables and Data Types", content: "Variables store values in memory. Data types define what kind of value a variable can hold.", topics: ["int", "float", "char", "Variables"] },
      { title: "Operators", content: "Operators perform operations on values and variables.", topics: ["Arithmetic", "Relational", "Logical", "Assignment"] },
      { title: "Conditional Statements", content: "Conditional statements execute code based on conditions.", topics: ["if", "if-else", "else-if", "switch"] },
      { title: "Loops", content: "Loops repeat a block of code while a condition is true.", topics: ["for loop", "while loop", "do-while loop"] },
      { title: "Functions", content: "Functions are reusable blocks of code that perform specific tasks.", topics: ["Function declaration", "Arguments", "Return values"] },
      { title: "Arrays", content: "Arrays store multiple values of the same data type in contiguous memory locations.", topics: ["Array declaration", "Indexing", "One-dimensional arrays"] },
    ],
  },

  cpp: {
    title: "C++ Programming",
    description: "Learn object-oriented programming with C++.",
    icon: "⚙️",
    lessons: [
      { title: "Introduction to C++", content: "C++ is a general-purpose programming language that supports procedural and object-oriented programming.", topics: ["Features", "Structure", "Compilation"] },
      { title: "Variables and Data Types", content: "Variables are named memory locations used to store values.", topics: ["int", "float", "char", "bool"] },
      { title: "Functions", content: "Functions help divide a program into reusable blocks.", topics: ["Function definition", "Parameters", "Return values"] },
      { title: "Classes and Objects", content: "Classes define the structure of objects. Objects are instances of classes.", topics: ["Class", "Object", "Access specifiers"] },
      { title: "Constructors", content: "Constructors initialize objects when they are created.", topics: ["Default constructor", "Parameterized constructor", "Copy constructor"] },
      { title: "Inheritance", content: "Inheritance allows one class to acquire properties and methods of another class.", topics: ["Base class", "Derived class", "Types of inheritance"] },
      { title: "Polymorphism", content: "Polymorphism allows the same interface to represent different behaviors.", topics: ["Function overloading", "Operator overloading", "Virtual functions"] },
    ],
  },

  python: {
    title: "Python Programming",
    description: "Learn Python for programming, automation and AI.",
    icon: "🐍",
    lessons: [
      { title: "Introduction to Python", content: "Python is a high-level programming language known for its simple syntax.", topics: ["Features", "Installation", "First program"] },
      { title: "Variables and Data Types", content: "Variables store data. Python supports several built-in data types.", topics: ["int", "float", "str", "bool"] },
      { title: "Operators", content: "Operators perform calculations and comparisons.", topics: ["Arithmetic", "Comparison", "Logical"] },
      { title: "Conditional Statements", content: "Conditions control which code runs.", topics: ["if", "if-else", "elif"] },
      { title: "Loops", content: "Loops repeat instructions.", topics: ["for", "while", "break", "continue"] },
      { title: "Functions", content: "Functions organize reusable code.", topics: ["def", "Parameters", "Return values"] },
      { title: "Lists and Dictionaries", content: "Lists store ordered collections. Dictionaries store key-value pairs.", topics: ["List operations", "Dictionary keys", "Dictionary values"] },
    ],
  },

  java: {
    title: "Java Programming",
    description: "Learn Java concepts and develop applications.",
    icon: "☕",
    lessons: [
      { title: "Introduction to Java", content: "Java is an object-oriented programming language used to build applications.", topics: ["JDK", "JRE", "JVM", "First program"] },
      { title: "Variables and Data Types", content: "Variables store data of specific types.", topics: ["Primitive types", "Variables", "Type conversion"] },
      { title: "Operators", content: "Operators perform calculations and comparisons.", topics: ["Arithmetic", "Relational", "Logical"] },
      { title: "Control Statements", content: "Control statements determine the flow of execution.", topics: ["if-else", "switch", "Loops"] },
      { title: "Classes and Objects", content: "Classes are blueprints and objects are instances of classes.", topics: ["Class", "Object", "Methods"] },
      { title: "Inheritance", content: "Inheritance allows a class to reuse properties and methods from another class.", topics: ["extends", "super", "Method overriding"] },
      { title: "Exception Handling", content: "Exception handling manages errors that occur during program execution.", topics: ["try", "catch", "finally", "throw"] },
    ],
  },

  dsa: {
    title: "Data Structures & Algorithms",
    description: "Improve problem-solving skills with DSA and coding challenges.",
    icon: "🧠",
    lessons: [
      { title: "Introduction to DSA", content: "DSA helps organize data and solve problems efficiently.", topics: ["Data structures", "Algorithms", "Time complexity"] },
      { title: "Arrays", content: "Arrays store elements in contiguous memory locations.", topics: ["Traversal", "Insertion", "Deletion", "Searching"] },
      { title: "Strings", content: "Strings are sequences of characters.", topics: ["String traversal", "Palindrome", "String operations"] },
      { title: "Linked Lists", content: "Linked lists connect nodes using pointers or references.", topics: ["Nodes", "Singly linked list", "Doubly linked list"] },
      { title: "Stacks", content: "Stacks follow the Last In, First Out (LIFO) principle.", topics: ["Push", "Pop", "Peek"] },
      { title: "Queues", content: "Queues follow the First In, First Out (FIFO) principle.", topics: ["Enqueue", "Dequeue", "Circular queue"] },
      { title: "Sorting Algorithms", content: "Sorting algorithms arrange data in a particular order.", topics: ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"] },
    ],
  },
};

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courseData[courseId];

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savingLesson, setSavingLesson] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [error, setError] = useState("");

  // Check Firebase authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);
      },
      (err) => {
        console.error("Authentication error:", err);
        setError("Login status check failed.");
        setAuthLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Load progress from Firebase
  useEffect(() => {
    if (authLoading) return;

    if (!user || !course) {
      setCompletedLessons([]);
      setLoading(false);
      return;
    }

    const loadProgress = async () => {
      setLoading(true);
      setError("");

      try {
        const progressRef = ref(
          database,
          `users/${user.uid}/courseProgress/${courseId}`
        );

        const snapshot = await get(progressRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const savedLessons = data.completedLessons || [];

          setCompletedLessons(
            Array.isArray(savedLessons) ? savedLessons : []
          );
        } else {
          setCompletedLessons([]);
        }
      } catch (err) {
        console.error("Progress loading error:", err);
        setError("Progress could not load. Check Firebase Database Rules.");
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user, authLoading, courseId, course]);

  // Mark lesson completed or incomplete
  const handleComplete = async (index) => {
    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    if (!course) return;

    setSavingLesson(index);
    setError("");

    try {
      const updatedLessons = completedLessons.includes(index)
        ? completedLessons.filter((lesson) => lesson !== index)
        : [...completedLessons, index];

      const progressRef = ref(
        database,
        `users/${user.uid}/courseProgress/${courseId}`
      );

      await set(progressRef, {
        completedLessons: updatedLessons,
        totalLessons: course.lessons.length,
        updatedAt: Date.now(),
      });

      setCompletedLessons(updatedLessons);
    } catch (err) {
      console.error("Progress saving error:", err);
      setError("Progress could not save. Check Firebase Database Rules.");
    } finally {
      setSavingLesson(null);
    }
  };

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <p>Please select a valid course.</p>
        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (authLoading || loading) {
    return (
      <div className="course-loading">
        <div className="course-spinner"></div>
        <h2>{authLoading ? "Checking login..." : "Loading your course..."}</h2>
      </div>
    );
  }

  const progress = Math.round(
    (completedLessons.length / course.lessons.length) * 100
  );

  return (
    <div className="course-details-page">
      <button
        className="back-button"
        onClick={() => navigate("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <section className="course-details-header">
        <div className="course-details-icon">{course.icon}</div>

        <p className="course-small-label">CAMPUSCODE / COURSE</p>

        <h1>{course.title}</h1>

        <p className="course-details-description">
          {course.description}
        </p>

        <div className="course-progress-details">
          <div className="course-progress-text">
            <span>Your Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div className="course-progress-track">
            <div style={{ width: `${progress}%` }}></div>
          </div>

          <p className="progress-subtext">
            {completedLessons.length} of {course.lessons.length} lessons completed
          </p>
        </div>
      </section>

      <section className="course-lessons-section">
        <div className="course-lessons-heading">
          <div>
            <p className="course-small-label">START LEARNING</p>
            <h2>Course Lessons</h2>
          </div>

          <span className="lesson-count">
            {completedLessons.length}/{course.lessons.length} Completed
          </span>
        </div>

        {error && <div className="course-error">{error}</div>}

        <div className="lessons-list">
          {course.lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(index);
            const isSaving = savingLesson === index;

            return (
              <article className="lesson-item" key={index}>
                <div className="lesson-info">
                  <span
                    className={
                      isCompleted
                        ? "lesson-number lesson-done"
                        : "lesson-number"
                    }
                  >
                    {isCompleted ? "✓" : index + 1}
                  </span>

                  <div>
                    <h3>{lesson.title}</h3>
                    <p>Lesson {index + 1}</p>
                  </div>
                </div>

                <div className="lesson-actions">
                  <button
                    type="button"
                    className="open-lesson-button"
                    onClick={() => setSelectedLesson(index)}
                  >
                    Open Lesson
                  </button>

                  <button
                    type="button"
                    className={
                      isCompleted
                        ? "completed-button"
                        : "complete-button"
                    }
                    onClick={() => handleComplete(index)}
                    disabled={savingLesson !== null}
                  >
                    {isSaving
                      ? "Saving..."
                      : isCompleted
                      ? "Completed ✓"
                      : "Mark Completed"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {selectedLesson !== null && (
        <div
          className="lesson-modal-overlay"
          onClick={() => setSelectedLesson(null)}
        >
          <div
            className="lesson-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lesson-modal-close"
              onClick={() => setSelectedLesson(null)}
              aria-label="Close lesson"
            >
              ×
            </button>

            <p className="course-small-label">
              LESSON {selectedLesson + 1}
            </p>

            <h2>{course.lessons[selectedLesson].title}</h2>

            <p className="lesson-modal-content">
              {course.lessons[selectedLesson].content}
            </p>

            <h3>What you will learn</h3>

            <ul className="lesson-topics">
              {course.lessons[selectedLesson].topics.map((topic, index) => (
                <li key={index}>✓ {topic}</li>
              ))}
            </ul>

            <button
              className={
                completedLessons.includes(selectedLesson)
                  ? "completed-button modal-complete-button"
                  : "complete-button modal-complete-button"
              }
              onClick={async () => {
                await handleComplete(selectedLesson);
              }}
              disabled={savingLesson !== null}
            >
              {savingLesson === selectedLesson
                ? "Saving..."
                : completedLessons.includes(selectedLesson)
                ? "Completed ✓"
                : "Mark Lesson Completed"}
            </button>

            <div className="lesson-modal-navigation">
              <button
                disabled={selectedLesson === 0}
                onClick={() =>
                  setSelectedLesson((current) => current - 1)
                }
              >
                ← Previous
              </button>

              <button
                disabled={selectedLesson === course.lessons.length - 1}
                onClick={() =>
                  setSelectedLesson((current) => current + 1)
                }
              >
                Next Lesson →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
