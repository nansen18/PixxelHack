import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(3);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Rick McCartney',
      role: 'CEO',
      avatar: '/api/placeholder/120/120'
    },
    {
      id: 2,
      name: 'Chris Koha',
      role: 'COO',
      avatar: '/api/placeholder/120/120'
    },
    {
      id: 3,
      name: 'Caroline Nieto',
      role: 'Chief Product Officer',
      avatar: '/api/placeholder/120/120'
    },
    {
      id: 4,
      name: 'Victor Alberto',
      role: 'CTO',
      avatar: '/api/placeholder/120/120'
    },
    {
      id: 5,
      name: 'Adrián Rubio',
      role: 'Lead Designer',
      avatar: '/api/placeholder/120/120'
    }
  ];

  return (
    <Layout theme="light">
      <div className="min-h-screen">
        {/* Header */}
        <div className="container mx-auto px-6 pt-8">
          <div className="flex items-center justify-between mb-12">
            <div className="text-2xl font-bold text-foreground">
              magnifico
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Insights</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <Button size="sm" className="bg-bright-yellow text-foreground hover:bg-bright-yellow/90">
                Contact
              </Button>
            </nav>
          </div>

          {/* Team List */}
          <div className="max-w-4xl">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`relative border-b border-border py-6 cursor-pointer group transition-all duration-300 ${
                  selectedMember === member.id ? 'bg-stellar-blue text-white' : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedMember(member.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <span className={`text-2xl font-light ${selectedMember === member.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`text-xl font-medium ${selectedMember === member.id ? 'text-white' : 'text-foreground'} group-hover:opacity-80 transition-opacity`}>
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm ${selectedMember === member.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {member.role}
                    </span>
                    
                    {/* Profile circle - only show for selected member */}
                    {selectedMember === member.id && (
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cookie notice */}
          <div className="fixed bottom-8 right-8 max-w-sm">
            <div className="bg-white rounded-lg shadow-soft border border-border p-4">
              <p className="text-sm text-foreground mb-3">
                We use cookies to personalize your site experience and analyze site traffic.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Decline
                </Button>
                <Button size="sm" className="text-xs bg-bright-yellow text-foreground hover:bg-bright-yellow/90">
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;