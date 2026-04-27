// ============================================================
// JONATHAN'S SITE DATA — Edit this file to update everything
// ============================================================
//
// HOW TO EDIT — The 3 rules:
//   1. Change text BETWEEN the quote marks "like this"
//   2. Change numbers WITHOUT quotes:  progress: 35
//   3. Change true/false WITHOUT quotes: done: true
//   Then save and re-upload to GitHub. Done.
//
// If the site breaks after editing, paste your data.js into
// Claude and ask: "what's wrong with this file?"
// ============================================================

const SITE_DATA = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  name: "Jonathan Daniel",
  credentials: "MBBS",
  role: "Surgical Trainee & PhD Candidate",
  specialty: "Otolaryngology – Head & Neck Surgery (OHNS)",
  institution: "[ Your University ]",
  department: "[ Your Department ]",
  email: "[ your.email@institution.edu.au ]",
  profilePhoto: "",

  // ── BIO ────────────────────────────────────────────────────
  bio: `I am an Otolaryngology – Head and Neck Surgery trainee and PhD candidate
  investigating the intratumoural microbiome of oral cavity squamous cell carcinoma.
  My research sits at the intersection of surgical oncology, microbial ecology,
  and translational bioinformatics. I am particularly interested in how microbial
  communities within the tumour microenvironment influence carcinogenesis, treatment
  response, and patient outcomes.`,

  // ── SUPERVISORS ────────────────────────────────────────────
  supervisors: [
    { name: "[ Alkis Psaltis ]", role: "Principal Supervisor", institution: "[ Adelaide University ]" },
    { name: "[ JC Hodge ]",      role: "Co-Supervisor",        institution: "[ Adelaide University ]" },
    { name: "[ Kevin Fenix ]",      role: "Co-Supervisor",        institution: "[ Adelaide University ]" },
  ],

  // ── PHD DETAILS ────────────────────────────────────────────
  phd: {
    title: "The Intratumoural Microbiome of Oral Cavity Squamous Cell Carcinoma",
    institution: "[ Adelaide university ]",
    startYear: 2025,
    targetCompletionYear: 2027,
    overallProgress: 22,
    targetSampleSize: 55,
    ethics: "Completed",
    ethicsRef: "",
  },

  // ── SAMPLE COLLECTION TRACKER ──────────────────────────────
  //
  // HOW TO ADD A NEW SAMPLE — copy this block and fill it in:
  //
  // {
  //   sampleId: "OC-002",
  //   date: "2025-09-08",
  //   tumourSite: "Floor of mouth",
  //   tumourStage: "T3N1M0",
  //   samplingDepth: "All depths",
  //   sampleTypes: ["Tumour core", "Normal mucosa control"],
  //   storageMethod: "RNAlater + snap freeze",
  //   sequencingStatus: "Not yet",
  //   pathology: "Pending",
  //   margins: "Pending",
  //   notes: "",
  // },
  //
  // sequencingStatus options: "Not yet" | "Pending" | "In progress" | "Complete"
  // margins options:          "Clear"   | "Close (<5mm)" | "Involved" | "Pending"
  //
  samples: [
    {
      sampleId: "OC-001",
      date: "2025-09-01",
      tumourSite: "Tongue (lateral border)",
      tumourStage: "T2N0M0",
      samplingDepth: "All depths",
      sampleTypes: ["Tumour core", "Tumour margin", "Normal mucosa control"],
      storageMethod: "RNAlater + snap freeze",
      sequencingStatus: "Not yet",
      pathology: "Pending",
      margins: "Pending",
      notes: "Example entry — replace with real data when collection begins.",
    },
  ],

  // ── WORKSTREAMS ────────────────────────────────────────────
  //
  // For each task:
  //   status: "todo" | "doing" | "done"
  //
  workstreams: [
    {
      id: 1,
      title: "NSND Retrospective Cohort Review",
      subtitle: "Non smokers and non drinkers, a seperate clinicopathological entity in Oral squamous cell carcinoma ",
      status: "writing",
      progress: 90,
      startDate: "November 2025",
      targetDate: "May 2026",
      description: "Retrospective review of oral cavity scc over a 6 year period comparing the non drinkers, non smokers to those with traditional risk factors of OSCC formation. Uniquely this captures dose specific responses as well as detailsd clinicopathological featuresand survival analysis.",
      milestones: [
        { label: "Ethics approval",          done: true  },
        { label: "Data extraction complete", done: true  },
        { label: "Statistical analysis",     done: true },
        { label: "Manuscript draft",         done: true },
        { label: "2nd Manuscript draft",     done: false },
        { label: "Submission",               done: false },
      ],
      tasks: [
        { text: "Final changes made", status: "doing", due: "May 15 2026", note: "" },
        { text: "Distribute to all authors",           status: "todo", due: "May 2025", note: "" },
        { text: "Find journal to submit to",           status: "todo", due: "May 2025", note: "" },
        
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
        { label: "Search strategy finalised", done: true  },
        { label: "Database search complete",  done: true  },
        { label: "Title/abstract screen",     done: true  },
        { label: "Full-text review",          done: false },
        { label: "Data charting",             done: false },
        { label: "Manuscript submission",     done: false },
      ],
      tasks: [
        { text: "Full-text review of included articles",     status: "doing", due: "May 2025", note: "Using Rayyan" },
        { text: "Data charting table — extraction template", status: "todo",  due: "Jun 2025", note: "" },
        { text: "Narrative synthesis",                       status: "todo",  due: "Jul 2025", note: "" },
        { text: "Draft manuscript",                          status: "todo",  due: "Aug 2025", note: "" },
        { text: "MEDLINE/EMBASE/Cochrane search",            status: "done",  due: "",         note: "" },
        { text: "Title/abstract screening",                  status: "done",  due: "",         note: "" },
        { text: "PCC framework defined",                     status: "done",  due: "",         note: "" },
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
        { label: "Search strategy",       done: false },
        { label: "Screening",             done: false },
        { label: "Data extraction",       done: false },
        { label: "Meta-analysis",         done: false },
        { label: "Submission",            done: false },
      ],
      tasks: [
        { text: "Register protocol on PROSPERO",   status: "todo", due: "Jun 2025",  note: "" },
        { text: "Draft PICO + search strategy",    status: "todo", due: "Jul 2025",  note: "" },
        { text: "Database searches",               status: "todo", due: "Aug 2025",  note: "" },
        { text: "Title/abstract screening",        status: "todo", due: "Sep 2025",  note: "" },
        { text: "Full-text review",                status: "todo", due: "Oct 2025",  note: "" },
        { text: "Data extraction + meta-analysis", status: "todo", due: "Nov 2025",  note: "" },
        { text: "Draft + submit manuscript",       status: "todo", due: "Dec 2025",  note: "" },
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
        { label: "Ethics approval",           done: false },
        { label: "Biobank protocol finalised", done: false },
        { label: "First case enrolled",        done: false },
        { label: "Target recruitment (n=60)",  done: false },
        { label: "Sequencing complete",        done: false },
        { label: "Analysis complete",          done: false },
      ],
      tasks: [
        { text: "Submit ethics application",                         status: "todo", due: "Jul 2025",  note: "" },
        { text: "Finalise biobank SOPs",                             status: "todo", due: "Aug 2025",  note: "" },
        { text: "Train theatre staff on sample collection protocol", status: "todo", due: "Aug 2025",  note: "" },
        { text: "Enrol first case",                                  status: "todo", due: "Sep 2025",  note: "" },
        { text: "Reach recruitment target (n=60)",                   status: "todo", due: "Mar 2027",  note: "" },
        { text: "Submit for 16S rRNA sequencing",                    status: "todo", due: "TBD",       note: "" },
        { text: "Bioinformatics pipeline setup",                     status: "todo", due: "TBD",       note: "" },
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
        { label: "Feature engineering",        done: false },
        { label: "Model selection & training",  done: false },
        { label: "Validation cohort",           done: false },
        { label: "Manuscript",                  done: false },
      ],
      tasks: [
        { text: "Literature review of ML in microbiome research", status: "todo", due: "2026",     note: "" },
        { text: "Feature engineering from sequencing data",       status: "todo", due: "Jan 2027", note: "" },
        { text: "Model selection and training",                   status: "todo", due: "Feb 2027", note: "" },
        { text: "Validation cohort analysis",                     status: "todo", due: "Apr 2027", note: "" },
        { text: "Write up and submit",                            status: "todo", due: "Jun 2027", note: "" },
      ],
      methodLog: [],
    },
  ],

  // ── PUBLICATIONS ───────────────────────────────────────────
  publications: [],

  // ── PRESENTATIONS ──────────────────────────────────────────
  presentations: [],

  // ── PASSCODE ───────────────────────────────────────────────
  dashboardPasscode: "daniel2025",

  // ── GLOBAL METHOD LOG ──────────────────────────────────────
  globalMethodLog: [
    { date: "2025-01-01", workstream: "All", entry: "PhD candidature officially commenced." },
  ],

};
