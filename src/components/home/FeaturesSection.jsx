import Image from 'next/image';
import {
    LightBulbIcon,
    ChartBarIcon,
    LockClosedIcon,
    ClockIcon
} from '@heroicons/react/outline';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

const features = [
    {
        icon: LightBulbIcon,
        title: "直感的なインターフェース",
        description: "専門知識不要。誰でも簡単に操作できるUIデザイン。",
        imageUrl: "/images/features/interface.jpg"
    },
    {
        icon: ChartBarIcon,
        title: "詳細な分析機能",
        description: "リアルタイムデータ分析でビジネスの意思決定を支援。",
        imageUrl: "/images/features/analytics.jpg"
    },
    {
        icon: LockClosedIcon,
        title: "セキュアなデータ管理",
        description: "最高レベルのセキュリティでデータを保護。",
        imageUrl: "/images/features/security.jpg"
    },
    {
        icon: ClockIcon,
        title: "自動化ワークフロー",
        description: "反復作業を自動化し、業務効率を大幅に向上。",
        imageUrl: "/images/features/automation.jpg"
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ビジネスを変革する主要機能
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        当社のSaaSプラットフォームが提供する革新的な機能で、ビジネスプロセスを効率化します。
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedSection
                            key={index}
                            className="h-full"
                            animation="fade-up"
                            delay={100 * index}
                        >
                            <Card className="h-full p-6">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                                <div className="relative h-40 rounded-lg overflow-hidden">
                                    <Image
                                        src={feature.imageUrl}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform hover:scale-105 duration-300"
                                    />
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}