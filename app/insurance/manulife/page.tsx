import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import React from 'react'
import insuranceData from '@/data/insurance-companies.json'

// Get the Manulife data from the JSON file
const manulifeData = insuranceData.manulife;

export const metadata: Metadata = {
  title: `${manulifeData.name} | InsureTravel`,
  description: `Learn about ${manulifeData.name} benefits, eligibility, refunds, extensions, claims, and exclusions. Find the right coverage for your next trip.`,
  openGraph: {
    title: `${manulifeData.name} | InsureTravel`,
    description: `Learn about ${manulifeData.name} benefits, eligibility, refunds, extensions, claims, and exclusions. Find the right coverage for your next trip.`,
    type: 'website',
  },
}

export default function ManulifePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{manulifeData.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {manulifeData.description}
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
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{manulifeData.benefits.title}</h2>
              <p className="mb-6">{manulifeData.benefits.introduction}</p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{manulifeData.benefits.emergency_medical.title}</h3>
              <ul className="space-y-2">
                {manulifeData.benefits.emergency_medical.items.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              
              <div className="mt-6 mb-10">
                {manulifeData.benefits.emergency_medical.notes.map((note: string, index: number) => (
                  <p key={index} className="text-sm italic mb-1" dangerouslySetInnerHTML={{ __html: note }}></p>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{manulifeData.benefits.trip_interruption.title}</h3>
              <p className="mb-4">{manulifeData.benefits.trip_interruption.description}</p>
              
              <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-3">{manulifeData.benefits.trip_interruption.details.title}</h4>
              <p className="mb-4">{manulifeData.benefits.trip_interruption.details.description}</p>
              <ol className="space-y-4 mb-6">
                {manulifeData.benefits.trip_interruption.details.items.map((item: any, index: number) => (
                  <li key={index}>
                    {item.title && <p className="mb-2">{item.title}</p>}
                    {item.subitems.map((subitem: string, subIndex: number) => (
                      <p key={subIndex} className="mb-2" dangerouslySetInnerHTML={{ __html: subitem }}></p>
                    ))}
                  </li>
                ))}
              </ol>
              <p>{manulifeData.benefits.trip_interruption.details.additional_note}</p>
            </TabsContent>
            
            {/* Eligibility Tab */}
            <TabsContent value="eligibility" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{manulifeData.eligibility.title}</h2>
              
              {manulifeData.eligibility.sections.map((section: any, index: number) => (
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
                  
                  {section.notes && (
                    section.notes.map((note: string, noteIndex: number) => (
                      <p key={noteIndex} className="mb-4">{note}</p>
                    ))
                  )}
                  
                  {section.sections && (
                    <div className="mb-8">
                      {section.sections.map((subsection: any, subsectionIndex: number) => (
                        <div key={subsectionIndex} className="mb-6">
                          <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-3">{subsection.title}</h4>
                          {subsection.description && <p className="mb-4">{subsection.description}</p>}
                          {subsection.items && (
                            <ul className="space-y-2 mb-4">
                              {subsection.items.map((item: string, itemIndex: number) => (
                                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                              ))}
                            </ul>
                          )}
                          {subsection.note && <p className="mb-4">{subsection.note}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.medication_note && (
                    <div>
                      <p className="mb-4"><strong>{section.medication_note.title}</strong> {section.medication_note.description}</p>
                      <ol type="a" className="space-y-2">
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
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{manulifeData.refunds.title}</h2>
              
              {manulifeData.refunds.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{section.title}</h3>
                  
                  {section.description && (typeof section.description === 'string' ? 
                    <p className="mb-4">{section.description}</p> : 
                    section.description.map((desc: string, descIndex: number) => (
                      <p key={descIndex} className="mb-4">{desc}</p>
                    ))
                  )}
                  
                  {section.items && (
                    <ol type="a" className="space-y-4 mb-8">
                      {section.items.map((item: any, itemIndex: number) => {
                        if (typeof item === 'string') {
                          return <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>;
                        } else {
                          return (
                            <li key={itemIndex}>
                              <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                              <ul className="space-y-2 mt-2 ml-4">
                                {item.subitems.map((subitem: string, subIndex: number) => (
                                  <li key={subIndex} dangerouslySetInnerHTML={{ __html: subitem }}></li>
                                ))}
                              </ul>
                            </li>
                          );
                        }
                      })}
                    </ol>
                  )}
                  
                  {section.note && <p className="text-sm italic mb-8">{section.note}</p>}
                </div>
              ))}
            </TabsContent>
            
            {/* Extensions Tab */}
            <TabsContent value="extensions" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{manulifeData.extensions.title}</h2>
              
              {manulifeData.extensions.sections.map((section: any, index: number) => (
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
                  
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </TabsContent>
            
            {/* Claims Tab */}
            <TabsContent value="claims" className="prose max-w-none">
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{manulifeData.claims.title}</h2>
              
              {manulifeData.claims.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">{section.title}</h3>
                  
                  <div className={index === manulifeData.claims.sections.length - 1 ? "" : "mb-8"}>
                    {section.description.map((desc: string, descIndex: number) => {
                      // If the content includes an http link, use dangerouslySetInnerHTML
                      if (desc.includes('http')) {
                        return <p key={descIndex} className="mb-4" dangerouslySetInnerHTML={{ __html: desc }}></p>;
                      }
                      
                      // Special handling for the mailing address
                      if (desc.includes('Manulife Financial Travel Insurance')) {
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
              <h2 className="text-deepBlue text-3xl font-bold mt-0 mb-6">{manulifeData.exclusions.title}</h2>
              <p className="mb-6">{manulifeData.exclusions.introduction}</p>
              
              <ol className="space-y-4">
                {manulifeData.exclusions.items.map((item: any, index: number) => {
                  if (typeof item === 'string') {
                    return <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>;
                  } else {
                    return (
                      <li key={index}>
                        <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                        <ul className="space-y-2 mt-2 ml-4">
                          {item.subitems.map((subitem: string, subIndex: number) => (
                            <li key={subIndex} dangerouslySetInnerHTML={{ __html: subitem }}></li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                })}
              </ol>
              
              <p className="mt-6">{manulifeData.exclusions.note}</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#" className="bg-deepBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-deepBlue/90 transition-colors shadow-md transform hover:scale-105 active:scale-95">
            Request a Quote
          </a>
          <div className="flex gap-4">
            {manulifeData.downloads.map((download: { name: string, url: string }, index: number) => (
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
              src={manulifeData.logo} 
              alt={`${manulifeData.name} Logo`} 
              className="h-12 w-auto"
            />
            <div>
              <p className="text-sm text-gray-600">Administrated & Underwritten by:</p>
              <p className="font-semibold">{manulifeData.company_info.administrated_by}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{manulifeData.company_info.legal_note}</p>
        </div>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceProduct",
              "name": manulifeData.name,
              "description": manulifeData.description,
              "insuranceCompany": {
                "@type": "Organization",
                "name": "Manulife Financial",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://your-domain.com" + manulifeData.logo
                }
              },
              "offers": {
                "@type": "Offer",
                "category": "Travel Insurance",
                "priceCurrency": "CAD",
                "url": "https://your-domain.com/insurance/manulife"
              }
            })
          }}
        />
      </article>
    </div>
  );
} 