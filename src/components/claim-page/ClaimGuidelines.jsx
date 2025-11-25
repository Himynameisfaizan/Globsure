import React, { useState } from 'react';

const ClaimGuidelines = () => {
  // 1. State to track which card is active (Default: 'health')
  const [activeTab, setActiveTab] = useState('health');

  // 2. Data for the sections (Isse content manage karna easy hoga)
  const insuranceData = [
    {
      id: 'health',
      title: 'Health Insurance',
      icon: '🏥', // Tum yaha image icon use karna
      color: '#e3f2fd', // Light Blue bg for active state
      content: {
        heading: 'Documents for Health Claim',
        points: [
          'Discharge Summary from the Hospital.',
          'Original Hospital Bills and Prescriptions.',
          'Valid ID Proof and Policy Document.',
          'Diagnostic Reports (Blood test, X-ray, etc).'
        ]
      }
    },
    {
      id: 'vehicle',
      title: 'Vehicle Insurance',
      icon: '🚗',
      color: '#fff3e0', // Light Orange bg for active state
      content: {
        heading: 'Documents for Vehicle Claim',
        points: [
          'Copy of Driving License and RC.',
          'FIR Copy (in case of theft/major accident).',
          'Photos of the damaged vehicle.',
          'Original Repair Invoice.'
        ]
      }
    },
    {
      id: 'general',
      title: 'General Insurance',
      icon: '🏠',
      color: '#e8f5e9', // Light Green bg for active state
      content: {
        heading: 'Documents for Property/General Claim',
        points: [
          'Proof of ownership of damaged items.',
          'Fire Brigade Report (if applicable).',
          'Repair estimates from authorized vendor.',
          'List of stolen or damaged goods.'
        ]
      }
    },
  
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Section Heading */}
      <h2 className='text-3xl text-[#002249]' style={{ textAlign: 'center', marginBottom: '30px' }}>Claim Guidelines</h2>

      {/* --- TOP SECTION: 3 CARDS --- */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {insuranceData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id)} // Click pe state update hogi
            style={{
              border: activeTab === item.id ? '1px solid #007bff' : '1px solid #ddd',
              backgroundColor: activeTab === item.id ? item.color : '#fff',
              borderRadius: '10px',
              padding: '20px',
              width: '250px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.3s ease', // Smooth transition for card hover
              boxShadow: activeTab === item.id ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
              transform: activeTab === item.id ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{item.icon}</div>
            <h3 style={{ fontSize: '18px', margin: 0 }}>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* --- BOTTOM SECTION: CONTENT DISPLAY AREA --- */}
      <div style={{ marginTop: '40px' }}>
        {insuranceData.map((item) => {
            // Sirf active wala content render hoga
            if (item.id === activeTab) {
              return (
                <div 
                  key={item.id} 
                  style={{
                    border: '1px solid #eee',
                    borderRadius: '10px',
                    padding: '30px',
                    backgroundColor: '#f9f9f9',
                    animation: 'fadeIn 0.5s ease-in-out' // Smooth content appearance
                  }}
                >
                  <h3 style={{ color: '#333' }}>{item.content.heading}</h3>
                  <ul style={{ marginTop: '15px', lineHeight: '1.8' }}>
                    {item.content.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
        })}
      </div>

      {/* Simple CSS for Animation (Add this to your CSS file) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
};

export default ClaimGuidelines;