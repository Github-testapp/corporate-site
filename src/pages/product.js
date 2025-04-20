import React from 'react';
import Layout from '../components/common/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProductFeature from '../components/products/ProductFeature';
import TechSpecs from '../components/products/TechSpecs';
import Comparison from '../components/products/Comparison';

export default function Product() {
    return (
        <Layout
            title="製品紹介"
            description="当社のSaaSプラットフォームの特徴と機能について詳しく説明します。"
        >
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        製品紹介
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        当社のSaaSプラットフォームは、ビジネスプロセスを効率化し、生産性を向上させるための包括的なソリューションです。
                    </p>
                </AnimatedSection>

                <ProductFeature />
                <TechSpecs />
                <Comparison />
            </div>
        </Layout>
    );
}