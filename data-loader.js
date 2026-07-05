const FALLBACK_DATA = {
  
function resolveDataUrl(relativePath) {
  const path = window.location.pathname || "";
  if (path.includes("/data/")) {
    return `.${relativePath}`;
  }
  return `./${relativePath}`;
}

async function loadExamPrepData() {
  const result = {
    courses: [],
    questions: [],
    flashcards: []
  };

  const requests = [
    { key: "courses", path: "data/courses.json" },
    { key: "questions", path: "data/questions.json" },
    { key: "flashcards", path: "data/flashcards.json" }
  ];

  for (const request of requests) {
    try {
      const response = await fetch(resolveDataUrl(request.path), { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Unable to load ${request.path}`);
      }
      const data = await response.json();
      result[request.key] = Array.isArray(data) ? data : data[request.key] || [];
    } catch (error) {
      console.warn(`Falling back to embedded data for ${request.path}:`, error);
      result[request.key] = FALLBACK_DATA[request.key] || [];
    }
  }

  return result;
}

window.ExamPrepData = {
  load: loadExamPrepData
};
