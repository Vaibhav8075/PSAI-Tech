import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductModel from '@/components/3d/ProductModel';
import { Monitor, Laptop, Printer, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'All Products', icon: null },
  { id: 'desktops', name: 'Desktops', icon: Monitor },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
  { id: 'printers', name: 'Printers', icon: Printer },
];

const products = [
  { id: 1, name: 'Enterprise Desktop Pro', category: 'desktops', type: 'desktop' as const, specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'Windows 11 Pro'], price: 'GeM Listed' },
  { id: 2, name: 'Government Workstation', category: 'desktops', type: 'desktop' as const, specs: ['Intel Core i5', '8GB RAM', '256GB SSD', 'Windows 11'], price: 'GeM Listed' },
  { id: 3, name: 'Business Laptop Elite', category: 'laptops', type: 'laptop' as const, specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '14" FHD Display'], price: 'GeM Listed' },
  { id: 4, name: 'Field Officer Laptop', category: 'laptops', type: 'laptop' as const, specs: ['Intel Core i5', '8GB RAM', '256GB SSD', 'Rugged Build'], price: 'GeM Listed' },
  { id: 5, name: 'Heavy Duty MFD Pro', category: 'printers', type: 'printer' as const, specs: ['Print/Scan/Copy', '50 ppm', 'Network Ready', 'Duplex'], price: 'GeM Listed' },
  { id: 6, name: 'Office Laser Printer', category: 'printers', type: 'printer' as const, specs: ['Mono Laser', '40 ppm', 'USB + LAN', 'High Yield Toner'], price: 'GeM Listed' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">IT Hardware</span> Solutions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">GeM-listed, government-compliant IT hardware from leading OEMs.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}>
                {cat.name}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glow-card overflow-hidden group">
                <ProductModel type={product.type} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <ul className="space-y-1 mb-4">
                    {product.specs.map(spec => <li key={spec} className="text-sm text-muted-foreground flex items-center gap-2"><Check className="w-3 h-3 text-primary" />{spec}</li>)}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium text-sm">{product.price}</span>
                    <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">Get Quote <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
