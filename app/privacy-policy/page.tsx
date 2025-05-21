"use client"

import { Metadata } from 'next'
import { IMAGES } from '@/config/images'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

// Metadata can't be used in Client Components, so we'll need to set it differently
// export const metadata: Metadata = {
//   title: 'Privacy Policy | InsureTravel',
//   description: 'Learn about how InsureTravel collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data protection.',
//   openGraph: {
//     title: 'Privacy Policy | InsureTravel',
//     description: 'Learn about how InsureTravel collects, uses, and protects your personal information.',
//     images: [{
//       url: IMAGES.og.default.src,
//       width: IMAGES.og.default.width,
//       height: IMAGES.og.default.height,
//       alt: IMAGES.og.default.alt
//     }]
//   },
// }

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to PolicyAdvisor Brokerage Inc., our parent company and affiliates (collectively, "PolicyAdvisor", "we", "us" and/or "our"). We own and operate the website: www.policyadvisor.com (the "Site"), which offers online insurance brokerage, insurance quote comparison, insurance advisory and other related services (the "Services"). We take your privacy seriously. This Privacy Policy describes our personal information processing practices in relation to you and your personal information as well as the types of personal information we, may collect from or about you when you visit, access or use our Site or the Services. The Privacy Policy also describes how we use, maintain, store and disclose personal information. Please take a moment to familiarize yourself with this Privacy Policy before accessing or using our Site or Services.
          </p>
          <p className="mb-4">
            By accessing or using our Site or Services, you signify your acceptance of this Privacy Policy and agree to be bound by its terms, including with respect to the collection, use, disclosure, storage and other processing of your personal information as described by this Privacy Policy. You can withdraw your consent at any time, however, if you choose to do so, we may not be able to provide you with the access to or use of the Site or the Services.
          </p>
          <p className="mb-4">
            This Privacy Policy forms part of the Terms of Service, available here: https://www.policyadvisor.com/terms-of-service/ (the "Terms"). Your acceptance of the Terms, including this Privacy Policy, forms a legal agreement between you and PolicyAdvisor. Please read the Terms and Privacy Policy carefully. If you do not agree to this Privacy Policy or the Terms, please do not access or use our Site, Services or any information contained or available on or through the Site and/or Services.
          </p>
          <p className="mb-4">
            For information on how and when we share your personal information with insurers, please see the section entitled "Sharing your personal information with insurers" below.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="mb-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Table of content</h2>
          <ul className="space-y-2">
            <li><a href="#effective-for-canada" className="text-deepBlue hover:underline">This Privacy Policy is effective for Canada</a></li>
            <li><a href="#revisions" className="text-deepBlue hover:underline">Revisions to this Privacy Policy</a></li>
            <li><a href="#what-is-personal-info" className="text-deepBlue hover:underline">What is personal information?</a></li>
            <li><a href="#how-we-collect" className="text-deepBlue hover:underline">How do we collect personal information?</a></li>
            <li><a href="#information-you-share" className="text-deepBlue hover:underline">Information you share with us</a></li>
            <li><a href="#info-from-third-parties" className="text-deepBlue hover:underline">Personal information we receive from third parties</a></li>
            <li><a href="#other-information" className="text-deepBlue hover:underline">Other information that is collected when you use the Site</a></li>
            <li><a href="#why-we-collect" className="text-deepBlue hover:underline">Why do we collect your personal information?</a></li>
            <li><a href="#how-we-use" className="text-deepBlue hover:underline">How we use your personal information</a></li>
            <li><a href="#communication" className="text-deepBlue hover:underline">The ways that we communicate with you</a></li>
            <li><a href="#how-we-share" className="text-deepBlue hover:underline">How We Share Your Information</a></li>
            <li><a href="#sharing-with-insurers" className="text-deepBlue hover:underline">Sharing your personal information with insurers</a></li>
            <li><a href="#third-party-marketers" className="text-deepBlue hover:underline">Sharing with third-party marketers</a></li>
            <li><a href="#disclosing-outside-canada" className="text-deepBlue hover:underline">Disclosing or transferring your personal information outside Canada</a></li>
            <li><a href="#consent" className="text-deepBlue hover:underline">Your consent is important to us</a></li>
            <li><a href="#how-we-protect" className="text-deepBlue hover:underline">How We Protect Personal Information</a></li>
            <li><a href="#access" className="text-deepBlue hover:underline">Access to your personal information</a></li>
            <li><a href="#retention" className="text-deepBlue hover:underline">Retention of personal information</a></li>
            <li><a href="#testimonials" className="text-deepBlue hover:underline">Testimonials</a></li>
            <li><a href="#advertising" className="text-deepBlue hover:underline">Advertising</a></li>
            <li><a href="#external-links" className="text-deepBlue hover:underline">External Sites Links</a></li>
            <li><a href="#request-changes" className="text-deepBlue hover:underline">How You Can Request Changes to Your Data</a></li>
            <li><a href="#interpretation" className="text-deepBlue hover:underline">Interpretation of this Privacy Policy</a></li>
          </ul>
        </section>

        {/* Section: Effective for Canada */}
        <section id="effective-for-canada" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">This Privacy Policy is effective for Canada</h2>
          <p className="mb-4">
            PolicyAdvisor is subject to the Personal Information Protection and Electronic Documents Act (Canada) and applicable Canadian provincial privacy legislation. Privacy laws vary by jurisdiction. You acknowledge and agree that access to the Site and the Services are provided via the Internet and that your information, including personal information, may be transferred across national borders and stored or processed in accordance with the terms and conditions of this Privacy Policy. This Privacy Policy has a limited scope and application. Consequently, the rights and obligations contained in this Privacy Policy may not be consistent with privacy requirements for all jurisdictions.
          </p>
          <p className="mb-4">
            If you are visiting this website and are not a resident of or located in Canada, you should note that by providing your personal information, you are: (i) permitting the collection, processing, maintenance and transfer of your personal information to Canada which may not have the same data protection laws as the country in which you reside and (ii) permitting the use of your personal information in accordance with this privacy policy and the laws of Canada.
          </p>
        </section>

        {/* Section: Revisions */}
        <section id="revisions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Revisions to this Privacy Policy</h2>
          <p className="mb-4">
            This Privacy Policy may be revised by PolicyAdvisor at any time to reflect changes in our business operations, our legal or regulatory requirements or in the way in which we deal with your personal information. We will post any revised version of this Privacy Policy on our Site. The date on which the latest update was made is indicated at the bottom of this Privacy Policy.
          </p>
          <p className="mb-4">
            If we make any material changes we will notify you as required by law, but encourage you to check back often for updates. Your continued use of the Site and Services after an update or amendment to this Privacy Policy means that you consent to the collection, use, maintenance, storage, disclosure and other processing of your personal information as described in the updated version of the Privacy Policy. If any amendment or modification is unacceptable to you, you must cease using this Site and Services.
          </p>
        </section>

        {/* Section: What is personal information */}
        <section id="what-is-personal-info" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is personal information?</h2>
          <p className="mb-4">
            For the purposes of this Privacy Policy, personal information is any information about an identifiable individual.
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Personal information we collect</h3>
          <p className="mb-4">
            We collect and maintain different types of personal information in respect of the individuals with whom we interact. This personal information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>contact and identification information, such as your name, address, postal code, telephone number, and email address;</li>
            <li>demographic information, such as your age, date of birth, citizenship/residency status, marital status and gender;</li>
            <li>health and medical information, including your height, weight, whether or not you are a smoker;</li>
            <li>employment information, such as your occupation, years of employment, hours worked per week;</li>
            <li>driving and insurance history;</li>
            <li>financial, debt, mortgage, information;</li>
            <li>any additional personal information you provide in using the Site and Services, including by the personal information you submit using our insurance quoting tools and other tools and applications available through our Site and Services.</li>
          </ul>
        </section>

        {/* Section: How do we collect */}
        <section id="how-we-collect" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How do we collect personal information?</h2>
          <p className="mb-4">
            As a general rule, PolicyAdvisor collects personal information directly from you. In most other circumstances where the personal information that we collect about you is held by a third party, we will obtain your permission before we seek out this information from such sources (such permission may be given directly by you, or implied from your actions). From time to time, we may utilize the services of third parties and may also receive personal information collected by those third parties in the course of the performance of their services for us or otherwise. Where this is the case, we will take reasonable steps to ensure that such third parties have represented to us that they have the right to disclose your personal information to us.
          </p>
        </section>

        {/* Section: Information you share */}
        <section id="information-you-share" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information you share with us</h2>
          <p className="mb-4">
            A critical part of understanding our client's unique insurance needs is collecting information from users of this Site. To view or use certain sections and functions of the Site and Services we may invite you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>submit certain personal information to view quotes (or quote-related information),</li>
            <li>create an account with us;</li>
            <li>assess and help you to assess your insurance needs, including by completing an insurance needs assessment,</li>
            <li>complete an online application, or</li>
            <li>participate in a user survey or blog.</li>
          </ul>
          <p className="mb-4">
            In connection with your use of the Site or Services in this manner, you may be required to submit some of your personal information, as indicated on the Site. The type of personal information that we collect from you will depend on the part of the Site or the nature of the Service you are accessing or using. Please note that the way we use the personal information you submit will vary depending on the Service involved or requested by you.
          </p>
          <p className="mb-4">
            A few examples of how you interact with our Site and Service and submit personal information are as follows:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Preliminary Quotes:</strong> if you choose to obtain a preliminary quote using the insurance quoting tool(s) on our Site, you will need to provide us with demographic information such as your gender, date of birth, postal code, smoking status, mortgage information, and whether or not you are a Canadian citizen/resident. We will use this information to generate a preliminary quote for you.
            </li>
            <li>
              <strong>Refining Quotes:</strong> you will have the option to obtain more personalized quotes by providing additional personal information that may include your height, weight, tobacco usage, certain medical and driving history, certain family medical history, alcohol and drug abuse history, occupation and employment history that allow us to refine the initial preliminary quote suggested for you.
            </li>
            <li>
              <strong>Account Creation:</strong> we may invite you to sign up to an account by providing certain additional personal information such as your name, email address and phone number whereby you can save, view, and retrieve your quote information. Your email address allows you to sign back to your account to view and retrieve your saved quotes. After signing up, you will be presented with insurance product detail and/or insurance product comparison options and/or insurance pricing guidance. In cases where product comparison options are not available, we will invite you to contact us or our representatives to help you with your unique needs.
            </li>
            <li>
              <strong>Contact and Assistance:</strong> we use your contact information (e.g., phone number and email information) to contact you with regards your requested quote information and to offer to answer any of our questions related to your quote. We may also invite you to contact us or our representatives to help you with your unique needs.
            </li>
            <li>
              <strong>Preparing an Application:</strong> should you decide to prepare an application for a particular policy, you may be asked for more information on our Site including marital status, physical address, certain employment and financial information, current insurance ownership and certain other questions. Please note that we may also collect information from you during your subsequent use of our Site or Services, including when we communicate with you via telephone, email or other means.
            </li>
            <li>
              <strong>Submitting an Application:</strong> if you choose to submit an application to an insurer (including by requesting that we submit an application on your behalf) through our Site or Services or through the insurer's own website (or other electronic application), you may be asked to provide additional personal information when completing and submitting the application. In connection with the completion and submission of the application, you will be asked to agree to the insurer's own terms, conditions, and policies with respect to the collection, use and disclosure of the personal information that is included in your application. In other words, the personal information that you submit to an insurer will be governed by the insurer's privacy policy and we recommend that you review the insurer's privacy policy before submitting an application. We do not send any information to an insurer until the application is complete and you authorize us to submit the application to the insurer on your behalf.
            </li>
            <li>
              <strong>Insurance Needs Assessments:</strong> if you choose to use our Site and Services for an insurance needs assessment, you may be asked to provide details such as, but not limited to, name, email address, age, postal code, whether you rent or own a home, whether you have an investment property, whether you have a mortgage, own or lease a vehicle, your marital status, whether you have children or pets, employment status, annual income range for you and your household, and some details about your present insurance coverage. This helps us identify your coverage risks and gaps over various life stages and lifestyle choices and recommend the appropriate products and coverage you may need to protect yourself.
            </li>
            <li>
              <strong>Calculating Insurance Coverage:</strong> you may also choose to use our Site and Services for calculating the appropriate amount of insurance coverage required for (or that you may be eligible for) your different insurance needs such as life insurance, critical illness insurance, mortgage insurance, or disability insurance. In this case, you may be asked for information such as your occupation, annual income, your outstanding debts, number of children, your estimates of your and family's future spending needs, your existing insurance coverage, how many hours you work, how long have you been with your existing employer, and other similar information.
            </li>
          </ul>
        </section>

        {/* Section: Personal information from third parties */}
        <section id="info-from-third-parties" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Personal information we receive from third parties</h2>
          <p className="mb-4">
            As a general rule, we collect personal information directly from you. In most other circumstances where the personal information we collect about you is held by a third-party, we will obtain your permission before we seek out this information from such sources (such permission may be given directly by you, or implied from your actions). From time to time, we may utilize the services of third-parties and may also receive personal information collected by those third-parties in the course of the performance of their services for us or otherwise. For example, we may obtain information about you from the insurers and their representatives to whom you requested that we submit an application on your behalf. These insurers may collect additional personal information directly from you in connection with the insurance application process that they may subsequently disclose to us. Where this is the case, we will take reasonable steps to ensure that such third-parties have represented to us that they have the right to disclose your personal information to us.
          </p>
        </section>

        {/* Section: Other information collected */}
        <section id="other-information" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Other information that is collected when you use the Site</h2>
          <p className="mb-4">
            In addition to the personal information you may provide to us as described above, we automatically collect certain device and statistical information to make our Site work better for you. For example, we collect the IP address, network connection, the device domain used to access our Site, the operating system on your device, your device settings, the type and version of your browser, crash data, other unique device identifiers, the mobile application or website you came from to access the Site, the page you entered and exited at, any searches, pages or advertising within our Site that is viewed by that IP address and what country you are from. We use this information to monitor the performance of our Site (such as number of visits, average time spent, page views) and for our business purposes such as working to continually upgrade our Site.
          </p>
          <p className="mb-4">
            Our Site uses cookies and other technologies that are similar to cookies ("Cookies"). A Cookie is a small file of letters and numbers that we may set on your device to store and sometimes track information about you. Cookies and similar technologies we use are designed for "analytics". This allows us to distinguish you from other users of the Site. This helps us to provide you with a good experience when you use the Site and allows us to improve our Site.
          </p>
          <p className="mb-4">
            We use the following Cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Strictly Necessary Cookies.</strong> These are Cookies that are required for the operation of our Site. They include, for example, Cookies that enable you to remember information you have typed into an online form.</li>
            <li><strong>Preference Cookies:</strong> Also known as "functionality cookies," these cookies allow a website to remember choices a user has made in the past, like what language the user prefers or what the user's user name and password are so that the user can automatically log in.</li>
            <li><strong>Statistics/Performance Cookies.</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our Site when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
            <li><strong>Targeting/Marketing Cookies.</strong> These Cookies record your visit to our Site, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant.</li>
          </ul>
          <p className="mb-4">
            We also may use third party Cookies and other tracking technologies from our third party service providers to monitor and manage your use of our Site and Services. A few examples of the services we use or receive from third parties are as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Google Analytics:</strong> we may use Google Analytics to help analyze use of our Site. This analytical tool collects standard internet log information and visitor behavior information in an anonymous form. This information is then used to evaluate visitors' use of the Site and to compile statistical reports on website activity for this Site. To opt out of being tracked by Google Analytics across all websites, visit Google's opt out page;</li>
            <li><strong>Mailchimp:</strong> we may use Mailchimp and similar email platforms for sending marketing and transaction emails. These services may collect information. These services use Cookies and other tracking technologies to collect some information about your device and interaction with an email. These services also collect information and metrics relating to the deliverability of emails and other electronic communications sent through or in connection with the Site and Services. This information is used to improve the content and operation of the Services, and facilitate research and analysis of the Site and Services. For further details, please see Mailchimp's privacy policy by clicking on this link;</li>
            <li><strong>Hotjar:</strong> we may use an application called Hotjar that helps us better understand our users experience and this enables us to build and maintain our service with user feedback. Hotjar uses cookies and other technologies to collect data on our users' behavior and their devices and stores this information in a pseudonymized user profile. Neither Hotjar nor we will ever use this information to identify individual users or to match it with further data on an individual user. For further details, please see Hotjar's privacy policy by clicking on this link. You can opt-out to the creation of a user profile, Hotjar's storing of data about your usage of our site and Hotjar's use of tracking cookies on other websites by following this opt-out link;</li>
            <li><strong>Intercom:</strong> we may use an application called Intercom as a medium for communications, either through email or through messages within our Site and to help understand your usage of our services. In particular, we provide a limited amount of your information (such as sign-up date and some personal information like your email address) to Intercom, Inc. ("Intercom") and utilize Intercom to collect data for analytics purposes when you visit our website or use our product. As a data processor acting on our behalf, Intercom analyzes your use of our website and/or product and tracks our relationship by way of cookies and similar technologies so that we can improve our service to you. For more information on Intercom's use of cookies, please visit https://www.intercom.com/terms-and-policies#cookie-policy. As part of our service agreements, Intercom collects publicly available contact and social information related to you, such as your email address, gender, company, job title, photos, website URLs, social network handles and physical addresses, to enhance your user experience. For more information on the privacy practices of Intercom, please visit https://www.intercom.com/terms-and-policies#privacy. Intercom's services are governed by Intercom's terms of use which can be found at https://www.intercom.com/terms-and-policies#terms.</li>
            <li><strong>Heap Analytics:</strong> we may also use Heap Analytics, a web analysis service provided by Heap Inc. Heap uses cookies, which are text files placed on your computer, to help the Site analyze how users use the Site. For more information on the privacy practices of Heap, please visit the Heap Analytics Privacy Statement at https://heapanalytics.com/privacy.</li>
            <li><strong>ZOHO:</strong> we may use Zoho as our customer relationship management (CRM) database we use to securely store user information – you can find ZOHO's Privacy Policy here: https://www.zoho.com/privacy.html</li>
            <li><strong>Calendly:</strong> we may work with Calendly LLC to allow Site visitors to schedule online calls or meetings with us. When you schedule an appointment through our website, you are redirected to Calendly to schedule the appointment for which you may share certain information. This can include your name, email address and phone number; email addresses of other people; the need for the meeting; and any other information you provide us. If you receive an invitation from us and do not wish to become a Calendly User please contact us through other means to set up your meeting. For more information regarding Calendly Policies, please check their Privacy Policy: https://calendly.com/pages/privacy#cookies-and-other-tracking-mechanisms</li>
            <li><strong>Facebook Analytics:</strong> to help us understand how our customers use the Site and to produce remarketing campaigns and targeted advertising – you can find Facebook's Privacy Policy here: https://www.facebook.com/policy.php</li>
            <li><strong>Twitter Analytics:</strong> to help us understand how our customers use the Site and to produce remarketing campaigns and targeted advertising – you can find Twitter's Privacy Policy here: https://twitter.com/en/privacy</li>
            <li><strong>LinkedIn Analytics:</strong> to help us understand how our customers use the Site and to produce remarketing campaigns and targeted advertising – you can find LinkedIn's Privacy Policy here: https://www.linkedin.com/legal/privacy-policy</li>
          </ul>
          <p className="mb-4">
            We may share your non-personal information with third parties to improve our services in an anonymized or aggregated form that is designed to prevent anyone from identifying you. We reserve the right to keep non-personal information indefinitely.
          </p>
          <p className="mb-4">
            Most internet browsers allow you to remove or manage Cookie functions and adjust your privacy and security preferences. For information on how to do this, access the "help" menu on your internet browser or visit https://www.aboutcookies.org/how-to-control-cookies/. Please note that disabling our Cookies may result in your inability to take full advantage of all of the features of our Site.
          </p>
          <p className="mb-4">
            We also collect statistics about use of the Services accessed through the Site. This information will be kept confidential, however, aggregate statistics that do not personally identify an individual will be kept by us and such aggregate statistics may be made available to other members or third parties.
          </p>
        </section>

        {/* Section: Why do we collect */}
        <section id="why-we-collect" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why do we collect your personal information?</h2>
          <p className="mb-4">
            We only collect information from you that is necessary to provide you with the products and services available through our Site and which enables us to manage, maintain, and develop our operations. For example, we collect information in order to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>to fulfill your requests to us, including in reviewing and assessing your insurance needs, identifying quote information and appropriate insurance products, processing your insurance application(s) or for such other purposes as you may initiate or request from us, including those more particularly described in the Terms and on the Site;</li>
            <li>allow you to participate in, subscribe to or otherwise receive services and communications from us;</li>
            <li>establish, maintain and manage our relationship with you, including by contacting you by SMS, phone, fax or email so that we may provide you with any services or communications that you have requested;</li>
            <li>deliver and enhance the services of insurance quotes comparison, insurance advisory, brokerage and overall customer service;</li>
            <li>submit applications to insurers on your behalf in connection with your use of our Site and Services;</li>
            <li>pass to insurers the information necessary to complete applications and for use in connection with underwriting, providing accurate quotes, determining policy pricing and risk categorization, and securing insurance policies;</li>
            <li>determine appropriate policy pricing and risk categorization;</li>
            <li>determine whether any requests for further personal information is required to provide with the Services or the services of any third parties;</li>
            <li>understand your preferences, needs and interests and customize the Services experience based on your preferences as well as other information about you, such as geographical location;</li>
            <li>conduct analysis and evaluations to understand usage trends, consumer needs and to improve our Site, Services, communications and operations;</li>
            <li>create statistical and anonymized reports, analysis and predictive models, rules and insights using aggregated information about you and other customers;</li>
            <li>help our team and third-party service providers respond to your needs and questions;</li>
            <li>enable use to comply with applicable laws and regulatory requirements;</li>
            <li>address intellectual property, right of privacy or defamation issues related to content you have posted on the Services; and</li>
            <li>any other reasonable purpose to which you consent.</li>
          </ul>
          <p className="mb-4">
            By consenting to the collection, use and disclosure of your personal information through the Site you allow us to fulfill the purposes for which we collect your personal information. When we collect your information for research and development purposes, we ensure that any information used for our analysis and reports will be de-identified and aggregated in a manner that will not identify you.
          </p>
        </section>

        {/* Section: How we use your personal information */}
        <section id="how-we-use" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How we use your personal information</h2>
          <p className="mb-4">
            We may use your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>as permitted or required by applicable law or regulatory requirements;</li>
            <li>for the purposes described in this Privacy Policy;</li>
            <li>for any additional purposes for which we have obtained your consent.</li>
          </ul>
          <p className="mb-4">
            We may use your personal information without your knowledge or consent where we are permitted or required by applicable law or regulatory requirements to do so.
          </p>
        </section>

        {/* Section: Communication */}
        <section id="communication" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The ways that we communicate with you</h2>
          <p className="mb-4">
            We will collect your consent prior to sending you any commercial electronic messages unless an exception under Canada's Anti-Spam Legislation applies. You will have an opportunity to opt-out of receiving commercial electronic messages at any time. In connection with your use of the Site and Services, we may send you transaction and marketing communications, as described below.
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Transactional Communications</h3>
          <p className="mb-4">
            We provide notifications for certain activities relating to your use of our Site and Services. Examples of transaction communications we may send include sending you emails and SMS messages when you create an account, set/change your password, select insurance quotes, complete an online insurance application, schedule a call with us, or when we provide you with any updates on your ongoing quotes and applications. In addition, we may send you an access code to your mobile number registered with us to help you complete certain actions like login, change password, or reset a forgotten password. When you sign up for an account with us, we request you to set a password for the account. When you attempt to set your password for your account for the first time or request a password reset, we will send you a one-time access code through an SMS message to confirm your identity. You can also choose to log in to your account at any time by requesting a one-time access code which will be sent to your phone number through an SMS. The access code will be sent to the phone number you used at the time of signing up. You can then use the access code to set or reset your password or log in to your account.
          </p>
          <p className="mb-4">
            We use Text Message / SMS service provider Twilio for sending you SMS/Text Messages, including to authenticate you: when you attempt to set a password to your account, request to reset your password, or choose to login by requesting a one-time access code. For such purposes, we may share your registered phone number with Twilio to enable this service. For more information on the privacy practices of Twilio, please visit the Twilio's Privacy Statement at https://www.twilio.com/legal/privacy. You can cancel the SMS service at any time. Just text "STOP" to the short code. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just reply START to this message and we will start sending SMS messages to you again. If at any time you forget what keywords are supported, just text "HELP". After you send the SMS message "HELP" to us, we will respond with instructions on how to unsubscribe.
          </p>
          <p className="mb-4">
            While you may unsubscribe from marketing communications as described below, you will continue to receive service/transactional messages from us related to your account.
          </p>
          <p className="mb-4">
            By signing up to your account and/or by submitting your contact information, you are consenting to be contacted by us or one of our representatives or affiliates by telephone, text message, email, fax, telephone or any means. We may use your e-mail address, phone number or other PII (a) to contact you for administrative purposes such as customer service, (b) to address intellectual property, right of privacy or defamation issues related to content you have posted on the Services, and/or (c) to send you promotional materials, offers, and/or messages related to our Services and the activities of third parties we work with.
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Marketing Communications</h3>
          <p className="mb-4">
            When you sign up to an account with us or use our Services or request for subscription to our newsletter, we will share with you articles, news, blogs, reports, surveys, survey findings, and offers regarding financial and consumer products accessible or available for purchase through our Site or other offers for products and services that we believe may be of interest to you. The marketing information shared may be in the form of a periodic newsletter sent over email.
          </p>
          <p className="mb-4">
            If at any time you would like to unsubscribe from receiving future marketing emails, please contact as at contact@policyadvisor.com, and we will promptly remove you from our marketing correspondence lists. You can also opt-out of receiving marketing communications through unsubscribe links provided in the messages.
          </p>
        </section>

        {/* Section: How We Share Your Information */}
        <section id="how-we-share" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>
          <p className="mb-4">
            Since our goal is to assist you assess your insurance needs and purchase the best and most suitable insurance policies for your needs, your personal information will be shared with insurers and management general agents for the purposes providing you with the use of our Services and the products and services you request from such third-parties.
          </p>
          <p className="mb-4">
            We may also disclose your personal information to our affiliates and our respective employees, contractors, consultants, service providers and other parties who require such information to assist us with managing our relationship with you, including third-parties that provide services to us on or on our behalf. For example, and without limiting the foregoing, we may share personal information with the following third-parties:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>insurers, for obtaining quotes, submitting and processing insurance applications;</li>
            <li>insurance and paramedical service providers that assist insurers in completing medical and non-medical underwriting;</li>
            <li>operators of insurance industry databases, to verify your application information;</li>
            <li>managing general agents, for ensuring completeness of application and passing completed application to the insurers;</li>
            <li>service providers, to perform standard business functions on our behalf including those related to providing insurance quote information, hosting or developing and maintaining website functionality, conducting research and data analysis for us, managing client servicing and communication tools, and providing marketing, communication or other promotional assistance;</li>
            <li>with corporate affiliates including any of our parent companies, subsidiaries, joint ventures, or other companies under common control with us;</li>
            <li>with counterparties in the course of a corporate sale, merger, reorganization, sale of assets, dissolution, or similar event, some or all of the Information may be part of the transferred assets; and</li>
            <li>with any other persons for the purposes for which you have provided consent.</li>
          </ul>
          <p className="mb-4">
            Your personal information may be disclosed:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>for the purposes for which it was collected, as described in this Privacy Policy;</li>
            <li>as permitted or required by applicable law or regulatory requirements;</li>
            <li>to comply with valid legal processes such as search warrants, subpoenas or court orders; and</li>
            <li>for any additional purposes for which you consent.</li>
          </ul>
        </section>

        {/* Section: Sharing with insurers */}
        <section id="sharing-with-insurers" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sharing your personal information with insurers</h2>
          <p className="mb-4">
            if you choose to submit an application to an insurer (including by requesting that we submit an application on your behalf) through our Site or Services or through the insurer's own website (or other electronic application), you may be asked to provide additional personal information when completing and submitting the application. In connection with the completion and submission of the application, you will be asked to agree to the insurer's own terms, conditions, and policies with respect to the collection, use and disclosure of the personal information that is included in your application. In other words, the personal information that you submit to an insurer will be governed by the insurer's privacy policy and we recommend that you review the insurer's privacy policy before submitting an application. We do not send any information to an insurer until the application is complete and you authorize us to submit the application to the insurer on your behalf.
          </p>
        </section>

        {/* Section: Third-party marketers */}
        <section id="third-party-marketers" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sharing with third-party marketers</h2>
          <p className="mb-4">
            We will not share your personal information with any third-party marketers without your specific consent. However, we may share non-identifiable information, such as aggregate data and non-personal information (e.g., Site usage information), as described in this Privacy Policy, with third parties.
          </p>
        </section>

        {/* Section: Disclosing outside Canada */}
        <section id="disclosing-outside-canada" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclosing or transferring your personal information outside Canada</h2>
          <p className="mb-4">
            Since we may share your personal information with third parties, as described in this Privacy Policy, your personal information may be collected, used, processed stored or disclosed outside your jurisdiction of residence, including in the United States. As such, your personal information may potentially be accessible to law enforcement and national security authorities of another jurisdiction. If you would like further information about our policies and practices regarding third parties (including our service providers) with whom we disclose your personal information and how these parties collect, use, disclose and store personal information, please contact our Privacy Officer using the contact details below.
          </p>
          <p className="mb-4">
            By providing your personal information to us, you consent to our disclosure of this information to our affiliates, employees, contractors, consultants, service providers and other third parties as described in this Privacy Policy, including those that may be located outside of your jurisdiction of residence, for the purposes of processing your personal information on our behalf, your behalf, providing services to us or to you, operating and hosting the Site and business and for the other purposes described in this Privacy Policy.
          </p>
        </section>

        {/* Section: Consent */}
        <section id="consent" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your consent is important to us</h2>
          <p className="mb-4">
            It is important to us that we collect, use or disclose your personal information only when we have your consent to do so. Depending on the sensitivity of the personal information, your consent may be implied, deemed (using an opt-out mechanism) or express. We may collect, use or disclose your personal information without your knowledge or consent where we are permitted or required to do so by applicable law or regulatory requirements.
          </p>
          <p className="mb-4">
            Typically, we will seek your consent at the time that we collect your personal information. In certain circumstances, your consent may be obtained after collection but prior to our use or disclosure of your personal information. If we plan to use or disclose your personal information for a purpose not previously identified (either in this Privacy Policy or separately), we will endeavour to advise you of that purpose before such use or disclosure.
          </p>
          <p className="mb-4">
            You may change or withdraw your consent at any time, subject to legal or contractual obligations and reasonable notice, by contacting our Privacy Officer using the contact information set out below. All communications with respect to such withdrawal or variation of consent should be in writing and addressed to our Privacy Officer. If you withdraw or vary your consent, we may not be able to provide you with the communications and/or services you request through our Site. For example, if you would like to receive our newsletter, but are not willing to provide your email address, we will not be able to fulfil your request.
          </p>
          <p className="mb-4">
            Unless you advise us otherwise, through the access and use of our Site, services and communications, you have consented to the collection, use and disclosure of your personal information as explained in this Privacy Policy.
          </p>
        </section>

        {/* Section: How We Protect Personal Information */}
        <section id="how-we-protect" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Protect Personal Information</h2>
          <p className="mb-4">
            We use reasonable physical, technical, and administrative security measures to protect personal information we collect from loss, misuse, unauthorized access, or improper disclosure. For example, we use encryption technologies when transmitting information to and from the Site and with our third-party service providers. Our Site is built on platforms that incorporate the latest encryption and security devices. Please understand that no security technology is completely secure, and remember that when communicating with us, email is not a secure form of communication when transmitting sensitive or personal information.
          </p>
          <p className="mb-4">
            We use an Apache server with Secure Socket Layer protocol to secure your personal information in order to reduce the risks of theft, damage, loss of information, or unauthorized access, disclosure, modification or use of information. We will continue to evaluate and adopt new security tools as they become available. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Section: Access to your personal information */}
        <section id="access" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Access to your personal information</h2>
          <p className="mb-4">
            You can ask to access the personal information that we have received from or possess about you. If you want to review, verify or correct your personal information, please contact our Privacy Officer. Please note that any such communication must be in writing.
          </p>
          <p className="mb-4">
            When requesting access to your personal information, please note that we may request specific information from you to enable us to confirm your identity and right to access, as well as to search for and provide you with the personal information that we hold about you. We may charge you a fee to access your personal information; however, we will advise you of any fee in advance. If you require assistance in preparing your request, please contact our Privacy Officer.
          </p>
          <p className="mb-4">
            Your right to access the personal information that we hold about you is not absolute. There are instances where applicable law or regulatory requirements allow or require us to refuse to provide some or all of the personal information that we hold about you. In addition, the personal information may have been destroyed, erased or made anonymous in accordance with our record retention obligations and practices. In the event that we cannot provide you with access to your personal information, we will endeavour to inform you of the reasons why, subject to any legal or regulatory restrictions.
          </p>
        </section>

        {/* Section: Retention */}
        <section id="retention" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Retention of personal information</h2>
          <p className="mb-4">
            We don't keep your personal information forever. We keep your personal information as long as is reasonably necessary for us to complete our dealings with you, or as may be required by law, whichever is longer.
          </p>
        </section>

        {/* Section: Testimonials */}
        <section id="testimonials" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <p className="mb-4">
            We may request a testimonial from you to comment on our Services. You acknowledge and agree that we may use any personal information contained in the testimonial to display the testimonial on our Site, related online and digital platforms and in our promotional materials. For clarity, when you provide us with a testimonial through our Site or through a third party website, such as www.reviews.io and/or www.trustpilot.com, we may post it on our Site or in other materials and media, along the personal information that you have included in the testimonial. If you would like the testimonial removed, please contact us at contact@policyadvisor.com
          </p>
        </section>

        {/* Section: Advertising */}
        <section id="advertising" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
          <p className="mb-4">
            We may partner with third parties to display advertising on our Site or to manage our advertising on other sites, including ads pertaining to our clients' products. Our third party partners may use cookies or similar technologies in order to provide you advertising based upon your browsing activities and interests.
          </p>
        </section>

        {/* Section: External Sites Links */}
        <section id="external-links" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Sites Links</h2>
          <p className="mb-4">
            Our Site may contain links to other websites that may be subject to less stringent privacy standards. These links are provided for your convenience only and you assume all risk for clicking these links to other websites. We cannot assume any responsibility for the privacy practices, policies or actions of the third parties that operate these websites. PolicyAdvisor is not responsible for how such third parties collect, use or disclose your personal information. You should review the privacy policies of these websites before providing them with personal information.
          </p>
          <p className="mb-4">
            Without limiting the generality of the foregoing, please note that certain insurers request that you submit an application through their website or electronic applications rather than through this Site. To the extent that you choose to submit any personal information through an insurer's website or other electronic application, PolicyAdvisor is not responsible for the insurer's collection, use or disclosure of the personal information you submit to the insurer. You should review the privacy policy applicable to the insurer's website or electronic application before providing your personal information to them.
          </p>
        </section>

        {/* Section: Request Changes */}
        <section id="request-changes" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How You Can Request Changes to Your Data</h2>
          <p className="mb-4">
            It is important that the information contained in our records is both accurate and current. If your personal information happens to change during the course of our relationship, please keep us informed of such changes. While we make reasonable effort to make sure your data is correct and complete, you may reach out to us to request changes. A written request is required that provides details regarding your identification the correction being requested. We may not accommodate a request to change or delete information if we believe doing so would violate any law or legal requirement, or cause the information to be incorrect.
          </p>
        </section>

        {/* Section: Interpretation */}
        <section id="interpretation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interpretation of this Privacy Policy</h2>
          <p className="mb-4">
            Any interpretation associated with this Privacy Policy will be made by our Privacy Officer. This Privacy Policy includes examples but is not intended to be restricted in its application to such examples; therefore, where the word "including" is used, it shall mean "including without limitation".
          </p>
          <p className="mb-4">
            This Privacy Policy does not create or confer upon any individual any rights, or impose upon PolicyAdvisor any rights or obligations outside of, or in addition to, any rights or obligations imposed by Canada's federal and provincial privacy laws, as applicable. Should there be, in a specific case, any inconsistency between this Privacy Policy and Canada's federal and provincial privacy laws, as applicable, this Privacy Policy shall be interpreted, in respect of that case, to give effect to, and comply with, such privacy laws.
          </p>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy | InsureTravel",
              "description": "Learn about how InsureTravel collects, uses, and protects your personal information.",
              "publisher": {
                "@type": "Organization",
                "name": "InsureTravel",
                "logo": {
                  "@type": "ImageObject",
                  "url": IMAGES.logo?.src
                }
              },
              "mainEntity": {
                "@type": "Article",
                "name": "Privacy Policy",
                "dateModified": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "InsureTravel"
                }
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  )
} 