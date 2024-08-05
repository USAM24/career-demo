import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  AlqemamPage,
  ApplicationPage,
  BlogPage,
  CandidatePage,
  CandidatesPage,
  CompaniesPage,
  CompleteApplicationPage,
  DashboardPage,
  ExplorePage,
  HelpPage,
  HomePage,
  HrAssistantPage,
  JobsinEgyptPage,
  PostJobPage,
  PostReview,
  PostSubmit,
  SavedPage,
  SigninPage,
  SignupPage,
  SubmitApplicationPage,
  UnlockedCandidatePage,
  UsersPage,
} from '../pages';
import { PostJobLayout, RootLayout } from '../layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route
          path="/hr-administrative-assistant"
          element={<HrAssistantPage />}
        />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/unlocked-candidate" element={<UnlockedCandidatePage />} />
        <Route path="/candidate" element={<CandidatePage />}></Route>
        <Route path="/submit-application" element={<SubmitApplicationPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route
          path="/complete-application"
          element={<CompleteApplicationPage />}
        />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post-job" element={<PostJobLayout />}>
          <Route index element={<PostJobPage />} />
          <Route path="review" element={<PostReview />} />
          <Route path="submit" element={<PostSubmit />} />
        </Route>
        <Route path="/help" element={<HelpPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/alqemam" element={<AlqemamPage />} />
        <Route path="/jobs-in-egypt" element={<JobsinEgyptPage />} />
      </Route>
    </>
  )
);

export default router;
