// UIL EDT 202 - First batch (70 questions)
// Exposes `UIL_EDT_202` for browser and CommonJS environments.

const UIL_EDT_202_QUESTIONS = [
  { id: 1, question: "A computer is best described as a machine that:", choices: { A: "Stores only numerical data", B: "Accepts data, processes it, and produces information", C: "Connects users to the internet", D: "Performs calculations without instructions" }, answer: "B" },
  { id: 2, question: "Which of the following represents the correct Information Processing Cycle?", choices: { A: "Process → Input → Output", B: "Input → Process → Output", C: "Output → Input → Storage", D: "Storage → Output → Process" }, answer: "B" },
  { id: 3, question: "Raw facts that have not yet been processed into meaningful form are known as:", choices: { A: "Information", B: "Knowledge", C: "Data", D: "Records" }, answer: "C" },
  { id: 4, question: "Which of the following is an example of alphanumeric data?", choices: { A: "4567", B: "University", C: "AE731LRN", D: "####" }, answer: "C" },
  { id: 5, question: "The transformation of data into a meaningful form is called:", choices: { A: "Encoding", B: "Information", C: "Compilation", D: "Classification" }, answer: "B" },
  { id: 6, question: "Computer operations involving comparison such as greater than or less than are known as:", choices: { A: "Arithmetic operations", B: "Logical operations", C: "Statistical operations", D: "Computational operations" }, answer: "B" },
  { id: 7, question: "The speed of modern computers is commonly measured in:", choices: { A: "Kilograms", B: "Nanoseconds and Microseconds", C: "Litres", D: "Meters" }, answer: "B" },
  { id: 8, question: "The acronym GIGO stands for:", choices: { A: "Garbage In, Garbage Out", B: "General Information Goes Online", C: "Good Input Gives Output", D: "Global Internet Gateway Operation" }, answer: "A" },
  { id: 9, question: "Which characteristic enables a computer to work continuously without fatigue?", choices: { A: "Flexibility", B: "Accuracy", C: "Diligence", D: "Speed" }, answer: "C" },
  { id: 10, question: "Automatic control in computers means that:", choices: { A: "The computer repairs itself.", B: "The computer operates under stored instructions after initiation.", C: "The computer works without electricity.", D: "The computer never requires maintenance." }, answer: "B" },
  { id: 11, question: "Computers are classified according to all EXCEPT:", choices: { A: "Generation", B: "Size", C: "Usage", D: "Colour" }, answer: "D" },
  { id: 12, question: "The first generation of computers primarily used:", choices: { A: "Integrated Circuits", B: "Vacuum Tubes", C: "Transistors", D: "Microprocessors" }, answer: "B" },
  { id: 13, question: "Which programming languages were mainly used during the first generation?", choices: { A: "Python", B: "Java", C: "Machine and Assembly Languages", D: "C#" }, answer: "C" },
  { id: 14, question: "One disadvantage of first-generation computers was that they:", choices: { A: "Consumed little electricity", B: "Were portable", C: "Generated enormous heat", D: "Used touchscreens" }, answer: "C" },
  { id: 15, question: "The major electronic component introduced in second-generation computers was:", choices: { A: "Vacuum Tube", B: "Integrated Circuit", C: "Transistor", D: "Microprocessor" }, answer: "C" },
  { id: 16, question: "Third-generation computers were characterized by:", choices: { A: "Vacuum Tubes", B: "Magnetic Drums", C: "Integrated Circuits", D: "Artificial Intelligence" }, answer: "C" },
  { id: 17, question: "Time-sharing operating systems became popular during the:", choices: { A: "First Generation", B: "Second Generation", C: "Third Generation", D: "Fifth Generation" }, answer: "C" },
  { id: 18, question: "Microprocessors were introduced during the:", choices: { A: "First Generation", B: "Second Generation", C: "Fourth Generation", D: "Fifth Generation" }, answer: "C" },
  { id: 19, question: "Fifth-generation computers emphasize:", choices: { A: "Vacuum Tubes", B: "Artificial Intelligence", C: "Magnetic Tapes", D: "Punch Cards" }, answer: "B" },
  { id: 20, question: "Which computer type measures continuously varying quantities?", choices: { A: "Digital Computer", B: "Hybrid Computer", C: "Analogue Computer", D: "Notebook Computer" }, answer: "C" },
  { id: 21, question: "A computer that combines analogue and digital technologies is called:", choices: { A: "Hybrid Computer", B: "Mainframe Computer", C: "Supercomputer", D: "Workstation" }, answer: "A" },
  { id: 22, question: "Which computer classification is commonly used in banks and examination bodies?", choices: { A: "Notebook Computer", B: "Mainframe Computer", C: "PDA", D: "Palmtop" }, answer: "B" },
  { id: 23, question: "Which computer possesses the highest processing speed?", choices: { A: "Notebook", B: "Microcomputer", C: "Supercomputer", D: "Minicomputer" }, answer: "C" },
  { id: 24, question: "A Personal Computer (PC) is another name for:", choices: { A: "Mainframe", B: "Supercomputer", C: "Microcomputer", D: "Hybrid Computer" }, answer: "C" },
  { id: 25, question: "Special-purpose computers are designed to:", choices: { A: "Perform only one specific task", B: "Run all applications", C: "Browse the internet", D: "Replace mainframes" }, answer: "A" },
  { id: 26, question: "General-purpose computers are characterized by:", choices: { A: "Permanent single programs", B: "Flexibility in handling different tasks", C: "Lack of storage", D: "No operating system" }, answer: "B" },
  { id: 27, question: "Which of the following is NOT a disadvantage of computers?", choices: { A: "Partial unemployment", B: "Need for staff training", C: "High processing speed", D: "High initial cost" }, answer: "C" },
  { id: 28, question: "The earliest counting device discussed in the lecture note is:", choices: { A: "ENIAC", B: "Abacus", C: "Pascaline", D: "Hollerith Machine" }, answer: "B" },
  { id: 29, question: "The Abacus can efficiently perform:", choices: { A: "Image Processing", B: "Addition and Subtraction", C: "Video Editing", D: "Programming" }, answer: "B" },
  { id: 30, question: "Who invented the Pascaline?", choices: { A: "Charles Babbage", B: "Blaise Pascal", C: "Herman Hollerith", D: "Ada Lovelace" }, answer: "B" },
  { id: 31, question: "Joseph Marie Jacquard is famous for inventing the:", choices: { A: "Difference Engine", B: "Punch Card Loom", C: "ENIAC", D: "Analytical Engine" }, answer: "B" },
  { id: 32, question: "Charles Babbage is widely regarded as the:", choices: { A: "Father of Artificial Intelligence", B: "Father of the Computer", C: "Inventor of the Internet", D: "Creator of Linux" }, answer: "B" },
  { id: 33, question: "Ada Lovelace is recognized as:", choices: { A: "The first systems analyst", B: "The first computer programmer", C: "The first database designer", D: "The first software engineer" }, answer: "B" },
  { id: 34, question: "Herman Hollerith's punch card machine was first successfully used for:", choices: { A: "Weather Forecasting", B: "Population Census", C: "Banking", D: "Mobile Learning" }, answer: "B" },
  { id: 35, question: "John Von Neumann's greatest contribution to computer architecture was the introduction of:", choices: { A: "Cloud Computing", B: "Stored Program Concept", C: "Artificial Intelligence", D: "Object-Oriented Programming" }, answer: "B" },
  { id: 36, question: "Mobile learning (m-learning) refers to:", choices: { A: "Learning that only occurs in computer laboratories", B: "Learning through television broadcasts", C: "Learning using portable digital devices anytime and anywhere", D: "Learning that requires wired internet connections only" }, answer: "C" },
  { id: 37, question: "Which of the following devices is most commonly associated with mobile learning?", choices: { A: "Desktop computer", B: "Smartphone", C: "Mainframe computer", D: "Supercomputer" }, answer: "B" },
  { id: 38, question: "Mobile learning is considered an evolution of:", choices: { A: "Distance learning", B: "Virtual reality", C: "E-learning", D: "Blended learning" }, answer: "C" },
  { id: 39, question: "One major advantage of mobile learning is that it promotes:", choices: { A: "Fixed classroom attendance", B: "Ubiquitous access to learning resources", C: "Dependence on printed textbooks", D: "Teacher-centered instruction only" }, answer: "B" },
  { id: 40, question: "Which of the following is NOT a benefit of mobile learning?", choices: { A: "Flexible learning", B: "Self-paced learning", C: "Continuous access to resources", D: "Restriction to classroom learning" }, answer: "D" },
  { id: 41, question: "Mobile learning applications commonly operate through all EXCEPT:", choices: { A: "Mobile applications", B: "Web-based platforms", C: "Learning Management Systems", D: "Mechanical calculators" }, answer: "D" },
  { id: 42, question: "Mobile application development is the process of:", choices: { A: "Repairing damaged smartphones", B: "Designing, developing, testing, and maintaining mobile applications", C: "Manufacturing mobile devices", D: "Installing operating systems" }, answer: "B" },
  { id: 43, question: "The first stage of mobile application development is:", choices: { A: "Deployment", B: "Maintenance", C: "Planning and Analysis", D: "Testing" }, answer: "C" },
  { id: 44, question: "Detecting and fixing software bugs occurs during the:", choices: { A: "Analysis phase", B: "Testing phase", C: "Design phase", D: "Maintenance phase" }, answer: "B" },
  { id: 45, question: "Launching a completed mobile application for users is known as:", choices: { A: "Deployment", B: "Evaluation", C: "Coding", D: "Documentation" }, answer: "A" },
  { id: 46, question: "Applications that allow teachers to upload materials, assign tasks, and track grades are called:", choices: { A: "Game-Based Applications", B: "Learning Management Applications", C: "Communication Applications", D: "Entertainment Applications" }, answer: "B" },
  { id: 47, question: "Educational apps that use videos, animations, and quizzes primarily belong to:", choices: { A: "Interactive Learning Applications", B: "Banking Applications", C: "Navigation Applications", D: "Security Applications" }, answer: "A" },
  { id: 48, question: "Game-based learning applications motivate learners through:", choices: { A: "Advertisements", B: "Rewards and challenges", C: "Long essays", D: "Password protection" }, answer: "B" },
  { id: 49, question: "Applications designed mainly for distributing lecture notes and e-books are:", choices: { A: "Skill Development Applications", B: "Content Delivery Applications", C: "Productivity Applications", D: "Health Applications" }, answer: "B" },
  { id: 50, question: "Coding applications such as Sololearn are examples of:", choices: { A: "Content Delivery Apps", B: "Skill Development Applications", C: "Entertainment Apps", D: "Banking Apps" }, answer: "B" },
  { id: 51, question: "Behaviorist learning theory is mainly associated with:", choices: { A: "Jean Piaget", B: "David Kolb", C: "B.F. Skinner", D: "George Siemens" }, answer: "C" },
  { id: 52, question: "According to behaviorism, learning occurs mainly through:", choices: { A: "Observation of nature", B: "Conditioning and reinforcement", C: "Dreams", D: "Memorizing definitions only" }, answer: "B" },
  { id: 53, question: "Which sequence best represents the behaviorist learning process?", choices: { A: "Memory → Recall → Reflection", B: "Stimulus → Response → Reinforcement", C: "Observation → Experiment → Evaluation", D: "Design → Develop → Deploy" }, answer: "B" },
  { id: 54, question: "A mobile app that awards badges after every correct answer mainly applies:", choices: { A: "Constructivism", B: "Behaviorism", C: "Connectivism", D: "Humanism" }, answer: "B" },
  { id: 55, question: "One limitation of behaviorist learning theory is that it:", choices: { A: "Promotes higher-order thinking extensively", B: "Focuses mainly on rote learning", C: "Ignores repetition", D: "Cannot be applied in education" }, answer: "B" },
  { id: 56, question: "Cognitive learning theory emphasizes:", choices: { A: "External punishment only", B: "Internal mental processes", C: "Financial rewards", D: "Group competition" }, answer: "B" },
  { id: 57, question: "Which scholar is strongly associated with cognitive learning theory?", choices: { A: "Jean Piaget", B: "Ivan Pavlov", C: "Albert Bandura", D: "Herman Hollerith" }, answer: "A" },
  { id: 58, question: "Schema development refers to:", choices: { A: "Computer storage", B: "Mental frameworks for organizing knowledge", C: "Network configuration", D: "Database management" }, answer: "B" },
  { id: 59, question: "Breaking content into smaller units to reduce overload is known as:", choices: { A: "Chunking", B: "Formatting", C: "Sampling", D: "Encoding" }, answer: "A" },
  { id: 60, question: "Constructivist learning theory argues that learners:", choices: { A: "Receive knowledge passively", B: "Construct knowledge actively through experience", C: "Learn only through punishment", D: "Depend solely on textbooks" }, answer: "B" },
  { id: 61, question: "Constructivism is strongly influenced by:", choices: { A: "Lev Vygotsky", B: "Blaise Pascal", C: "John Von Neumann", D: "Charles Babbage" }, answer: "A" },
  { id: 62, question: "Which of the following best supports constructivist learning?", choices: { A: "Memorizing notes", B: "Scenario-based learning", C: "Copying textbook definitions", D: "Silent reading only" }, answer: "B" },
  { id: 63, question: "Social Learning Theory was developed by:", choices: { A: "David Kolb", B: "Albert Bandura", C: "Jerome Bruner", D: "George Siemens" }, answer: "B" },
  { id: 64, question: "According to Social Learning Theory, learning occurs mainly through:", choices: { A: "Isolation", B: "Observation and interaction", C: "Memorization only", D: "Mechanical repetition" }, answer: "B" },
  { id: 65, question: "Discussion forums in educational apps primarily support:", choices: { A: "Behaviorism", B: "Social Learning Theory", C: "Machine Learning", D: "Database Management" }, answer: "B" },
  { id: 66, question: "Universal Design for Learning (UDL) focuses on:", choices: { A: "Reducing learning opportunities", B: "Creating inclusive learning environments", C: "Teaching programming languages only", D: "Building computer hardware" }, answer: "B" },
  { id: 67, question: "Which of the following is NOT a principle of Universal Design for Learning?", choices: { A: "Multiple Means of Representation", B: "Multiple Means of Engagement", C: "Multiple Means of Expression", D: "Multiple Means of Punishment" }, answer: "D" },
  { id: 68, question: "Providing subtitles and transcripts in a learning app is an example of:", choices: { A: "Artificial Intelligence", B: "Universal Design for Learning", C: "Data Mining", D: "Cybersecurity" }, answer: "B" },
  { id: 69, question: "Connectivism was proposed by:", choices: { A: "George Siemens", B: "Jean Piaget", C: "B.F. Skinner", D: "John Dewey" }, answer: "A" },
  { id: 70, question: "According to Connectivism, the most important ability for learners is to:", choices: { A: "Memorize every fact", B: "Find and connect to relevant information", C: "Avoid digital technologies", D: "Depend only on classroom lectures" }, answer: "B" },
  { id: 71, question: "Experiential Learning Theory was developed by:", choices: { A: "Albert Bandura", B: "David Kolb", C: "Jerome Bruner", D: "George Siemens" }, answer: "B" },
  { id: 72, question: "Which of the following is the first stage in Kolb's Experiential Learning Cycle?", choices: { A: "Reflective Observation", B: "Active Experimentation", C: "Concrete Experience", D: "Abstract Conceptualization" }, answer: "C" },
  { id: 73, question: "Which technology best supports experiential learning in mobile education?", choices: { A: "Word processors", B: "AR/VR simulations", C: "Calculators", D: "Spreadsheets" }, answer: "B" },
  { id: 74, question: "Instructional design is primarily concerned with:", choices: { A: "Manufacturing smartphones", B: "Creating effective and engaging learning experiences", C: "Repairing computers", D: "Selling educational software" }, answer: "B" },
  { id: 75, question: "Instructional design in mobile learning bridges learning theories with:", choices: { A: "Network security", B: "Practical application development", C: "Computer maintenance", D: "Operating systems" }, answer: "B" },
  { id: 76, question: "Which of the following is NOT an instructional design model?", choices: { A: "ADDIE", B: "SAM", C: "Dick and Carey", D: "TCP/IP" }, answer: "D" },
  { id: 77, question: "The most widely used instructional design model is:", choices: { A: "Waterfall", B: "Spiral", C: "ADDIE", D: "Agile Scrum" }, answer: "C" },
  { id: 78, question: "The letters \"A\" and \"D\" in ADDIE stand for:", choices: { A: "Assessment and Documentation", B: "Analysis and Design", C: "Application and Development", D: "Analysis and Deployment" }, answer: "B" },
  { id: 79, question: "Which phase of ADDIE identifies learner needs and instructional problems?", choices: { A: "Development", B: "Analysis", C: "Evaluation", D: "Implementation" }, answer: "B" },
  { id: 80, question: "Determining learners' prior knowledge occurs during the:", choices: { A: "Analysis Phase", B: "Development Phase", C: "Evaluation Phase", D: "Deployment Phase" }, answer: "A" },
  { id: 81, question: "Creating measurable learning objectives is part of the:", choices: { A: "Analysis Phase", B: "Design Phase", C: "Implementation Phase", D: "Maintenance Phase" }, answer: "B" },
  { id: 82, question: "Designing quizzes and assignments belongs to the:", choices: { A: "Design Phase", B: "Analysis Phase", C: "Evaluation Phase", D: "Testing Phase" }, answer: "A" },
  { id: 83, question: "Developing multimedia content such as videos and animations occurs during the:", choices: { A: "Analysis Phase", B: "Development Phase", C: "Design Phase", D: "Evaluation Phase" }, answer: "B" },
  { id: 84, question: "Writing program code for a mobile learning app occurs in the:", choices: { A: "Development Phase", B: "Implementation Phase", C: "Analysis Phase", D: "Evaluation Phase" }, answer: "A" },
  { id: 85, question: "Publishing an educational app on Google Play Store occurs during the:", choices: { A: "Development Phase", B: "Design Phase", C: "Implementation Phase", D: "Analysis Phase" }, answer: "C" },
  { id: 86, question: "Formative evaluation is conducted:", choices: { A: "Before planning", B: "During development", C: "Five years after deployment", D: "Before coding begins" }, answer: "B" },
  { id: 87, question: "Summative evaluation is conducted:", choices: { A: "Before analysis", B: "During interface design", C: "After implementation", D: "During coding only" }, answer: "C" },
  { id: 88, question: "Which of the following is an evaluation metric for educational mobile applications?", choices: { A: "Fuel consumption", B: "User engagement", C: "Battery size", D: "Screen resolution only" }, answer: "B" },
  { id: 89, question: "SAM stands for:", choices: { A: "Software Application Management", B: "Successive Approximation Model", C: "System Assessment Method", D: "Structured Analysis Model" }, answer: "B" },
  { id: 90, question: "SAM emphasizes:", choices: { A: "Long development cycles", B: "Rapid prototyping and continuous feedback", C: "Hardware maintenance", D: "Sequential programming only" }, answer: "B" },
  { id: 91, question: "The Dick and Carey Model is known for:", choices: { A: "Random development", B: "A systematic relationship between instruction, learners, and outcomes", C: "Entertainment app development", D: "Mobile hardware testing" }, answer: "B" },
  { id: 92, question: "Rapid Prototyping focuses on:", choices: { A: "Delaying user testing", B: "Building a working prototype early", C: "Eliminating evaluation", D: "Developing without user feedback" }, answer: "B" },
  { id: 93, question: "Instructional design should be integrated with mobile app development to:", choices: { A: "Increase file size", B: "Align learning objectives with app features", C: "Reduce internet speed", D: "Replace instructional theories" }, answer: "B" },
  { id: 94, question: "Which of the following is considered a best practice in mobile instructional design?", choices: { A: "Long text-heavy lessons", B: "Microlearning", C: "Complex navigation", D: "Excessive animations" }, answer: "B" },
  { id: 95, question: "A major challenge of mobile instructional design is:", choices: { A: "Unlimited screen space", B: "Limited screen size", C: "Unlimited battery life", D: "Unlimited storage" }, answer: "B" },
  { id: 96, question: "User-Centered Design (UCD) focuses primarily on:", choices: { A: "Developer preferences", B: "User needs and limitations", C: "Company profits", D: "Hardware specifications" }, answer: "B" },
  { id: 97, question: "Which of the following best represents User-Centered Design?", choices: { A: "Complicated navigation", B: "Simple and intuitive interfaces", C: "Hidden menus", D: "Large programming codes" }, answer: "B" },
  { id: 98, question: "Mobile-First Design recommends designing for:", choices: { A: "Desktop computers first", B: "Mobile devices first", C: "Smart TVs first", D: "Projectors first" }, answer: "B" },
  { id: 99, question: "Buttons in mobile applications should primarily be designed for:", choices: { A: "Mouse clicks", B: "Finger touch interactions", C: "Keyboard shortcuts", D: "Voice commands only" }, answer: "B" },
  { id: 100, question: "Keeping only essential features in a mobile app reflects the principle of:", choices: { A: "Virtualization", B: "Minimalism", C: "Networking", D: "Multiprocessing" }, answer: "B" },
  { id: 101, question: "Consistency in interface design helps to:", choices: { A: "Increase cognitive load", B: "Reduce user confusion", C: "Slow navigation", D: "Increase programming errors" }, answer: "B" },
  { id: 102, question: "Providing captions and transcripts in educational apps primarily supports:", choices: { A: "Accessibility", B: "Encryption", C: "Programming", D: "Debugging" }, answer: "A" },
  { id: 103, question: "Adjustable font sizes mainly benefit:", choices: { A: "Software developers", B: "Visually impaired learners", C: "Database administrators", D: "Network engineers" }, answer: "B" },
  { id: 104, question: "Combining text, images, audio, video, and animations in learning applications is known as:", choices: { A: "Virtualization", B: "Multimedia Integration", C: "Data Compression", D: "Networking" }, answer: "B" },
  { id: 105, question: "A key guideline for multimedia integration in educational apps is to:", choices: { A: "Include as many media elements as possible", B: "Ensure media supports the learning objectives", C: "Avoid using images completely", D: "Replace all text with videos" }, answer: "B" },
  { id: 106, question: "The principle of simplicity in educational mobile app design emphasizes:", choices: { A: "Adding as many features as possible", B: "Focusing on core learning tasks", C: "Using complex navigation structures", D: "Increasing screen clutter" }, answer: "B" },
  { id: 107, question: "Immediate feedback in a mobile learning application is most commonly provided through:", choices: { A: "Semester examination results", B: "Quiz scores displayed immediately after submission", C: "Annual reports", D: "Printed certificates" }, answer: "B" },
  { id: 108, question: "Which of the following is an example of delayed feedback?", choices: { A: "Instant \"Correct\" notification", B: "Progress bar update", C: "Instructor comments after assignment submission", D: "Achievement badge" }, answer: "C" },
  { id: 109, question: "Progress bars and achievement badges mainly serve to:", choices: { A: "Increase file size", B: "Reinforce learning and motivate learners", C: "Reduce accessibility", D: "Replace assessments" }, answer: "B" },
  { id: 110, question: "Effective navigation in a mobile learning app should have:", choices: { A: "A complicated menu structure", B: "Clear and logical organization of content", C: "Multiple unnecessary pages", D: "Hidden navigation buttons" }, answer: "B" },
  { id: 111, question: "Which feature helps learners quickly locate learning materials?", choices: { A: "Search functionality", B: "Device encryption", C: "Battery optimization", D: "Cloud synchronization" }, answer: "A" },
  { id: 112, question: "Keeping navigation \"shallow\" means:", choices: { A: "Reducing the number of steps required to reach content", B: "Using very small icons", C: "Removing the home page", D: "Disabling the search function" }, answer: "A" },
  { id: 113, question: "Performance optimization in educational mobile apps aims to ensure:", choices: { A: "Fast loading and efficient operation", B: "Larger application size", C: "Higher battery consumption", D: "More advertisements" }, answer: "A" },
  { id: 114, question: "Offline capability is particularly important because many learners:", choices: { A: "Always have unlimited internet access", B: "May experience unstable or expensive internet connectivity", C: "Prefer desktop computers", D: "Avoid mobile devices" }, answer: "B" },
  { id: 115, question: "Educational mobile applications should implement secure login systems primarily to:", choices: { A: "Improve screen brightness", B: "Protect user information", C: "Increase storage space", D: "Speed up downloads" }, answer: "B" },
  { id: 116, question: "Data encryption mainly helps to:", choices: { A: "Reduce internet cost", B: "Protect sensitive learner data", C: "Improve battery life", D: "Increase screen resolution" }, answer: "B" },
  { id: 117, question: "An effective educational mobile application should be:", choices: { A: "Difficult to navigate", B: "Pedagogically grounded", C: "Entertainment-focused only", D: "Hardware dependent" }, answer: "B" },
  { id: 118, question: "Interactive content requires learners to:", choices: { A: "Read passively without participation", B: "Actively engage with learning activities", C: "Watch videos only", D: "Memorize textbooks" }, answer: "B" },
  { id: 119, question: "Which of the following is an example of interactive content?", choices: { A: "Drag-and-drop activities", B: "Printed textbooks", C: "Wall posters", D: "Chalkboard notes" }, answer: "A" },
  { id: 120, question: "Interactive content mainly supports which learning theory?", choices: { A: "Constructivism", B: "Behaviorism only", C: "Humanism", D: "Essentialism" }, answer: "A" },
  { id: 121, question: "Personalization in educational apps means:", choices: { A: "Every learner receives identical content", B: "Learning experiences are tailored to individual learners", C: "Only teachers use the application", D: "Apps work on one device only" }, answer: "B" },
  { id: 122, question: "Adaptive learning systems primarily adjust content based on learners':", choices: { A: "Favorite color", B: "Academic performance and learning behavior", C: "Phone brand", D: "Internet provider" }, answer: "B" },
  { id: 123, question: "Gamification in education involves:", choices: { A: "Playing video games during lectures", B: "Integrating game elements into learning activities", C: "Replacing assessments with games only", D: "Teaching game programming exclusively" }, answer: "B" },
  { id: 124, question: "Which of the following is NOT a common gamification element?", choices: { A: "Badges", B: "Leaderboards", C: "Levels", D: "Antivirus software" }, answer: "D" },
  { id: 125, question: "Gamification is strongly rooted in:", choices: { A: "Behaviorism and Motivation Theory", B: "Networking Theory", C: "Database Theory", D: "Hardware Engineering" }, answer: "A" },
  { id: 126, question: "Communication tools in educational mobile applications help to:", choices: { A: "Promote collaboration among learners", B: "Increase device temperature", C: "Reduce learner interaction", D: "Replace instructional materials" }, answer: "A" },
  { id: 127, question: "Which of the following is a communication tool?", choices: { A: "Discussion forum", B: "Calculator", C: "Antivirus", D: "File manager" }, answer: "A" },
  { id: 128, question: "Offline learning allows students to:", choices: { A: "Learn without internet connectivity", B: "Learn only in classrooms", C: "Use computers without electricity", D: "Prevent data storage" }, answer: "A" },
  { id: 129, question: "A major challenge of offline learning is:", choices: { A: "Unlimited storage", B: "Data synchronization issues", C: "Unlimited bandwidth", D: "Faster internet speed" }, answer: "B" },
  { id: 130, question: "Learning analytics involves:", choices: { A: "Manufacturing smartphones", B: "Collecting and analyzing learner data", C: "Repairing applications", D: "Installing operating systems" }, answer: "B" },
  { id: 131, question: "Which of the following can be collected through learning analytics?", choices: { A: "Quiz scores", B: "Time spent on learning tasks", C: "Completion rates", D: "All of the above" }, answer: "D" },
  { id: 132, question: "One important ethical issue in learning analytics is:", choices: { A: "Battery charging", B: "Data privacy", C: "Screen resolution", D: "Device color" }, answer: "B" },
  { id: 133, question: "High-quality educational content should be:", choices: { A: "Outdated", B: "Accurate and aligned with curriculum standards", C: "Difficult to understand", D: "Unstructured" }, answer: "B" },
  { id: 134, question: "Which strategy best improves learner engagement?", choices: { A: "Gamification", B: "Interactive activities", C: "Personalized learning paths", D: "All of the above" }, answer: "D" },
  { id: 135, question: "Educational mobile applications should integrate with Learning Management Systems (LMS) mainly to:", choices: { A: "Improve data sharing and learning continuity", B: "Reduce storage space", C: "Increase application advertisements", D: "Prevent assessment" }, answer: "A" },
  { id: 136, question: "Scalability in educational applications refers to the ability to:", choices: { A: "Increase screen size", B: "Support a growing number of users", C: "Improve camera quality", D: "Reduce application features" }, answer: "B" },
  { id: 137, question: "Native mobile application development involves:", choices: { A: "Developing one application for all operating systems using one codebase", B: "Building applications specifically for one operating system", C: "Developing only web applications", D: "Creating desktop software" }, answer: "B" },
  { id: 138, question: "Which programming language is officially associated with Android native development?", choices: { A: "Swift", B: "Kotlin", C: "PHP", D: "Python" }, answer: "B" },
  { id: 139, question: "Which programming language is primarily used for native iOS application development?", choices: { A: "Java", B: "Kotlin", C: "Swift", D: "C" }, answer: "C" },
  { id: 140, question: "Which of the following is a popular cross-platform mobile application development framework?", choices: { A: "Flutter", B: "React Native", C: "Both A and B", D: "Microsoft Word" }, answer: "C" }
];

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function normalizeBankQuestion(question) {
  const choices = question.choices || {};
  const options = Object.entries(choices).map(([id, text]) => ({
    id,
    text,
    isCorrect: id === question.answer
  }));

  return {
    id: question.id,
    title: question.question,
    options,
    explanation: question.explanation || `The correct answer is ${question.answer}.`,
    hint: question.hint || 'Review the concept carefully before answering.'
  };
}

const UIL_EDT_202 = {
  courseId: 'uil_edt_202',
  title: 'UIL EDT 202 - Question Bank (140 questions, 70 per attempt)',
  totalQuestions: 140,
  batchSize: 70,
  maxQuestionsPerAttempt: 70,
  questions: UIL_EDT_202_QUESTIONS,
  getRandomQuestions(count = 70) {
    const pool = Array.isArray(this.questions) ? this.questions : [];
    const takeCount = Math.min(count || this.maxQuestionsPerAttempt || 70, pool.length);
    return shuffleArray(pool).slice(0, takeCount).map(normalizeBankQuestion);
  },
  getQuestionsForAttempt(count = 70) {
    return this.getRandomQuestions(count);
  }
};

// Students may take only 70 questions per attempt.
// Expose for browser and CommonJS
if (typeof window !== 'undefined') window.UIL_EDT_202 = UIL_EDT_202;
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = UIL_EDT_202;
