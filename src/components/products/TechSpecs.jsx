import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import {
    ServerIcon,
    ShieldCheckIcon,
    ClockIcon,
    CloudIcon
} from '@heroicons/react/outline';

export default function TechSpecs() {
    const specs = [
        {
            icon: ServerIcon,
            title: "インフラストラクチャ",
            items: [
                "AWS上で構築されたマルチリージョン展開",
                "99.99%のSLA保証",
                "自動スケーリングで高トラフィックに対応",
                "データのリアルタイムバックアップ"
            ]
        },
        {
            icon: ShieldCheckIcon,
            title: "セキュリティ",
            items: [
                "SOC2 Type IIおよびGDPR準拠",
                "AES-256ビット暗号化でデータを保護",
                "多要素認証とシングルサインオン対応",
                "定期的な第三者によるセキュリティ監査"
            ]
        },
        {
            icon: ClockIcon,
            title: "パフォーマンス",
            items: [
                "高速CDN配信で世界中どこでも快適に利用可能",
                "ページロード時間は平均1秒未満",
                "大規模データセットでも即時レスポンス",
                "最適化されたモバイル体験"
            ]
        },
        {
            icon: CloudIcon,
            title: "API & 連携",
            items: [
                "RESTful APIおよびGraphQLサポート",
                "Webhookによるリアルタイムイベント通知",
                "主要SaaSサービスとのネイティブ連携",
                "カスタム連携のための開発者ポータル"
            ]
        }
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">技術仕様</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        当社のプラットフォームは、最新のテクノロジーを駆使して構築されています。
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specs.map((spec, index) => (
                        <AnimatedSection
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md"
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="flex items-center mb-4">
                                <spec.icon className="w-6 h-6 text-blue-500 mr-2" />
                                <h3 className="text-xl font-semibold">{spec.title}</h3>
                            </div>

                            <ul className="space-y-2">
                                {spec.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}