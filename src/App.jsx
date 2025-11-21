import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Career from './Pages/Career'
import Contact from './Pages/Contact'
// import { Home } from 'lucide-react'
import WebsiteDevelopement from "./Pages/WebsiteDevelopement"
import DynamicWebsite from './Pages/DynamicWebsite'
import LogoDesign from '../../Nassimpay/src/Pages/LogoDesign'
import MobileAppDevelopmentPage from './Pages/MobileAppDevelopmentPage'
import EcommerceSoftwarePage from './Pages/EcommerceSoftware'
import SeoSmoPage from './Pages/SeoSmoPage'
import BulkSmsPage from './Pages/BulkSmsPage'
import PaymentGatewayPage from './Components/PaymentGatewayPage'
import ServiceNowPage from './Pages/ServiceNow'
import ProductDevelopmentPage from './Pages/ProductManagement'
import MobileRechargePage from './Pages/MobileRechargePage'
import LoanManagementPage from './Pages/LoanManagementPage'
import EcommercePage from '../../Nassimpay/src/Pages/EcommercePage'
import EducationSoftwarePage from './Pages/EducationSoftwarePage'
import TravelSoftwarePage from './Pages/TravelPage'
import CrmSoftwarePage from './Pages/CRMPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TermsConditionsPage from './Pages/TermsAndConditions'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/careers",
          element: <Career />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/static-website",
          element: <WebsiteDevelopement />
        },
        {
          path: "/dynamic-website",
          element: <DynamicWebsite />
        },
        {
          path: "/logo-design",
          element: <LogoDesign />
        },
        {
          path: "/custom-software",
          element: <MobileAppDevelopmentPage />
        },
        {
          path: "/mobile-app",
          element: <MobileAppDevelopmentPage />
        },
        {
          path: "/ecommerce-software",
          element: <EcommerceSoftwarePage />
        },
        {
          path: "/seo-smo",
          element: <SeoSmoPage />
        },
        {
          path: "/bulk-sms",
          element: <BulkSmsPage />
        },
        {
          path: "/payment-gateway",
          element: <PaymentGatewayPage />
        },
        {
          path: "/service-now",
          element: <ServiceNowPage />
        },
        {
          path: "/product-development",
          element: <ProductDevelopmentPage/>
        },
        {
          path: "/product/mobile-recharge",
          element: <MobileRechargePage/>
        },
        {
          path: "/product/loan-management",
          element: <LoanManagementPage/>
        },
        {
          path: "/product/ecommerce",
          element: <EcommerceSoftwarePage/>
        },
        {
          path: "/product/education",
          element: <EducationSoftwarePage/>
        },
        {
          path: "/product/travel",
          element: <TravelSoftwarePage/>
        },
        {
          path: "/product/crm",
          element: <CrmSoftwarePage/>
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicyPage/>
        },
        {
          path: "/terms-conditions",
          element: <TermsConditionsPage/>
        },
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App