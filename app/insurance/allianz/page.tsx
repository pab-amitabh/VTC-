import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import React from 'react'
import insuranceData from '@/data/insurance-companies.json'

// Get the Allianz data from the JSON file
const allianzData = insuranceData.allianz;

export const metadata: Metadata = {
  title: `${allianzData.name} | InsureTravel`,
  description: `Learn about ${allianzData.name} benefits, eligibility, refunds, extensions, claims, and exclusions. Find the right coverage for your next trip.`,
  openGraph: {
    title: `${allianzData.name} | InsureTravel`,
    description: `Learn about ${allianzData.name} benefits, eligibility, refunds, extensions, claims, and exclusions. Find the right coverage for your next trip.`,
    type: 'website',
  },
}

export default function AllianzPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{allianzData.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {allianzData.description}
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="benefits" className="text-sm md:text-base">Benefits</TabsTrigger>
              <TabsTrigger value="eligibility" className="text-sm md:text-base">Eligibility</TabsTrigger>
              <TabsTrigger value="refunds" className="text-sm md:text-base">Refunds</TabsTrigger>
              <TabsTrigger value="extensions" className="text-sm md:text-base">Extensions</TabsTrigger>
              <TabsTrigger value="claims" className="text-sm md:text-base">Claims</TabsTrigger>
              <TabsTrigger value="exclusions" className="text-sm md:text-base">Exclusions</TabsTrigger>
            </TabsList>
            
            {/* Benefits Tab */}
            <TabsContent value="benefits" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{allianzData.benefits.title}</h2>
              <p className="mb-6">{allianzData.benefits.introduction}</p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{allianzData.benefits.emergency_medical.title}</h3>
              <ul className="space-y-2">
                {allianzData.benefits.emergency_medical.items.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              
              <div className="mt-6 mb-10">
                {allianzData.benefits.emergency_medical.notes.map((note: string, index: number) => (
                  <p key={index} className="text-sm italic mb-1" dangerouslySetInnerHTML={{ __html: note }}></p>
                ))}
              </div>
            </TabsContent>
            
            {/* Eligibility Tab */}
            <TabsContent value="eligibility" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{allianzData.eligibility.title}</h2>
              
              {allianzData.eligibility.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{section.title}</h3>
                  {section.description && (typeof section.description === 'string' ? 
                    <p className="mb-4">{section.description}</p> : 
                    section.description.map((desc: string, descIndex: number) => (
                      <p key={descIndex} className="mb-4">{desc}</p>
                    ))
                  )}
                  
                  {section.items && (
                    <ul className="space-y-2 mb-8">
                      {section.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                  
                  {section.note && <p className="mb-4">{section.note}</p>}
                  
                  {section.notes && (
                    <div>
                      {section.notes.map((noteSection: any, noteSectionIndex: number) => (
                        <div key={noteSectionIndex} className="mb-4">
                          {noteSection.title && <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-3">{noteSection.title}</h4>}
                          {noteSection.items && (
                            <ul className="space-y-2 mb-4">
                              {noteSection.items.map((item: string, itemIndex: number) => (
                                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
            
            {/* Refunds Tab */}
            <TabsContent value="refunds" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{allianzData.refunds.title}</h2>
              
              {allianzData.refunds.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{section.title}</h3>
                  
                  {section.description && (typeof section.description === 'string' ? 
                    <p className="mb-4">{section.description}</p> : 
                    section.description.map((desc: string, descIndex: number) => (
                      <p key={descIndex} className="mb-4">{desc}</p>
                    ))
                  )}
                  
                  {section.items && (
                    <ul className="space-y-2 mb-8">
                      {section.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </TabsContent>
            
            {/* Extensions Tab */}
            <TabsContent value="extensions" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{allianzData.extensions.title}</h2>
              
              {allianzData.extensions.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{section.title}</h3>
                  
                  {section.description && (typeof section.description === 'string' ? 
                    <p className="mb-8">{section.description}</p> : 
                    <div className="mb-8">
                      {section.description.map((desc: string, descIndex: number) => (
                        <p key={descIndex} className="mb-4">{desc}</p>
                      ))}
                    </div>
                  )}
                  
                  {section.items && Array.isArray(section.items) && (
                    <ul className="space-y-4 mb-8">
                      {section.items.map((item: any, itemIndex: number) => {
                        if (typeof item === 'string') {
                          return <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>;
                        } else {
                          return (
                            <li key={itemIndex} className="mb-4">
                              <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                              <p>{item.description}</p>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  )}
                  
                  {section.note && <p className="mb-4 text-sm italic">{section.note}</p>}
                </div>
              ))}
            </TabsContent>
            
            {/* Claims Tab */}
            <TabsContent value="claims" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{allianzData.claims.title}</h2>
              
              {allianzData.claims.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{section.title}</h3>
                  
                  <div className={index === allianzData.claims.sections.length - 1 ? "" : "mb-8"}>
                    {section.description.map((desc: string, descIndex: number) => {
                      // If the content includes a website URL, use dangerouslySetInnerHTML
                      if (desc.includes('www.') || desc.includes('http')) {
                        return <p key={descIndex} className="mb-4" dangerouslySetInnerHTML={{ __html: desc }}></p>;
                      }
                      
                      // Special handling for the mailing address
                      if (desc.includes('P.O. Box')) {
                        return (
                          <address key={descIndex} className="not-italic mb-8">
                            {desc.split('\n').map((line: string, lineIndex: number) => (
                              <React.Fragment key={lineIndex}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </address>
                        );
                      }
                      
                      return <p key={descIndex} className="mb-4">{desc}</p>;
                    })}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            {/* Exclusions Tab */}
            <TabsContent value="exclusions" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{allianzData.exclusions.title}</h2>
              <p className="mb-6">{allianzData.exclusions.introduction}</p>
              
              <ol className="space-y-4">
                {allianzData.exclusions.items.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ol>
              
              {allianzData.exclusions.notes && (
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Additional Notes</h4>
                  <ul className="space-y-2">
                    {allianzData.exclusions.notes.map((note: string, index: number) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#" className="bg-deepBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-deepBlue/90 transition-colors shadow-md transform hover:scale-105 active:scale-95">
            Request a Quote
          </a>
          <div className="flex gap-4">
            {allianzData.downloads.map((download: { name: string, url: string }, index: number) => (
              <a key={index} href={download.url} className="text-deepBlue hover:text-deepBlue/80 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {download.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={allianzData.logo} 
              alt={`${allianzData.name} Logo`} 
              className="h-12 w-auto"
            />
            <div>
              <p className="text-sm text-gray-600">Administrated by:</p>
              <p className="font-semibold">{allianzData.company_info.administrated_by}</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Underwritten by: {allianzData.company_info.underwritten_by}</p>
            <p className="text-sm text-gray-500">24 hours Assistance Center: {allianzData.company_info.assistance_center}</p>
          </div>
        </div>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceProduct",
              "name": allianzData.name,
              "description": allianzData.description,
              "insuranceCompany": {
                "@type": "Organization",
                "name": "Allianz Global Assistance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://your-domain.com" + allianzData.logo
                }
              },
              "offers": {
                "@type": "Offer",
                "category": "Travel Insurance",
                "priceCurrency": "CAD",
                "url": "https://your-domain.com/insurance/allianz"
              }
            })
          }}
        />
      </article>
    </div>
  );
} 