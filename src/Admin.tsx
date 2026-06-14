import { useState, useEffect } from 'react';

type Lead = {
  id: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  businessType: string;
  timestamp: string;
};

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('mintora_leads');
    if (data) {
      try {
        setLeads(JSON.parse(data));
      } catch (e) {
        console.error('Error parsing leads', e);
      }
    }
  }, []);

  const returnHome = () => {
    window.location.href = '/';
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to delete all leads?')) {
      localStorage.removeItem('mintora_leads');
      localStorage.removeItem('mintora_submission_locked');
      setLeads([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-[#E5E7EB] pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-1">Administrative Dashboard</h1>
            <p className="text-sm text-gray-500">Secure Intake Overview</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={clearData}
              className="px-4 py-2 text-sm border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
            >
              Clear Data
            </button>
            <button 
              onClick={returnHome}
              className="px-4 py-2 text-sm bg-[#111111] text-white hover:bg-[#0066FF] transition-colors"
            >
              Exit Panel
            </button>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-sm overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#FAFAFA] border-b border-[#E5E7EB]">
              <tr>
                <th className="px-6 py-4 font-medium text-[#111111]">Timestamp</th>
                <th className="px-6 py-4 font-medium text-[#111111]">Business Name</th>
                <th className="px-6 py-4 font-medium text-[#111111]">Phone Number</th>
                <th className="px-6 py-4 font-medium text-[#111111]">Direct Email</th>
                <th className="px-6 py-4 font-medium text-[#111111]">Business Sector</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No infrastructure claims found.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{new Date(lead.timestamp).toLocaleString()}</td>
                    <td className="px-6 py-4 font-medium">{lead.businessName}</td>
                    <td className="px-6 py-4">{lead.phoneNumber || 'N/A'}</td>
                    <td className="px-6 py-4">{lead.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-50 text-[#0066FF] text-xs font-medium border border-blue-100 rounded-sm">
                        {lead.businessType || 'N/A'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
