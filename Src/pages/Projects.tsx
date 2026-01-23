import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'Police IT Modernization & Digitization',
    client: 'State Police Department',
    year: '2023',
    location: 'Statewide Deployment',
    items: [
      'Desktop and Laptop Deployment',
      'Network & Peripheral Setup',
      'Application Support Services',
      'On-site IT Support Manpower',
    ],
  },
  {
    title: 'Public Works Department IT Infrastructure',
    client: 'Public Works Department',
    year: '2022',
    location: 'Regional Offices',
    items: [
      'Workstation Deployment',
      'LAN & Network Infrastructure',
      'System Maintenance Services',
      'IT Engineers and Technicians',
    ],
  },
  {
    title: 'Education Department Digital Enablement',
    client: 'School Education Department',
    year: '2023',
    location: 'Multiple Districts',
    items: [
      'Hardware Deployment for Institutions',
      'e-Learning Platform Support',
      'Training & User Assistance',
      'Centralized Helpdesk Services',
    ],
  },
  {
    title: 'Health Department IT Systems Support',
    client: 'State Health Department',
    year: '2024',
    location: 'Government Hospitals',
    items: [
      'IT Systems Deployment',
      'Data Entry & Digitization Support',
      'Application & Infrastructure Support',
      '24x7 Technical Assistance',
    ],
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Project Portfolio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Government <span className="gradient-text">Projects</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering large-scale IT infrastructure, application support, and manpower
              services for government departments across multiple domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glow-card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-primary mb-4">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>

                <ul className="space-y-2">
                  {project.items.map(item => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
