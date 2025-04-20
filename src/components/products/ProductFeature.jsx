import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';

export default function ProductFeature() {
    const features = [
        {
            title: "AIを活用した高度なデータ分析",
            description: "膨大なデータからパターンや傾向を自動的に検出し、ビジネスインサイトを提供します。機械学習アルゴリズムにより、データの価値を最大限に引き出します。",
            image: "/images/features/analytics.jpg"
        },
        {
            title: "シームレスな連携と拡張性",
            description: "既存のシステムや他のSaaSサービスとのスムーズな連携を実現。APIを通じて柔軟に拡張でき、ビジネスの成長に合わせてスケールします。",
            image: "/images/features/interface.jpg"
        },
        {
            title: "エンタープライズレベルのセキュリティ",
            description: "SOC2、GDPRに準拠したセキュリティ対策を実装。データの暗号化、定期的なセキュリティ監査、多要素認証により、お客様の大切な情報を保護します。",
            image: "/images/features/security.jpg"
        }
    ];

    return (
        <section className="py-16">
            <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">主要機能</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    当社のSaaSプラットフォームは、ビジネスのニーズに合わせた強力な機能を提供します。
                </p>
            </AnimatedSection>

            <div className="space-y-24">
                {features.map((feature, index) => (
                    <AnimatedSection
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-12"
                        animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                        <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>

                        <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                            <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}