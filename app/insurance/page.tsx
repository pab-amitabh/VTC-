"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import insuranceData from '@/data/insurance-companies.json'
import { Metadata } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Metadata can't be used in Client Components, so we'll need to use alternative approaches
// export const metadata: Metadata = {
//   title: 'Insurance Companies | InsureTravel',
//   description: 'Compare travel insurance companies for visitors to Canada. Find the best coverage for your trip.',
//   openGraph: {
//     title: 'Insurance Companies | InsureTravel',
//     description: 'Compare travel insurance companies for visitors to Canada. Find the best coverage for your trip.',
//     type: 'website',
//   },
// }

// Define the type for insurance company data
type InsuranceCompany = {
  name: string;
  description: string;
  logo: string;
  benefits: any;
  eligibility: any;
  refunds: any;
  extensions: any;
  claims: any;
  exclusions: any;
  downloads: any;
  [key: string]: any;
}

// Define the type for the insurance data
type InsuranceData = {
  [company: string]: InsuranceCompany;
}

// Company reviews for each insurance provider
const companyReviews: {[key: string]: {rating: number, review: string}} = {
  "manulife": {
    rating: 5,
    review: "Manulife is the largest life insurance provider in Canada and one of the largest life insurers on the entire planet. However, while size is not always synonymous with quality, Manulife's dedication to setting the pace for digital innovation in life insurance means their product is also one of the country's best. The company was among the first providers life insurers to offer electronic policy delivery, although e-policies have since become more common. The company's underwriting process utilizes predictive analytics to approve up to 80 million dollars in life insurance coverage without the need for medical underwriting. The company's Manulife Vitality program - mentioned below - rewards policyholders for maintaining a healthy lifestyle."
  },
  "allianz": {
    rating: 4.5,
    review: "Allianz is one of the world's leading insurance providers with a strong reputation for reliability and customer service. Their travel insurance plans offer comprehensive coverage options for visitors to Canada. Their digital tools and claims process are streamlined, making it easy for travelers to get the support they need in emergency situations. Allianz's worldwide presence gives customers confidence that they'll receive quality care regardless of where they are traveling."
  },
  "bluecross": {
    rating: 4.8,
    review: "Blue Cross is highly regarded for its comprehensive health insurance offerings in Canada. Their visitor insurance plans provide excellent coverage with clear terms and competitive pricing. Blue Cross has an extensive network of healthcare providers across Canada, ensuring that visitors can easily access medical care when needed. Their customer service is consistently rated highly, with multilingual support staff available to assist clients from around the world."
  },
  "21st-century": {
    rating: 4.2,
    review: "21st Century offers innovative insurance solutions with flexible plan options for visitors to Canada. Their digital-first approach makes it easy to purchase and manage policies online. They are known for their competitive rates and clear policy documentation. Customer service is generally good, though response times can vary during peak travel seasons. Their Enhanced and Standard plans provide robust coverage options for travelers with different needs and budgets."
  },
  "destination-canada": {
    rating: 4.7,
    review: "Destination Canada provides specialized insurance designed specifically for visitors to Canada. They offer excellent coverage options with particularly strong benefits for longer stays. Their policies are known for their clarity and straightforward terms. The company has built a reputation for prompt claims processing and helpful customer support. Their side-trip coverage is particularly valuable for visitors who plan to explore beyond Canada during their stay."
  },
  "tugo": {
    rating: 4.6,
    review: "TuGo is recognized for its comprehensive travel insurance solutions with flexible coverage options. Their visitor insurance plans are known for being particularly inclusive, with options for pre-existing conditions that many other insurers don't cover. The TuGo Wallet app provides convenient access to policy information and emergency contacts. Their customer service team receives high marks for responsiveness and expertise in handling complex situations."
  },
  "gms": {
    rating: 4.3,
    review: "GMS offers solid insurance coverage for visitors to Canada with clear policy terms and competitive pricing. Their plans provide good value, particularly for travelers with specific health requirements. The company has a straightforward claims process and responsive customer service. While their digital tools aren't as advanced as some competitors, their core insurance products are reliable and well-regarded in the market. Their flexible refund policy is appreciated by travelers with uncertain plans."
  }
};

export default function InsuranceCompaniesPage() {
  // Get all insurance companies from the data
  const companies = Object.keys(insuranceData) as Array<keyof typeof insuranceData>;
  const typedInsuranceData = insuranceData as InsuranceData;
  
  // State to track the currently selected company
  const [selectedCompany, setSelectedCompany] = useState<string>(companies[0] as string);
  
  // Function to format company name for display
  const formatCompanyName = (companyKey: string) => {
    if (companyKey === '21st-century') return '21st Century';
    return typedInsuranceData[companyKey].name.split(' ')[0];
  };
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mb-8 gap-8">
          {/* Left Column - Company Review (30% width) */}
          <div className="w-full lg:w-[30%]">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="mb-6 flex flex-col items-center">
                {typedInsuranceData[selectedCompany].logo && (
                  <div className="flex justify-center w-full mb-4">
                    <Image
                      src={typedInsuranceData[selectedCompany].logo}
                      alt={`${typedInsuranceData[selectedCompany].name} Logo`}
                      width={200}
                      height={80}
                      className="h-auto object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold mr-2">{companyReviews[selectedCompany]?.rating || 5}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg 
                        key={star} 
                        className={`w-5 h-5 ${
                          star <= Math.floor(companyReviews[selectedCompany]?.rating || 5) 
                            ? 'text-yellow-400' 
                            : star <= (companyReviews[selectedCompany]?.rating || 5) 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-4 text-deepBlue">Our Review</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {companyReviews[selectedCompany]?.review || 
                  `${typedInsuranceData[selectedCompany].name} offers comprehensive insurance coverage for visitors to Canada, with excellent customer service and competitive rates.`}
              </p>
              
              <div className="mt-8">
                <Link 
                  href="/"
                  className="bg-deepBlue text-white px-6 py-3 rounded-lg font-semibold inline-block text-center w-full hover:bg-deepBlue/90 transition-colors duration-300 shadow-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Company Tabs Below Review - Vertical Design */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Select Insurance Company</h3>
              <div className="space-y-2">
                {companies.map(company => (
                  <button
                    key={company}
                    onClick={() => setSelectedCompany(company)}
                    className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                      selectedCompany === company
                        ? 'bg-deepBlue text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-sm md:text-base font-medium">{formatCompanyName(company)}</span>
                    {selectedCompany === company && (
                      <svg className="ml-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Insurance Content (70% width) */}
          <div className="w-full lg:w-[70%]">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div key={selectedCompany}>
                <header className="mb-8">
                  <div className="flex items-center mb-5 border-b pb-5">
                    <Image
                      src={typedInsuranceData[selectedCompany].logo}
                      alt={`${typedInsuranceData[selectedCompany].name} Logo`}
                      width={180}
                      height={60}
                      className="mr-4 object-contain"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-deepBlue">{typedInsuranceData[selectedCompany].name}</h1>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {typedInsuranceData[selectedCompany].description}
                  </p>
                </header>
                
                <div className="mb-8">
                  <Tabs defaultValue="benefits" className="w-full">
                    <TabsList className="flex flex-wrap md:flex-nowrap rounded-lg bg-gray-100 p-1 mb-8">
                      <TabsTrigger value="benefits" className="flex-1 rounded-md px-2 py-2.5 text-sm md:text-base font-medium">Benefits</TabsTrigger>
                      <TabsTrigger value="eligibility" className="flex-1 rounded-md px-2 py-2.5 text-sm md:text-base font-medium">Eligibility</TabsTrigger>
                      <TabsTrigger value="refunds" className="flex-1 rounded-md px-2 py-2.5 text-sm md:text-base font-medium">Refunds</TabsTrigger>
                      <TabsTrigger value="extensions" className="flex-1 rounded-md px-2 py-2.5 text-sm md:text-base font-medium">Extensions</TabsTrigger>
                      <TabsTrigger value="claims" className="flex-1 rounded-md px-2 py-2.5 text-sm md:text-base font-medium">Claims</TabsTrigger>
                      <TabsTrigger value="exclusions" className="flex-1 rounded-md px-2 py-2.5 text-sm md:text-base font-medium">Exclusions</TabsTrigger>
                    </TabsList>
                    
                    {/* Benefits Tab */}
                    <TabsContent value="benefits" className="prose max-w-none">
                      <h3 className="text-deepBlue text-2xl font-bold mt-0 mb-6">{typedInsuranceData[selectedCompany].benefits.title}</h3>
                      <p className="mb-6">{typedInsuranceData[selectedCompany].benefits.introduction}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{typedInsuranceData[selectedCompany].benefits.emergency_medical.title}</h4>
                      <ul className="space-y-3">
                        {typedInsuranceData[selectedCompany].benefits.emergency_medical.items.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                          </li>
                        ))}
                      </ul>
                      
                      {typedInsuranceData[selectedCompany].benefits.emergency_medical.notes && (
                        <div className="mt-6 mb-6 bg-gray-50 p-4 rounded-lg">
                          {typedInsuranceData[selectedCompany].benefits.emergency_medical.notes.map((note: string, index: number) => (
                            <p key={index} className="text-sm italic mb-2" dangerouslySetInnerHTML={{ __html: note }}></p>
                          ))}
                        </div>
                      )}
                      
                      {typedInsuranceData[selectedCompany].benefits.trip_interruption && (
                        <>
                          <h4 className="text-xl font-semibold text-gray-800 mt-10 mb-4">{typedInsuranceData[selectedCompany].benefits.trip_interruption.title}</h4>
                          <p className="mb-4">{typedInsuranceData[selectedCompany].benefits.trip_interruption.description}</p>
                          
                          {typedInsuranceData[selectedCompany].benefits.trip_interruption.details && (
                            <>
                              <h5 className="text-lg font-semibold text-gray-800 mt-8 mb-3">{typedInsuranceData[selectedCompany].benefits.trip_interruption.details.title}</h5>
                              <p className="mb-4">{typedInsuranceData[selectedCompany].benefits.trip_interruption.details.description}</p>
                              <ol className="space-y-4 mb-6">
                                {typedInsuranceData[selectedCompany].benefits.trip_interruption.details.items.map((item: any, index: number) => (
                                  <li key={index}>
                                    {item.title && <p className="font-semibold mb-2">{item.title}</p>}
                                    {item.subitems.map((subitem: string, subIndex: number) => (
                                      <p key={subIndex} className="mb-2" dangerouslySetInnerHTML={{ __html: subitem }}></p>
                                    ))}
                                  </li>
                                ))}
                              </ol>
                              {typedInsuranceData[selectedCompany].benefits.trip_interruption.details.additional_note && (
                                <p>{typedInsuranceData[selectedCompany].benefits.trip_interruption.details.additional_note}</p>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </TabsContent>
                    
                    {/* Eligibility Tab */}
                    <TabsContent value="eligibility" className="prose max-w-none">
                      <h3 className="text-deepBlue text-2xl font-bold mt-0 mb-6">{typedInsuranceData[selectedCompany].eligibility.title}</h3>
                      {typedInsuranceData[selectedCompany].eligibility.sections.map((section: any, index: number) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{section.title}</h4>
                          
                          {section.description && (
                            typeof section.description === 'string' ? 
                              <p className="mb-4">{section.description}</p> : 
                              section.description.map((desc: string, descIndex: number) => (
                                <p key={descIndex} className="mb-4">{desc}</p>
                              ))
                          )}
                          
                          {section.items && (
                            <ul className="space-y-2 mb-6">
                              {section.items.map((item: string, itemIndex: number) => (
                                <li key={itemIndex} className="flex items-start">
                                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          {section.note && <p className="text-sm italic mb-4">{section.note}</p>}
                          
                          {section.notes && (
                            typeof section.notes === 'string' ? 
                              <p className="text-sm italic mb-4">{section.notes}</p> : 
                              section.notes.map((note: any, noteIndex: number) => (
                                <div key={noteIndex} className="mb-4">
                                  {note.title && <h5 className="text-lg font-semibold mb-2">{note.title}</h5>}
                                  {note.items && (
                                    <ul className="space-y-2 mb-4">
                                      {note.items.map((item: string, itemIndex: number) => (
                                        <li key={itemIndex} className="text-sm">{item}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))
                          )}
                          
                          {section.sections && section.sections.map((subsection: any, subIndex: number) => (
                            <div key={subIndex} className="ml-4 mb-6">
                              <h5 className="text-lg font-semibold mt-4 mb-3">{subsection.title}</h5>
                              {subsection.description && <p className="mb-4">{subsection.description}</p>}
                              {subsection.items && (
                                <ul className="space-y-2 mb-4">
                                  {subsection.items.map((item: string, itemIndex: number) => (
                                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                                  ))}
                                </ul>
                              )}
                              {subsection.note && <p className="text-sm italic mb-4">{subsection.note}</p>}
                            </div>
                          ))}
                          
                          {section.medication_note && (
                            <div className="mt-4">
                              <p className="mb-2"><strong>{section.medication_note.title}</strong> {section.medication_note.description}</p>
                              <ol type="a" className="space-y-2 ml-5">
                                {section.medication_note.items.map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                      ))}
                    </TabsContent>
                    
                    {/* Refunds Tab */}
                    <TabsContent value="refunds" className="prose max-w-none">
                      <h3 className="text-deepBlue text-2xl font-bold mt-0 mb-6">{typedInsuranceData[selectedCompany].refunds.title}</h3>
                      {typedInsuranceData[selectedCompany].refunds.sections.map((section: any, index: number) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{section.title}</h4>
                          
                          {section.description && (
                            typeof section.description === 'string' ? 
                              <p className="mb-4">{section.description}</p> : 
                              section.description.map((desc: string, descIndex: number) => (
                                <p key={descIndex} className="mb-4">{desc}</p>
                              ))
                          )}
                          
                          {section.items && (
                            <ul className="space-y-3 mb-6">
                              {section.items.map((item: any, itemIndex: number) => {
                                if (typeof item === 'string') {
                                  return (
                                    <li key={itemIndex} className="flex items-start">
                                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={itemIndex} className="mb-4">
                                      <div className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                                      </div>
                                      <ul className="space-y-2 mt-2 ml-7">
                                        {item.subitems.map((subitem: string, subIndex: number) => (
                                          <li key={subIndex} dangerouslySetInnerHTML={{ __html: subitem }}></li>
                                        ))}
                                      </ul>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          )}
                          
                          {section.note && <p className="text-sm italic">{section.note}</p>}
                        </div>
                      ))}
                    </TabsContent>
                    
                    {/* Extensions Tab */}
                    <TabsContent value="extensions" className="prose max-w-none">
                      <h3 className="text-deepBlue text-2xl font-bold mt-0 mb-6">{typedInsuranceData[selectedCompany].extensions.title}</h3>
                      {typedInsuranceData[selectedCompany].extensions.sections.map((section: any, index: number) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{section.title}</h4>
                          
                          {section.description && (
                            typeof section.description === 'string' ? 
                              <p className="mb-4">{section.description}</p> : 
                              section.description.map((desc: string, descIndex: number) => (
                                <p key={descIndex} className="mb-4">{desc}</p>
                              ))
                          )}
                          
                          {section.items && (
                            <ul className="space-y-3 mb-6">
                              {section.items.map((item: any, itemIndex: number) => {
                                if (typeof item === 'string') {
                                  return (
                                    <li key={itemIndex} className="flex items-start">
                                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={itemIndex} className="mb-4">
                                      <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                                      <p>{item.description}</p>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          )}
                          
                          {section.note && <p className="text-sm italic">{section.note}</p>}
                        </div>
                      ))}
                    </TabsContent>
                    
                    {/* Claims Tab */}
                    <TabsContent value="claims" className="prose max-w-none">
                      <h3 className="text-deepBlue text-2xl font-bold mt-0 mb-6">{typedInsuranceData[selectedCompany].claims.title}</h3>
                      {typedInsuranceData[selectedCompany].claims.sections.map((section: any, index: number) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{section.title}</h4>
                          
                          <div className="mb-4">
                            {section.description.map((desc: string, descIndex: number) => {
                              if (desc.includes('http')) {
                                return <p key={descIndex} className="mb-2" dangerouslySetInnerHTML={{ __html: desc }}></p>;
                              }
                              
                              if (desc.includes('P.O. Box') || desc.includes('claims') || desc.match(/\d+ .* Street/i)) {
                                return (
                                  <address key={descIndex} className="not-italic mb-4">
                                    {desc.split('\n').map((line: string, lineIndex: number) => (
                                      <React.Fragment key={lineIndex}>
                                        {line}
                                        <br />
                                      </React.Fragment>
                                    ))}
                                  </address>
                                );
                              }
                              
                              return <p key={descIndex} className="mb-2">{desc}</p>;
                            })}
                          </div>
                          
                          {section.note && <p className="text-sm italic mt-4">{section.note}</p>}
                        </div>
                      ))}
                    </TabsContent>
                    
                    {/* Exclusions Tab */}
                    <TabsContent value="exclusions" className="prose max-w-none">
                      <h3 className="text-deepBlue text-2xl font-bold mt-0 mb-6">{typedInsuranceData[selectedCompany].exclusions.title}</h3>
                      <p className="mb-6">{typedInsuranceData[selectedCompany].exclusions.introduction}</p>
                      
                      <ol className="space-y-4 list-decimal ml-5">
                        {typedInsuranceData[selectedCompany].exclusions.items.map((item: any, index: number) => {
                          if (typeof item === 'string') {
                            return <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>;
                          } else {
                            return (
                              <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                                <ul className="space-y-2 mt-2 ml-5">
                                  {item.subitems.map((subitem: string, subIndex: number) => (
                                    <li key={subIndex} dangerouslySetInnerHTML={{ __html: subitem }}></li>
                                  ))}
                                </ul>
                              </li>
                            );
                          }
                        })}
                      </ol>
                      
                      {typedInsuranceData[selectedCompany].exclusions.note && (
                        <p className="mt-6">{typedInsuranceData[selectedCompany].exclusions.note}</p>
                      )}
                      
                      {typedInsuranceData[selectedCompany].exclusions.notes && (
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                          <h4 className="text-xl font-semibold mb-4">Additional Notes</h4>
                          <ul className="space-y-2">
                            {typedInsuranceData[selectedCompany].exclusions.notes.map((note: string, index: number) => (
                              <li key={index}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* Single Get a Quote button that links to home page */}
                <div className="flex justify-center mt-10 mb-8">
                  <Link 
                    href="/"
                    className="bg-deepBlue text-white px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-deepBlue/90 transition-colors duration-300 shadow-md"
                  >
                    Request a Quote
                  </Link>
                </div>
                
                {/* Policy Documents Section */}
                {typedInsuranceData[selectedCompany].downloads && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-deepBlue mb-4">Policy Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {typedInsuranceData[selectedCompany].downloads.map((download: any, index: number) => (
                        <div 
                          key={index}
                          className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="mr-3 text-deepBlue">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{download.name}</p>
                            <p className="text-sm text-gray-500">View Policy Document</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
} 