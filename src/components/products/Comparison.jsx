import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

export default function Comparison() {
    const features = [
        { name: "基本機能", basic: true, pro: true, enterprise: true },
        { name: "ユーザー数", basic: "5名まで", pro: "20名まで", enterprise: "無制限" },
        { name: "ストレージ容量", basic: "1GB", pro: "10GB", enterprise: "無制限" },
        { name: "カスタマーサポート", basic: "メール", pro: "メール・チャット", enterprise: "専任サポート" },
        { name: "API連携", basic: false, pro: true, enterprise: true },
        { name: "カスタム機能開発", basic: false, pro: false, enterprise: true },
        { name: "データエクスポート", basic: "基本形式", pro: "拡張形式", enterprise: "すべての形式" },
        { name: "高度な分析機能", basic: false, pro: true, enterprise: true },
        { name: "SLA保証", basic: false, pro: "99.9%", enterprise: "99.99%" },
        { name: "ホワイトラベル対応", basic: false, pro: false, enterprise: true },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">プラン比較</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        あなたのビジネスに最適なプランをお選びいただけます。
                    </p>
                </AnimatedSection>

                <AnimatedSection
                    className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                    animation="fade-up"
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-700">
                                    <th className="px-6 py-4 text-left text-gray-500 dark:text-gray-300 font-medium">機能</th>
                                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-300 font-medium">Basic</th>
                                    <th className="px-6 py-4 text-center text-blue-500 font-medium">Pro</th>
                                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-300 font-medium">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {features.map((feature, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">{feature.name}</td>
                                        <td className="px-6 py-4 text-center">
                                            {typeof feature.basic === 'boolean' ? (
                                                feature.basic ?
                                                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" /> :
                                                    <XIcon className="w-5 h-5 text-red-500 mx-auto" />
                                            ) : (
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature.basic}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900">
                                            {typeof feature.pro === 'boolean' ? (
                                                feature.pro ?
                                                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" /> :
                                                    <XIcon className="w-5 h-5 text-red-500 mx-auto" />
                                            ) : (
                                                <span className="text-sm text-gray-800 dark:text-blue-100 font-medium">{feature.pro}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {typeof feature.enterprise === 'boolean' ? (
                                                feature.enterprise ?
                                                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" /> :
                                                    <XIcon className="w-5 h-5 text-red-500 mx-auto" />
                                            ) : (
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature.enterprise}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}