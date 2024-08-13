// Data for navigation links
export const navData = [
  { id: 1, name: 'Home', link: '/' }, // Home page
  { id: 2, name: 'For Job seekers', link: '/application' }, // Job seekers page
  { id: 3, name: 'Find a job', link: '/apply-job' }, // Find a job page
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
  },
  {
    step: 'Review', // The name of the second step
  },
  {
    step: 'Submit', // The name of the third step
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

export const JobRequiredSkills = [
  {
    skill: 'Product managing tools',
    level: 'Excellent',
  },
  {
    skill: 'Communication skills',
    level: 'Excellent',
  },
  {
    skill: 'Presentation skills',
    level: 'very good',
  },
  {
    skill: 'Programming skills',
    level: 'very good',
  },
  {
    skill: 'English speaking',
    level: 'professional',
  },
];

export const JobDetails = [
  {
    title: 'Job type',
    details: 'online position',
  },
  {
    title: 'Starting date',
    details: 'In a month',
  },
  {
    title: 'Job salary',
    details: '10 k per month',
  },
];

export const initialUserFormData = {
  firstName: '',
  userName: '',
  email: '',
  address: '',
  jobTitle: '',
  jobType: '',
  salary: '',
  closingDate: '',
  jobQualifications: '',
  saveAsDraft: '',
  JobDescription: '',
};

export const initialFormCompanyData = {
  companyName: '',
  companyEmail: '',
  companyPhone: '',
  startedDate: '',
  numberOfWorkers: '',
  CompanyField: '',
  moreDetails: '',
};

export const ApplyFormFields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    label: 'Country',
    name: 'country',
    type: 'select',
    options: [
      'Egypt',
      'Saudi Arabia',
      'Qatar',
      'Kuwait',
      'United Arab Emirates',
    ], // Add more countries as needed
  },
  {
    label: 'Mobile Number',
    name: 'mobileNumber',
    type: 'tel',
    placeholder: 'Enter your mobile number',
  },
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    placeholder: 'Enter your age',
  },
  {
    label: 'Job',
    name: 'job',
    type: 'text',
    placeholder: 'Enter your job title',
  },
  {
    label: 'College',
    name: 'college',
    type: 'text',
    placeholder: 'Enter your college name',
  },
  {
    label: 'Expected Salary',
    name: 'expectedSalary',
    type: 'text',
    placeholder: 'Enter your expected salary',
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
    placeholder: 'Enter your address',
  },
  {
    label: 'Experience',
    name: 'experience',
    type: 'text',
    placeholder: 'Enter your experience',
  },
  {
    label: 'Date of Birth',
    name: 'dateOfBirth',
    type: 'date',
  },
  {
    label: 'Experiences',
    name: 'experiences',
    type: 'textarea',
    placeholder: 'Enter your experiences',
  },
  {
    label: 'Availability to Work',
    name: 'availability',
    type: 'radio',
    options: ['Immediately', 'Later'],
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'text',
    placeholder: 'Enter your gender',
  },
  {
    label: 'Skills',
    name: 'skills',
    type: 'checkbox',
    options: [],
  },
  {
    label: 'Meta Description',
    name: 'metaDescription',
    type: 'textarea',
    placeholder: 'Enter meta description',
  },
];

export const initialApplyFormFields = {
  name: '',
  country: '',
  mobileNumber: '',
  age: 0,
  job: '',
  college: '',
  expectedSalary: '',
  address: '',
  experience: '',
  dateOfBirth: '',
  availability: '',
  gender: '',
  metaDescription: '',
  skills: ['Programming', 'Designing', 'UI/UX'],
  experiences: '',
};
