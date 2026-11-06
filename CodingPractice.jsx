import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CodingPractice.css";

const languages = [
  {
    id: "c",
    name: "C",
    icon: "C",
    questions: [
      {
        title: "Print Hello World",
        difficulty: "Easy",
        description: "Write a C program to print Hello World.",
        hint: "Use printf() function.",
        solution: `#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}`,
      },
      {
        title: "Add Two Numbers",
        difficulty: "Easy",
        description: "Write a program to add two numbers.",
        hint: "Use two integer variables and the + operator.",
        solution: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("%d", a + b);
    return 0;
}`,
      },
      {
        title: "Even or Odd",
        difficulty: "Easy",
        description: "Check whether a number is even or odd.",
        hint: "Use the modulus operator (%).",
        solution: `#include <stdio.h>

int main() {
    int n = 7;

    if (n % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    return 0;
}`,
      },
    ],
  },

  {
    id: "cpp",
    name: "C++",
    icon: "C++",
    questions: [
      {
        title: "Print Hello World",
        difficulty: "Easy",
        description: "Write a C++ program to print Hello World.",
        hint: "Use cout.",
        solution: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`,
      },
      {
        title: "Add Two Numbers",
        difficulty: "Easy",
        description: "Write a program to add two numbers.",
        hint: "Use the + operator.",
        solution: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    cout << a + b;
    return 0;
}`,
      },
      {
        title: "Even or Odd",
        difficulty: "Easy",
        description: "Check whether a number is even or odd.",
        hint: "Use n % 2.",
        solution: `#include <iostream>
using namespace std;

int main() {
    int n = 7;

    if (n % 2 == 0)
        cout << "Even";
    else
        cout << "Odd";

    return 0;
}`,
      },
    ],
  },

  {
    id: "java",
    name: "Java",
    icon: "J",
    questions: [
      {
        title: "Print Hello World",
        difficulty: "Easy",
        description: "Write a Java program to print Hello World.",
        hint: "Use System.out.println().",
        solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
      },
      {
        title: "Add Two Numbers",
        difficulty: "Easy",
        description: "Write a program to add two numbers.",
        hint: "Use two integer variables.",
        solution: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        System.out.println(a + b);
    }
}`,
      },
      {
        title: "Even or Odd",
        difficulty: "Easy",
        description: "Check whether a number is even or odd.",
        hint: "Use the % operator.",
        solution: `public class Main {
    public static void main(String[] args) {
        int n = 7;

        if (n % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}`,
      },
    ],
  },

  {
    id: "python",
    name: "Python",
    icon: "PY",
    questions: [
      {
        title: "Print Hello World",
        difficulty: "Easy",
        description: "Write a Python program to print Hello World.",
        hint: "Use the print() function.",
        solution: `print("Hello World")`,
      },
      {
        title: "Add Two Numbers",
        difficulty: "Easy",
        description: "Write a program to add two numbers.",
        hint: "Use the + operator.",
        solution: `a = 10
b = 20

print(a + b)`,
      },
      {
        title: "Even or Odd",
        difficulty: "Easy",
        description: "Check whether a number is even or odd.",
        hint: "Use n % 2.",
        solution: `n = 7

if n % 2 == 0:
    print("Even")
else:
    print("Odd")`,
      },
    ],
  },

  {
    id: "javascript",
    name: "JavaScript",
    icon: "JS",
    questions: [
      {
        title: "Print Hello World",
        difficulty: "Easy",
        description: "Write a JavaScript program to print Hello World.",
        hint: "Use console.log().",
        solution: `console.log("Hello World");`,
      },
      {
        title: "Add Two Numbers",
        difficulty: "Easy",
        description: "Write a program to add two numbers.",
        hint: "Use the + operator.",
        solution: `let a = 10;
let b = 20;

console.log(a + b);`,
      },
      {
        title: "Even or Odd",
        difficulty: "Easy",
        description: "Check whether a number is even or odd.",
        hint: "Use the modulus operator (%).",
        solution: `let n = 7;

if (n % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}`,
      },
    ],
  },

  {
    id: "dsa",
    name: "DSA",
    icon: "DSA",
    questions: [
      {
        title: "Find Maximum Element",
        difficulty: "Easy",
        description: "Find the maximum element in an array using C++.",
        hint: "Start with the first element as maximum.",
        solution: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 25, 5, 40, 15};
    int maxValue = arr[0];

    for (int i = 1; i < 5; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    cout << maxValue;
    return 0;
}`,
      },
      {
        title: "Linear Search",
        difficulty: "Easy",
        description: "Find a target element in an array.",
        hint: "Check each element one by one.",
        solution: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40};
    int target = 30;

    for (int i = 0; i < 4; i++) {
        if (arr[i] == target) {
            cout << "Element found";
            return 0;
        }
    }

    cout << "Element not found";
    return 0;
}`,
      },
      {
        title: "Reverse an Array",
        difficulty: "Easy",
        description: "Print the elements of an array in reverse order.",
        hint: "Start looping from the last index.",
        solution: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};

    for (int i = 4; i >= 0; i--) {
        cout << arr[i] << " ";
    }

    return 0;
}`,
      },
    ],
  },
];

function CodingPractice() {
  const navigate = useNavigate();

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const [selectedQuestion, setSelectedQuestion] = useState(
    languages[0].questions[0]
  );

  const [code, setCode] = useState(
    languages[0].questions[0].solution
  );

  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [output, setOutput] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);

    const firstQuestion = language.questions[0];

    setSelectedQuestion(firstQuestion);
    setCode(firstQuestion.solution);

    setShowHint(false);
    setShowSolution(false);
  };

  const handleQuestionChange = (event) => {
    const question = selectedLanguage.questions.find(
      (item) => item.title === event.target.value
    );

    setSelectedQuestion(question);
    setCode(question.solution);

    setShowHint(false);
    setShowSolution(false);
  };

  const handleReset = () => {
    setCode(selectedQuestion.solution);
  };

 const handleRunCode = () => {
  setIsRunning(true);
  setOutput("");
  setSubmissionStatus("");

  setTimeout(() => {
    const currentCode = code.trim();

    if (!currentCode) {
      setOutput("Please write some code first.");
      setSubmissionStatus("Compilation Error");
      setIsRunning(false);
      return;
    }

    const questionTitle = selectedQuestion.title;

    let demoOutput = "";
    let status = "Accepted";

    if (questionTitle === "Print Hello World") {
      demoOutput = "Hello World";
    } else if (questionTitle === "Add Two Numbers") {
      demoOutput = "30";
    } else if (questionTitle === "Even or Odd") {
      demoOutput = "Odd";
    } else if (questionTitle === "Find Maximum Element") {
      demoOutput = "40";
    } else if (questionTitle === "Linear Search") {
      demoOutput = "Element found";
    } else if (questionTitle === "Reverse an Array") {
      demoOutput = "50 40 30 20 10";
    } else {
      demoOutput = "Demo output generated successfully.";
    }

    if (customInput.trim()) {
      demoOutput += "\n\nInput received:\n" + customInput;
    }

    setOutput(demoOutput);
    setSubmissionStatus(status);
    setIsRunning(false);
  }, 1000);
};

  return (
    <div className="coding-practice">
      {/* Header */}

      <header className="practice-header">
        <div>
          <p className="practice-label">CAMPUSCODE</p>

          <h1>Coding Practice</h1>

          <p>
            Practice coding, solve problems, and improve your skills.
          </p>
        </div>

        <button
          className="back-dashboard"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>
      </header>

      {/* Language Sections */}

      <section className="language-section">
        <div className="language-heading">
          <div>
            <p className="practice-label">CHOOSE YOUR LANGUAGE</p>

            <h2>Practice by Language</h2>
          </div>
        </div>

        <div className="language-grid">
          {languages.map((language) => (
            <button
              key={language.id}
              className={`language-card ${
                selectedLanguage.id === language.id
                  ? "selected-language"
                  : ""
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <span className="language-icon">
                {language.icon}
              </span>

              <span className="language-name">
                {language.name}
              </span>

              <span className="language-count">
                {language.questions.length} Problems
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Practice Area */}

      <div className="practice-layout">
        {/* Question Panel */}

        <div className="question-panel">
          <div className="panel-heading">
            <div>
              <p className="practice-label">
                {selectedLanguage.name.toUpperCase()} PRACTICE
              </p>

              <h2>Choose a Question</h2>
            </div>
          </div>

          <select
            value={selectedQuestion.title}
            onChange={handleQuestionChange}
            className="question-select"
          >
            {selectedLanguage.questions.map((question) => (
              <option
                key={question.title}
                value={question.title}
              >
                {question.title}
              </option>
            ))}
          </select>

          <div className="question-details">
            <span className="easy-badge">
              {selectedQuestion.difficulty}
            </span>

            <h2>{selectedQuestion.title}</h2>

            <p>{selectedQuestion.description}</p>
          </div>

          <button
            className="hint-button"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && (
            <div className="hint-box">
              <strong>Hint:</strong> {selectedQuestion.hint}
            </div>
          )}

          <button
            className="solution-button"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>

          {showSolution && (
            <pre className="solution-box">
              {selectedQuestion.solution}
            </pre>
          )}
        </div>

        {/* Code Editor */}

        <div className="editor-panel">
          <div className="editor-header">
            <div>
              <p className="practice-label">WRITE YOUR CODE</p>

              <h2>Code Editor</h2>
            </div>

            <span className="editor-language">
              {selectedLanguage.name}
            </span>
          </div>

          <textarea
            className="code-editor"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck="false"
            placeholder="Write your code here..."
          />

          <div className="editor-actions">
          {/* Custom Input */}

          <div className="input-console">
            <h3>Custom Input</h3>

            <textarea
              className="custom-input"
              value={customInput}
              onChange={(event) => setCustomInput(event.target.value)}
              placeholder="Enter input here..."
            />
          </div>

          {/* Output Console */}

          <div className="output-console">
            <div className="output-header">
              <h3>Output Console</h3>

              {submissionStatus && (
                <span
                  className={`submission-status ${
                    submissionStatus === "Accepted"
                      ? "status-accepted"
                      : "status-error"
                  }`}
                >
                  {submissionStatus}
                </span>
              )}
            </div>

            <div className="output-content">
              {isRunning ? (
                <p className="running-text">
                  Running your code...
                </p>
              ) : output ? (
                <pre>{output}</pre>
              ) : (
                <p className="empty-output">
                  Output will appear here after clicking Run Code.
                </p>
              )}
            </div>
          </div>
            <button
              className="reset-button"
              onClick={handleReset}
            >
              Reset Code
            </button>

            <button
            className="run-button"
            onClick={handleRunCode}
            disabled={isRunning}
          >
            {isRunning ? "Running..." : "▶ Run Code"}
          </button>
          </div>

          <p className="editor-note">
            Select a language, choose a problem, and start coding.
            Actual code execution will be connected using a compiler.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodingPractice;