// Data for navigation links
export const navData = [
  { id: 1, name: 'Home', link: '/' }, // Home page
  { id: 2, name: 'For Job seekers', link: '/application' }, // Job seekers page
  { id: 3, name: 'For Companies', link: '/companies' }, // Companies page
  { id: 4, name: 'Blog', link: '/blog' }, // Blog page
  { id: 5, name: 'Post a job', link: '/post-job' }, // Post a job page
];

export const footerData = [
  {
    title: 'Discover',
    items: [
      'How it works',
      'More for business',
      'More about us',
      'New users FAQ',
    ],
  },
  {
    title: 'Company',
    items: [
      'About us',
      'Careers',
      'Terms & conditions',
      'Blog',
      'Contact us',
      'Privacy policy',
      'Companies',
    ],
  },
  {
    title: 'Existing Members',
    items: [
      'Post a job',
      'Get a job',
      'Login',
      'Support centre',
      'Merchandise',
    ],
  },
  {
    title: 'Popular Categories',
    items: [
      'Search by country',
      'Consulting Services',
      'Analyzing Services',
      'Make your CV',
      'All Services',
    ],
  },
];

// Define the steps with their corresponding names and URLs
export const postSteps = [
  {
    step: 'Register', // The name of the first step
    url: 'post-job', // URL segment to identify the first step
  },
  {
    step: 'Review', // The name of the second step
    url: 'post-review', // URL segment to identify the second step
  },
  {
    step: 'Submit', // The name of the third step
    url: 'post-submit', // URL segment to identify the third step
  },
];

export const formData = [
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'Enter your first name',
  },
  {
    label: 'User Name',
    name: 'userName',
    type: 'text',
    placeholder: 'Enter your user name',
  },
  {
    label: 'Your Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
    placeholder: 'House Number or No Apt',
  },
  {
    label: 'Job Title',
    name: 'jobTitle',
    type: 'text',
    placeholder: 'Enter the job title',
  },
  {
    label: 'Job Type',
    name: 'jobType',
    type: 'text',
    placeholder: 'Enter the job type (e.g., Full-time, Part-time)',
  },
  {
    label: 'Salary',
    name: 'salary',
    type: 'number',
    placeholder: 'Enter the salary (e.g., $50,000)',
  },
  { label: 'Closing Date', name: 'closingDate', type: 'date', placeholder: '' }, // Date inputs typically don't need placeholders
  {
    label: 'Job Qualifications',
    name: 'jobQualifications',
    type: 'text',
    placeholder: "Enter job qualifications (e.g., Bachelor's degree)",
  },
  { label: 'Save as a Draft', name: 'saveAsDraft', type: 'checkbox' }, // Checkboxes typically don't need placeholders
];

export const formCompanyData = [
  { placeholder: 'Company Name', type: 'text', name: 'companyName' },
  { placeholder: 'Company Email', type: 'email', name: 'companyEmail' },
  { placeholder: 'Company Phone', type: 'tel', name: 'companyPhone' },
  { placeholder: 'Started Date', type: 'date', name: 'startedDate' },
  { placeholder: 'Number of Workers', type: 'number', name: 'numberOfWorkers' },
  { placeholder: 'Any More Details', type: 'textarea', name: 'moreDetails' },
];

export const formCompanyAutofillValues = {
  companyName: 'Tech Innovators Inc.',
  companyEmail: 'info@techinnovators.com',
  companyPhone: '+1-800-123-4567',
  startedDate: '2020-05-15',
  numberOfWorkers: 250,
  moreDetails: 'Specializes in AI and machine learning solutions.',
};
