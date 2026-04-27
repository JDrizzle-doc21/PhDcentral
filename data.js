// ============================================================
// JONATHAN'S SITE DATA — Edit this file to update everything
// ============================================================
// HOW TO EDIT: Change any text between the quote marks " "
// Then save and re-upload to GitHub. That's it.
// ============================================================

const SITE_DATA = {

  // --- PERSONAL INFO ---
  name: "Jonathan Daniel",
  credentials: "MBBS",
  role: "Surgical Trainee & PhD Candidate",
  specialty: "Otolaryngology – Head & Neck Surgery (OHNS)",
  institution: "[ Your University ]",
  department: "[ Your Department ]",
  email: "[ your.email@institution.edu.au ]",
  profilePhoto: "", // Leave blank for initials avatar, or add image URL

  // --- BIO (shown on About section) ---
  bio: `I am an Otolaryngology – Head and Neck Surgery trainee and PhD candidate 
  investigating the intratumoural microbiome of oral cavity squamous cell carcinoma. 
  My research sits at the intersection of surgical oncology, microbial ecology, 
  and translational bioinformatics. I am particularly interested in how microbial 
  communities within the tumour microenvironment influence carcinogenesis, treatment 
  response, and patient outcomes.`,

  // --- SUPERVISORS ---
  supervisors: [
    { name: "[ Primary Supervisor ]", role: "Principal Supervisor", institution: "[ Institution ]" },
    { name: "[ Co-Supervisor ]", role: "Co-Supervisor", institution: "[ Institution ]" },
    { name: "[ Co-Supervisor ]", role: "Co-Supervisor", institution: "[ Institution ]" },
  ],

  // --- PHD DETAILS ---
  phd: {
    title: "The Intratumoural Microbiome of Oral Cavity Squamous Cell Carcinoma",
    institution: "[ Your University ]",
    startYear: 2024,
    targetCompletionYear: 2027,
    currentYear: 2025,
    overallProgress: 22, // percent complete (0-100)
    ethics: "Pending", // "Pending", "Approved", "Not Required"
    ethicsRef: "",
  },

  // --- WORKSTREAMS ---
  // status: "not-started" | "in-progress" | "complete" | "writing" | "submitted"
  // progress: 0-100
  workstreams: [
    {
      id: 1,
      title: "NSND Retrospective Cohort Review",
      subtitle: "Neck node density as a prognostic marker in HNSCC",
      status: "in-progress",
      progress: 35,
      startDate: "Jan 2025",
      targetDate: "Jun 2025",
      description: "Retrospective review of node-negative neck dissection outcomes, characterising neck node density (NSND) as a prognostic variable in head and neck squamous cell carcinoma. Includes clinicopathological correlation and survival analysis.",
      milestones: [
        { label: "Ethics approval", done: true },
        { label: "Data extraction complete", done: true },
        { label: "Statistical analysis", done: false },
        { label: "Manuscript draft", done: false },
        { label: "Submission", done: false },
      ],
      methodLog: [
        { date: "2025-01-15", entry: "IRB/ethics application submitted." },
        { date: "2025-02-03", entry: "Ethics approved. Data extraction commenced." },
        { date: "2025-03-20", entry: "Data extraction completed — n=[ ]. Moving to statistical analysis." },
      ],
    },
    {
      id: 2,
      title: "Scoping Review: Tumour Sampling Techniques",
      subtitle: "Methodological landscape for intratumoural microbiome sampling",
      status: "in-progress",
      progress: 50,
      startDate: "Feb 2025",
      targetDate: "Aug 2025",
      description: "Scoping review of published methodologies for sampling the intratumoural microbiome, with a focus on oral cavity SCC. Evaluating heterogeneity in sampling site, depth, preservation, and sequencing strategy across the literature.",
      milestones: [
        { label: "Search strategy finalised", done: true },
        { label: "Database search complete", done: true },
        { label: "Title/abstract screen", done: true },
        { label: "Full-text review", done: false },
        { label: "Data charting", done: false },
        { label: "Manuscript submission", done: false },
      ],
      methodLog: [
        { date: "2025-02-10", entry: "PICO/PCC framework defined. Search strategy drafted." },
        { date: "2025-03-01", entry: "MEDLINE, EMBASE, Cochrane searched. n=[ ] records retrieved." },
        { date: "2025-04-05", entry: "Title/abstract screening complete. n=[ ] proceeding to full-text." },
      ],
    },
    {
      id: 3,
      title: "Systematic Review: Depth Analysis in Intratumoural Microbiome",
      subtitle: "Does sampling depth alter microbiome composition in OCSCC?",
      status: "not-started",
      progress: 0,
      startDate: "Jun 2025",
      targetDate: "Dec 2025",
      description: "Systematic review and meta-analysis examining whether tumour sampling depth influences intratumoural microbiome composition in oral cavity SCC. PRISMA-compliant methodology with pre-registered protocol.",
      milestones: [
        { label: "PROSPERO registration", done: false },
        { label: "Search strategy", done: false },
        { label: "Screening", done: false },
        { label: "Data extraction", done: false },
        { label: "Meta-analysis", done: false },
        { label: "Submission", done: false },
      ],
      methodLog: [],
    },
    {
      id: 4,
      title: "Sample Collection & Main Experiment",
      subtitle: "Prospective intratumoural microbiome characterisation",
      status: "not-started",
      progress: 0,
      startDate: "Sep 2025",
      targetDate: "Mar 2027",
      description: "Prospective collection of tumour tissue from patients undergoing resection for oral cavity SCC. Multi-site, multi-depth sampling with matched controls. 16S rRNA and shotgun metagenomic sequencing. Primary aim: characterise the intratumoural microbiome and its spatial heterogeneity.",
      milestones: [
        { label: "Ethics approval", done: false },
        { label: "Biobank protocol finalised", done: false },
        { label: "First patient enrolled", done: false },
        { label: "Target recruitment (n=[ ])", done: false },
        { label: "Sequencing complete", done: false },
        { label: "Analysis complete", done: false },
      ],
      methodLog: [],
    },
    {
      id: 5,
      title: "Machine Learning Integration",
      subtitle: "Predictive modelling from microbiome signatures",
      status: "not-started",
      progress: 0,
      startDate: "Jan 2027",
      targetDate: "Jun 2027",
      description: "Development and validation of machine learning models to predict clinically relevant endpoints (recurrence, response, survival) from intratumoural microbiome signatures. Integration of taxonomic, functional, and clinical data.",
      milestones: [
        { label: "Feature engineering", done: false },
        { label: "Model selection & training", done: false },
        { label: "Validation cohort", done: false },
        { label: "Manuscript", done: false },
      ],
      methodLog: [],
    },
  ],

  // --- PUBLICATIONS ---
  publications: [
    // Add publications here as they come. Example:
    // {
    //   title: "Title of paper",
    //   authors: "Daniel J, et al.",
    //   journal: "Journal Name",
    //   year: 2025,
    //   doi: "10.xxxx/xxxxx",
    //   type: "Original Article", // or "Review", "Conference Abstract"
    //   status: "Published", // or "In Press", "Submitted", "In Preparation"
    // },
  ],

  // --- PRESENTATIONS & CONFERENCES ---
  presentations: [
    // {
    //   title: "Presentation title",
    //   event: "Conference name",
    //   location: "City, Country",
    //   date: "Month Year",
    //   type: "Oral", // or "Poster"
    //   abstract: "Brief abstract or description (optional)",
    // },
  ],

  // --- SUPERVISOR DASHBOARD PASSCODE ---
  // Change this to any word or number you want
  dashboardPasscode: "daniel2025",

  // --- METHODOLOGY LOG (global, cross-workstream) ---
  globalMethodLog: [
    { date: "2025-01-01", workstream: "All", entry: "PhD candidature officially commenced." },
  ],

};
