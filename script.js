// Resume data
const resumeEntries = [
  { 
    yearRange: "2025 -", 
    logoFile: "novartis_pharmaceuti_69e4b2ae.jpg",
    logoInitials: "N",
    description: "I am at Novartis in the Insights & Decision Sciences team, working on leveraging real-world data and advanced analytics to drive evidence-based decision making in drug development and commercialization." 
  },
  { 
    yearRange: "2019 - 2025", 
    logoFile: "pfizer_pharmaceutica_22f7792e.jpg",
    logoInitials: "P",
    description: "I was in Medical Affairs at Pfizer, where I led initiatives in real-world evidence generation, health informatics strategy, and data-driven approaches to understanding treatment outcomes and patient journeys." 
  },
  { 
    yearRange: "2012 - 2019", 
    logoFile: "university_of_michig_f96a3e5a.jpg",
    logoInitials: "MM",
    description: "I was at Michigan Medicine (University of Michigan Health System) working on clinical decision support, EHR optimization, and pharmacy informatics. My work focused on translating health IT capabilities into improved patient care and clinician workflows." 
  },
  { 
    yearRange: "2010 - 2014", 
    logoFile: "university_of_minnes_30632582.jpg",
    logoInitials: "UM",
    description: "I earned my Master of Science in Health Informatics from the University of Minnesota, studying the intersection of healthcare, data science, and information technology." 
  },
  { 
    yearRange: "2009 - 2012", 
    logoInitials: "C",
    description: "I worked at CentraCare Health (part of Ascension Health), developing expertise in clinical pharmacy practice and healthcare delivery systems." 
  },
  { 
    yearRange: "2006 - 2010", 
    logoFile: "university_of_florid_cedab3b5.jpg",
    logoInitials: "UF",
    description: "I completed my Doctor of Pharmacy (PharmD) degree at the University of Florida College of Pharmacy, one of the top pharmacy programs in the United States." 
  },
  { 
    yearRange: "2006 - 2009", 
    logoInitials: "BH",
    description: "I gained clinical pharmacy experience at Beaumont Health in Michigan, working across various pharmacy practice settings." 
  },
  { 
    yearRange: "2004 - 2006", 
    logoInitials: "W",
    description: "I worked at Walgreens, developing foundational skills in community pharmacy practice and patient care." 
  },
  { 
    yearRange: "2001 - 2004", 
    logoInitials: "CVS",
    description: "I started my US pharmacy career at CVS Pharmacy, learning the fundamentals of American pharmacy practice." 
  },
  { 
    yearRange: "1999 - 2001", 
    logoInitials: "ND",
    description: "I worked at the National Organization for Drug Research and Control (NODCAR) in Egypt, contributing to pharmaceutical quality assurance and drug research." 
  },
  { 
    yearRange: "1994 - 1999", 
    logoInitials: "CU",
    description: "I earned my Bachelor of Science in Pharmacy from the Faculty of Pharmacy at Cairo University, one of the leading pharmacy schools in the Middle East." 
  }
];

// Publications data
const publications = [
  { 
    year: 2025, 
    title: "Direct-acting oral anticoagulants and potential inconsistencies with FDA-approved dosing for non-valvular atrial fibrillation: a retrospective real-world analysis across nine health systems", 
    journal: "Journal of General Internal Medicine", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:M3ejUd6NZC8C" 
  },
  { 
    year: 2025, 
    title: "Real-world prescribing in accordance to ACC/AHA guidelines for lipid-lowering therapy in high-risk primary and secondary prevention of ASCVD", 
    journal: "American Journal of Preventive Cardiology", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:dhFuZR0502QC" 
  },
  { 
    year: 2024, 
    title: "Validation, bias assessment, and optimization of the UNAFIED 2-year risk prediction model for undiagnosed atrial fibrillation using national electronic health data", 
    journal: "Heart Rhythm O2", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:4TOpqqG69KYC" 
  },
  { 
    year: 2023, 
    title: "Associations of community and individual social determinants of health with medication adherence in patients with atrial fibrillation", 
    journal: "Journal of the American Heart Association", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:kNdYIx-mwKoC" 
  },
  { 
    year: 2022, 
    title: "Implementation and use of risk evaluation and mitigation strategies programs in practice: a scoping review of the literature", 
    journal: "Applied Clinical Informatics", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:MXK_kJrjxJIC" 
  },
  { 
    year: 2021, 
    title: "Development, validation, and proof-of-concept implementation of a two-year risk prediction model for undiagnosed atrial fibrillation using common electronic health data (UNAFIED)", 
    journal: "BMC Medical Informatics and Decision Making", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:Se3iqnhoufwC" 
  },
  { 
    year: 2021, 
    title: "Improving hospital glucometrics, workflow, and outcomes with a computerized intravenous insulin dose calculator built into the electronic health record", 
    journal: "Journal of Diabetes Science and Technology", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:roLk4NBRz8UC" 
  },
  { 
    year: 2020, 
    title: "Establishment of a pharmacogenetics service focused on optimizing existing pharmacogenetic testing at a large academic health center", 
    journal: "Journal of Personalized Medicine", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:WF5omc3nYNoC" 
  },
  { 
    year: 2017, 
    title: "Insulin bolus calculator in a pediatric hospital", 
    journal: "Applied Clinical Informatics", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:2osOgNQ5qMEC" 
  },
  { 
    year: 2015, 
    title: "The value of structured data elements from electronic health records for identifying subjects for primary care clinical trials", 
    journal: "BMC Medical Informatics and Decision Making", 
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=K4i5oKYAAAAJ&citation_for_view=K4i5oKYAAAAJ:d1gkVwhDpl0C" 
  }
];

// Render resume
function renderResume() {
  const container = document.getElementById('resume');
  
  resumeEntries.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'resume-entry';
    
    const logoHtml = entry.logoFile 
      ? `<img src="assets/${entry.logoFile}" alt="${entry.logoInitials}">`
      : `<div class="resume-logo-text">${entry.logoInitials}</div>`;
    
    div.innerHTML = `
      <div class="resume-year">${entry.yearRange}</div>
      <div class="resume-logo">${logoHtml}</div>
      <div class="resume-content">
        <p>${entry.description}</p>
      </div>
    `;
    
    container.appendChild(div);
  });
}

// Render publications
function renderPublications() {
  const list = document.getElementById('publications-list');
  
  publications.forEach(pub => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${pub.link}" target="_blank" rel="noopener noreferrer">${pub.title}</a>
      <span class="journal"> (${pub.year}). <em>${pub.journal}</em></span>
    `;
    list.appendChild(li);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderResume();
  renderPublications();
});
