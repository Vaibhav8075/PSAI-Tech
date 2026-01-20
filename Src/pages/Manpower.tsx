import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Users, GraduationCap, Briefcase, Wrench, FileText, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
  { icon: GraduationCap, title: 'Engineers', desc: 'IT Engineers, Software Developers, System Administrators', count: '500+' },
  { icon: Wrench, title: 'Technicians', desc: 'Hardware Technicians, Network Support, Maintenance Staff', count: '400+' },
  { icon: HeadphonesIcon, title: 'Help Desk', desc: 'Technical Support, Customer Service, Call Center', count: '300+' },
  { icon: FileText, title: 'Data Entry', desc: 'Data Entry Operators, Document Processing, Digitization', count: '500+' },
  { icon: Briefcase, title: 'Clerks', desc: 'Office Assistants, Administrative Staff, Record Keepers', count: '200+' },
  { icon: Users, title: 'Supervisors', desc: 'Team Leads, Project Coordinators, Site Managers', count: '100+' },
];

export default function Manpower() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Manpower Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Skilled <span className="gradient-text">Workforce</span> Solutions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">From engineers to clerks, we provide trained professionals for all government IT requirements.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {roles.map((role, i) => (
              <motion.div key={role.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glow-card p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <role.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">{role.count}</div>
                <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glow-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Skilled Manpower?</h2>
            <p className="text-muted-foreground mb-6">Contact us for customized manpower solutions for your department.</p>
            <Link to="/contact"><button className="glow-button text-primary-foreground">Request Manpower <ArrowRight className="w-4 h-4 inline ml-2" /></button></Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
