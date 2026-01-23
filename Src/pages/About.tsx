import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Shield, Target, Eye, Award, Users, Building } from 'lucide-react';

const team = [
  { name: 'Member 1 ', role: 'Founder & CEO', exp: '20+ Years in IT' },
  { name: 'Member 2', role: 'Operations Director', exp: '15+ Years Experience' },
  { name: 'Member 2', role: 'Technical Head', exp: 'Ex-BSNL Engineer' },
];

export default function About() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">We offer timely, high-quality technology solutions  <span className="gradient-text">tailored to specific domains</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">We have offered a wide range of IT & IT-enabled services, including ERP, Application Development, Enterprise Consulting, IT Infrastructure Services, Data Center Services ...</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">As a customer-focused company, we create value as a client-centered business to assist businesses in expanding and becoming more efficient. We have built enduring relationships with our customers to provide cost-effective quality solutions on time.</p>
              <h2 className="text-2xl font-bold">Our Purpose</h2>
              <p className="text-muted-foreground">To fulfill the promise of technology and human ingenuity <br/>We assist our clients in becoming the best versions of themselves.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
              {[{ icon: Target, label: 'Mission', text: 'Empower government with technology' }, { icon: Eye, label: 'Future Goal', text: 'Providing Services' }, { icon: Shield, label: 'Values', text: 'Integrity, Quality, Service' }, { icon: Award, label: 'Certifications', text: 'ISO 9001, GeM Seller,CMMI certificate' }].map(item => (
                <div key={item.label} className="glow-card p-4 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.text}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} id="team">
            <h2 className="text-2xl font-bold text-center mb-8">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map(member => (
                <div key={member.name} className="glow-card p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center"><Users className="w-8 h-8 text-primary" /></div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <div className="text-primary text-sm">{member.role}</div>
                  <div className="text-muted-foreground text-xs mt-1">{member.exp}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
