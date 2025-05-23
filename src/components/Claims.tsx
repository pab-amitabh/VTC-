import React from 'react'
import { Phone, Mail, Globe, Clock, AlertTriangle } from 'lucide-react'

const Claims = () => {
  const insuranceCompanies = [
    {
      name: "MANULIFE",
      emergency: "1-877-878-0142 toll free Canada & USA; 519-251-5166 collect call",
      claims: "1-877-878-0142 toll free Canada/U.S or 519-251-5166",
      website: "manulife.acmtravel.ca",
      address: [
        "Manulife Financial Travel Insurance",
        "c/o Active Care Management",
        "P.O. Box 1237 Stn. A",
        "Windsor, ON, N9A 6P8"
      ]
    },
    {
      name: "21st CENTURY",
      emergency: "1-877-882-2957 toll free Canada & USA; 519-251-7856 collect call",
      claims: "1-855-297-4379 from 8:00AM to 8:00PM ET",
      website: "manulife.acmtravel.ca",
      address: [
        "21st Century Visitors Claims",
        "c/o Active Care Management",
        "P.O. Box 1237, Stn. A",
        "Windsor, ON, N9A 6P8"
      ]
    },
    {
      name: "Allianz Global Assistance",
      emergency: "1-800-995-1662 toll free Canada & USA; 416-340-0049 collect call\n800-842-08420 or 00-800-842-08420 Toll Free Worldwide",
      claims: "1-800-869-6747 toll free or 416-340-8809 collect call",
      website: "www.allianzassistanceclaims.ca",
      address: [
        "Allianz Global Assistance Claims Department",
        "P.O. Box 277",
        "Waterloo, ON N2J 4A4"
      ]
    },
    {
      name: "TuGo",
      emergency: "1-800-663-0399 toll free Canada & USA; 604-278-4108 collect call\n001-800-514-9976 toll free from Mexico; 800-663-00399 toll free worldwide",
      claims: "1-800-663-0399 toll free Canada & USA; 604-278-4108 collect call",
      website: "www.tugo.com/claims",
      address: [
        "Claims at TuGo",
        "1200-6081 No. 3 Road",
        "Richmond, BC Canada V6Y 2B2"
      ]
    },
    {
      name: "BLUE CROSS",
      emergency: "1-800-361-6068 toll free Canada & USA; 514-286-8411 collect call",
      claims: "1-800-387-2538 for Quebec; 1-800-557-3907 for Ontario and Atlantic region",
      website: "canassistance.com/en/policyholder/claims",
      submitUrl: "canassistance.com/en/policyholder/depot",
      address: [
        "Blue Cross – Travel Insurance Claims",
        "PO BOX 3888, Station B",
        "Montreal, QC, H3B 3L7"
      ]
    },
    {
      name: "GMS",
      emergency: "1-800-459-6604 toll free Canada & USA; 905-762-5196 collect call",
      claims: "1-800-459-6604 toll free Canada/U.S or 905-762-5196 collect call",
      website: "www.gms.ca/vtc-claims",
      address: [
        "World Travel Protection",
        "901 King Street West, Suite 300",
        "Toronto, ON, M5V 3H5"
      ]
    },
    {
      name: "Destination Travel Group",
      emergency: "1-888-726-1839 toll free Canada/USA; +1 (416) 260-4553 collect call",
      claims: "",
      website: "destinationtravelclaims.nac.zurich.com",
      address: [
        "Zurich Canada Travel Insurance",
        "c/o Zurich Travel Assist",
        "100 King Street West, Suite 5300",
        "Toronto, Ontario, Canada, M5X 1C9"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Claims</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Report your claim quickly and efficiently with our comprehensive guide
          </p>
        </div>

        {/* General Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">How to Report a Claim</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="text-lg font-semibold text-gray-900">Emergency Call</h3>
              </div>
              <p className="text-gray-700">
                In case of an emergency, call the 24/7 Emergency Assistance Center as soon as possible. 
                Failure to do that can decrease your insurance benefit.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="text-lg font-semibold text-gray-900">Report Claim</h3>
              </div>
              <p className="text-gray-700">
                Report your claim within <span className="font-semibold">30 days</span> by completing a claim form.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="text-lg font-semibold text-gray-900">Submit Documents</h3>
              </div>
              <p className="text-gray-700">
                Send all original bills within <span className="font-semibold">90 days</span> from the day of emergency 
                (don't forget to make your own copies).
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Companies */}
        <div className="grid lg:grid-cols-2 gap-8">
          {insuranceCompanies.map((company, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <h3 className="text-2xl font-bold text-white">{company.name}</h3>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Emergency Assistance */}
                <div>
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Emergency Assistance</h4>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-gray-700 whitespace-pre-line">{company.emergency}</p>
                  </div>
                </div>

                {/* Claim Assistance */}
                {company.claims && (
                  <div>
                    <div className="flex items-center mb-3">
                      <Phone className="w-5 h-5 text-blue-500 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900">Claim Assistance</h4>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-gray-700">{company.claims}</p>
                    </div>
                  </div>
                )}

                {/* Online Submission */}
                <div>
                  <div className="flex items-center mb-3">
                    <Globe className="w-5 h-5 text-green-500 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Online Claim Submission</h4>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <a 
                      href={`https://${company.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-medium hover:underline"
                    >
                      {company.website}
                    </a>
                    {company.submitUrl && (
                      <div className="mt-2">
                        <span className="text-gray-600">Submit claims: </span>
                        <a 
                          href={`https://${company.submitUrl}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 font-medium hover:underline"
                        >
                          {company.submitUrl}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mailing Address */}
                <div>
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 text-purple-500 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Mail Original Documents To</h4>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    {company.address.map((line, idx) => (
                      <p key={idx} className="text-gray-700">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <Clock className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Reminder</h3>
              <p className="text-yellow-700">
                Always keep copies of all documents for your records. Contact your insurance provider immediately 
                in case of emergency, and submit your claim forms and supporting documents within the specified timeframes 
                to ensure your claim is processed efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Claims 