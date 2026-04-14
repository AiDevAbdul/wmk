'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  faq: string;
  brands: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ServiceEditPage() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [service, setService] = useState<Service>({
    id: '',
    nameEn: '',
    nameAr: '',
    slug: '',
    description: '',
    descriptionAr: '',
    faq: '[]',
    brands: '[]',
  });

  const [faqItems, setFaqItems] = useState<FAQ[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  const brands = [
    'Tesla', 'BYD', 'BMW', 'Mercedes', 'Audi', 'Nissan', 'Toyota',
    'Honda', 'Hyundai', 'Kia', 'Ford', 'Chevrolet', 'Volkswagen', 'Lexus', 'Mazda', 'Subaru'
  ];

  useEffect(() => {
    if (!isNew) {
      fetchService();
    }
  }, [isNew]);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/admin/services/${params.id}`);
      const data = await res.json();
      setService(data);
      setFaqItems(JSON.parse(data.faq || '[]'));
      setSelectedBrands(JSON.parse(data.brands || '[]'));
    } catch (error) {
      console.error('Failed to fetch service:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFAQ = () => {
    setFaqItems([...faqItems, { question: '', answer: '' }]);
  };

  const handleRemoveFAQ = (index: number) => {
    setFaqItems(faqItems.filter((_, i) => i !== index));
  };

  const handleFAQChange = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...faqItems];
    if (updated[index]) {
      updated[index][field] = value;
      setFaqItems(updated);
    }
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        ...service,
        faq: JSON.stringify(faqItems),
        brands: JSON.stringify(selectedBrands),
      };

      const method = isNew ? 'POST' : 'PUT';
      const url = isNew ? '/api/admin/services' : `/api/admin/services/${params.id}`;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push('/admin/services');
      }
    } catch (error) {
      console.error('Failed to save service:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-steel-dark p-8 text-steel-light">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/admin/services"
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Services
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">
          {isNew ? 'New Service' : 'Edit Service'}
        </h1>

        <div className="space-y-6">
          {/* English Name */}
          <div>
            <label htmlFor="service-name-en" className="block text-sm font-medium text-white mb-2">Name (English)</label>
            <input
              id="service-name-en"
              type="text"
              value={service.nameEn}
              onChange={(e) => setService({ ...service, nameEn: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Service name in English"
            />
          </div>

          {/* Arabic Name */}
          <div>
            <label htmlFor="service-name-ar" className="block text-sm font-medium text-white mb-2">Name (Arabic)</label>
            <input
              id="service-name-ar"
              type="text"
              value={service.nameAr}
              onChange={(e) => setService({ ...service, nameAr: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Service name in Arabic"
              dir="rtl"
            />
          </div>

          {/* Slug */}
          <div>
            <label htmlFor="service-slug" className="block text-sm font-medium text-white mb-2">Slug</label>
            <input
              id="service-slug"
              type="text"
              value={service.slug}
              onChange={(e) => setService({ ...service, slug: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="service-slug"
            />
          </div>

          {/* English Description */}
          <div>
            <label htmlFor="service-desc-en" className="block text-sm font-medium text-white mb-2">Description (English)</label>
            <textarea
              id="service-desc-en"
              value={service.description}
              onChange={(e) => setService({ ...service, description: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary font-mono text-sm"
              placeholder="Service description in English (400+ words recommended)"
              rows={6}
            />
          </div>

          {/* Arabic Description */}
          <div>
            <label htmlFor="service-desc-ar" className="block text-sm font-medium text-white mb-2">Description (Arabic)</label>
            <textarea
              id="service-desc-ar"
              value={service.descriptionAr}
              onChange={(e) => setService({ ...service, descriptionAr: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary font-mono text-sm"
              placeholder="Service description in Arabic"
              rows={6}
              dir="rtl"
            />
          </div>

          {/* Brands */}
          <div>
            <label htmlFor="service-brands" className="block text-sm font-medium text-white mb-3">Related Brands</label>
            <div id="service-brands" className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="w-4 h-4"
                  />
                  <span className="text-white text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="faq-items" className="block text-sm font-medium text-white">FAQ Items</label>
              <button
                onClick={handleAddFAQ}
                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded hover:bg-primary/30 transition-colors"
              >
                Add FAQ
              </button>
            </div>

            <div id="faq-items" className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-steel-dark/50 p-4 rounded-lg border border-steel-light/10">
                  <div className="mb-3">
                    <input
                      id={`faq-question-${idx}`}
                      type="text"
                      value={item.question}
                      onChange={(e) => handleFAQChange(idx, 'question', e.target.value)}
                      className="w-full px-3 py-2 bg-steel-mid text-white border border-steel-light/20 rounded text-sm focus:outline-none focus:border-primary"
                      placeholder="Question"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      id={`faq-answer-${idx}`}
                      value={item.answer}
                      onChange={(e) => handleFAQChange(idx, 'answer', e.target.value)}
                      className="w-full px-3 py-2 bg-steel-mid text-white border border-steel-light/20 rounded text-sm focus:outline-none focus:border-primary"
                      placeholder="Answer"
                      rows={3}
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveFAQ(idx)}
                    className="text-red-400 text-sm hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Service'}
            </button>
            <Link
              href="/admin/services"
              className="px-6 py-2 bg-steel-mid text-white font-semibold rounded-lg hover:bg-steel-mid/80 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
