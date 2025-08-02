import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Github, Mail, MapPin, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(3);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const { toast } = useToast();

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Rick McCartney',
      role: 'CEO',
      avatar: '/api/placeholder/120/120',
      bio: 'Visionary leader with 15+ years in tech innovation',
      location: 'San Francisco, CA',
      joinedDate: '2019',
      social: {
        twitter: '@rickmccartney',
        linkedin: 'rick-mccartney',
        email: 'rick@magnifico.com'
      }
    },
    {
      id: 2,
      name: 'Chris Koha',
      role: 'COO',
      avatar: '/api/placeholder/120/120',
      bio: 'Operations expert focused on scaling business excellence',
      location: 'New York, NY',
      joinedDate: '2020',
      social: {
        twitter: '@chriskoha',
        linkedin: 'chris-koha',
        email: 'chris@magnifico.com'
      }
    },
    {
      id: 3,
      name: 'Caroline Nieto',
      role: 'Chief Product Officer',
      avatar: '/api/placeholder/120/120',
      bio: 'Product strategist passionate about user-centered design',
      location: 'Austin, TX',
      joinedDate: '2021',
      social: {
        twitter: '@carolinenieto',
        linkedin: 'caroline-nieto',
        email: 'caroline@magnifico.com'
      }
    },
    {
      id: 4,
      name: 'Victor Alberto',
      role: 'CTO',
      avatar: '/api/placeholder/120/120',
      bio: 'Technical architect building scalable solutions',
      location: 'Seattle, WA',
      joinedDate: '2020',
      social: {
        twitter: '@victoralberto',
        linkedin: 'victor-alberto',
        github: 'valberto',
        email: 'victor@magnifico.com'
      }
    },
    {
      id: 5,
      name: 'Adrián Rubio',
      role: 'Lead Designer',
      avatar: '/api/placeholder/120/120',
      bio: 'Creative director crafting beautiful digital experiences',
      location: 'Los Angeles, CA',
      joinedDate: '2022',
      social: {
        twitter: '@adrianrubio',
        linkedin: 'adrian-rubio',
        email: 'adrian@magnifico.com'
      }
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
                    
                    {/* Profile photo */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-stellar-blue to-stellar-blue/80 flex items-center justify-center overflow-hidden border-2 border-white/20">
                        {/* Profile image placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Social icons for selected member */}
                      {selectedMember === member.id && (
                        <div className="absolute top-0 right-0 flex space-x-1">
                          {member.social.twitter && (
                            <button 
                              className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                toast({
                                  title: "Social Link",
                                  description: `Opening ${member.name}'s Twitter profile`,
                                });
                              }}
                            >
                              <Twitter className="w-3 h-3 text-white" />
                            </button>
                          )}
                          {member.social.linkedin && (
                            <button 
                              className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                toast({
                                  title: "Social Link",
                                  description: `Opening ${member.name}'s LinkedIn profile`,
                                });
                              }}
                            >
                              <Linkedin className="w-3 h-3 text-white" />
                            </button>
                          )}
                          {member.social.github && (
                            <button 
                              className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                toast({
                                  title: "Social Link",
                                  description: `Opening ${member.name}'s GitHub profile`,
                                });
                              }}
                            >
                              <Github className="w-3 h-3 text-white" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team member details for selected member */}
          {selectedMember && (
            <div className="mt-12 max-w-4xl animate-fade-in">
              {(() => {
                const member = teamMembers.find(m => m.id === selectedMember);
                if (!member) return null;
                
                return (
                  <div className="interactive-card p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-stellar-blue to-stellar-blue/80 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                        <p className="text-muted-foreground mb-4">{member.role}</p>
                        
                        {/* Social links */}
                        <div className="flex justify-center space-x-3">
                          {member.social.twitter && (
                            <button 
                              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                              onClick={() => toast({
                                title: "Twitter Profile",
                                description: `@${member.social.twitter?.replace('@', '')}`,
                              })}
                            >
                              <Twitter className="w-4 h-4 text-white" />
                            </button>
                          )}
                          {member.social.linkedin && (
                            <button 
                              className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                              onClick={() => toast({
                                title: "LinkedIn Profile",
                                description: `linkedin.com/in/${member.social.linkedin}`,
                              })}
                            >
                              <Linkedin className="w-4 h-4 text-white" />
                            </button>
                          )}
                          {member.social.github && (
                            <button 
                              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                              onClick={() => toast({
                                title: "GitHub Profile",
                                description: `github.com/${member.social.github}`,
                              })}
                            >
                              <Github className="w-4 h-4 text-white" />
                            </button>
                          )}
                          <button 
                            className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                            onClick={() => toast({
                              title: "Email Contact",
                              description: member.social.email,
                            })}
                          >
                            <Mail className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">{member.location}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">Joined {member.joinedDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Cookie consent */}
          {showCookieConsent && (
            <div className="fixed bottom-8 right-8 max-w-sm animate-fade-in">
              <div className="interactive-card p-6">
                <p className="text-sm text-foreground mb-4">
                  We use cookies to personalize your site experience and analyze site traffic.
                </p>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => {
                      setShowCookieConsent(false);
                      toast({
                        title: "Cookies Declined",
                        description: "You can change this in settings anytime.",
                      });
                    }}
                  >
                    Decline
                  </Button>
                  <Button 
                    size="sm" 
                    className="text-xs bg-bright-yellow text-foreground hover:bg-bright-yellow/90"
                    onClick={() => {
                      setShowCookieConsent(false);
                      toast({
                        title: "Cookies Accepted",
                        description: "Thank you! This helps us improve your experience.",
                      });
                    }}
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Team;