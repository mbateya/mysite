// Resume data
const resumeEntries = [
  { 
    yearRange: "2025 - Current", 
    logoFile: "novartis_pharmaceuti_69e4b2ae.png",
    logoInitials: "N",
    description: "I am at Novartis in the Personalized & Precision Medicine team within the Insights & Decision Sciences department, working on leveraging real-world data and machine learning to drive evidence-based decision making in clinical development and commercialization." 
  },
{
  yearRange: "2019 - 2025",
  logoFile: "pfizer_pharmaceutica_22f7792e.png",
  logoInitials: "P",
  description: `
    Served as a Senior Director of Clinical Informatics in Medical Affairs, supporting the Medical Outcomes, the Enterprise Strategic Alliance, and the Medical Digital Health teams. I led scalable collaborations with leading health systems to address priorities such as vaccine hesitancy, Social Drivers of Health (<a href="https://doi.org/10.1161/JAHA.122.026745" target="_blank" rel="noreferrer">JAHA</a>), atrial fibrillation care redesign, and lipid-lowering therapy for cardiovascular prevention (<a href="https://doi.org/10.1016/j.ajpc.2025.101067" target="_blank" rel="noreferrer">AJPC</a>). I also led multi-phase partnerships to develop, validate, implement, and scale clinical prediction models for earlier detection and management of diseases, including atrial fibrillation (<a href="https://rdcu.be/eWkSY" target="_blank" rel="noreferrer">development</a>; <a href="https://doi.org/10.1016/j.hroo.2024.09.010" target="_blank" rel="noreferrer">validation</a>; <a href="https://rdcu.be/eWkUo" target="_blank" rel="noreferrer">implementation</a>), cardiac amyloidosis (<a href="https://www.jacc.org/doi/full/10.1016/S0735-1097%2821%2902036-2" target="_blank" rel="noreferrer">JACC</a>), and C. difficile infection (<a href="https://doi.org/10.1016/j.anaerobe.2025.102978" target="_blank" rel="noreferrer">Anaerobe</a>).
  `.trim()
},
  { 
    yearRange: "2012 - 2019", 
    logoFile: "Block_M-Hex.png",
    logoInitials: "MM",
    description: `I joined Michigan Medicine (University of Michigan Health System) as a Clinical Informatics Pharmacist. I co-led implementation of clinical pharmacy workflow <a href="https://academic.oup.com/ofid/article/6/Supplement_2/S364/5606200" target="_blank" rel="noopener noreferrer">antimicrobial stewardship</a>, <a href="https://doi.org/10.3390/jpm10040154" target="_blank" rel="noopener noreferrer">pharmacogenetics CDS</a>, <a href="https://www.thieme-connect.com/products/ejournals/html/10.4338/ACI-2016-11-RA-0187" target="_blank" rel="noopener noreferrer">pediatric subcutaneous insulin calculator</a>, <a href="https://doi.org/10.1177/1932296820974767" target="_blank" rel="noopener noreferrer">ICU Intravenous insulin calculator</a>, and predictive analytics for readmission risk reduction, acute kidney injury prevention, pancreatitis severity estimation, and polypharmacy prioritization in the ER. My insulin calculators were adopted by Epic and implemented by at least 60 leading hospitals nationwide.` 
  },
  { 
    yearRange: "2010 - 2014", 
    logoFile: "university_of_minnes_30632582.png",
    logoInitials: "UM",
    description: `I earned my career-transforming Master of Science in Health Informatics from the University of Minnesota, with a specialization as a Health Informatics R&D Specialist. I published my <a href="https://rdcu.be/eWkI0" target="_blank" rel="noopener noreferrer">first peer-reviewed paper</a> with supervision from Dr. Stuart Speedie.` 
  },
  { 
    yearRange: "2009 - 2012",
    logoFile: "ascension-logo.png",
    logoInitials: "C",
    description: "I moved to Minnesota and worked at CentraCare Health in St. Cloud, MN, and remotely for Ascension Health." 
  },
  { 
    yearRange: "2006 - 2010", 
    logoFile: "university_of_florid_cedab3b5.png",
    logoInitials: "UF",
    description: "I completed my Working Professional Doctor of Pharmacy (PharmD) degree at the University of Florida College of Pharmacy, solidifying my clinical knowledge." 
  },
  { 
    yearRange: "2006 - 2009", 
    logoFile: "beaumont_logo_old.png",
    logoInitials: "BH",
    description: "I worked at Beaumont Health in Royal Oak, where I practiced clinical pharmacy on Med/Surg, ICU floors, and in the ER. I precepted pharmacy students from Wayne State University and grew as a mentor and clinican. I also served as a Super User for Epic EHR implementation which prompted my later transition to a successful career in informatics." 
  },
  { 
    yearRange: "2004 - 2006", 
    logoFile: "W_logo_RGB.png",
    logoInitials: "W",
    description: "I transitioned to Walgreens as a staff pharmacist, then a pharmacy manager." 
  },
  { 
    yearRange: "2001 - 2004", 
    logoFile: "CVS_Pharmacy_1996.svg",
    logoInitials: "CVS",
    description: "I joined CVS Pharmacy in Michigan as a pharmacy graduate Intern, then staff pharmacist, then a pharmacist-in-charge." 
  },
  { 
    yearRange: "1999 - 2001", 
    logoFile: "nodcar_egypt.jpeg",
    logoInitials: "ND",
    description: "I worked at the National Organization for Drug Research and Control (NODCAR) in Egypt, working on bioavailability and bioequivalence studies of pharmaceutical products." 
  },
  { 
    yearRange: "1994 - 1999", 
    logoFile: "cairo_university_pharmacy.png",
    logoInitials: "CU",
    description: "I earned my Bachelor of Science in Pharmacy from the Faculty of Pharmacy at Cairo University, the leading pharmacy schools in the Middle East." 
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
