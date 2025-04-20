import React from 'react';
import Layout from '../components/common/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import { CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "5,000",
            priceUnit: "月額",
            description: "中小企業向けの基本機能パッケージ",
            features: [
                "5ユーザーまで",
                "基本的な分析機能",
                "標準サポート",
                "月次レポート",
                "1GBストレージ"
            ],
            highlighted: false,
            ctaText: "今すぐ始める",
            ctaLink: "/contact"
        },
        {
            name: "Pro",
            price: "15,000",
            priceUnit: "月額",
            description: "成長中の企業向け高機能パッケージ",
            features: [
                "20ユーザーまで",
                "高度な分析機能",
                "優先サポート",
                "週次レポート",
                "10GBストレージ",
                "API連携",
                "カスタム機能"
            ],
            highlighted: true,
            badge: "人気",
            ctaText: "14日間無料トライアル",
            ctaLink: "/contact"
        },
        {
            name: "Enterprise",
            price: "要問合せ",
            priceUnit: "",
            description: "大企業向けフルカスタマイズ対応",
            features: [
                "無制限ユーザー",
                "最先端分析機能",
                "24/7専任サポート",
                "リアルタイムレポート",
                "無制限ストレージ",
                "フルAPI連携",
                "専任コンサルタント",
                "SLA保証"
            ],
            highlighted: false,
            ctaText: "お問い合わせ",
            ctaLink: "/contact"
        }
    ];

    const faqs = [
        {
            question: "契約期間の縛りはありますか？",
            answer: "いいえ、すべてのプランは月額制で、いつでも解約可能です。ただし、年間契約の場合は20%割引が適用されます。"
        },
        {
            question: "プランの変更はいつでも可能ですか？",
            answer: "はい、いつでもプランのアップグレードまたはダウングレードが可能です。アップグレードは即時反映され、ダウングレードは次の請求サイクルから適用されます。"
        },
        {
            question: "無料トライアルはありますか？",
            answer: "はい、Proプランでは14日間の無料トライアルをご利用いただけます。クレジットカード情報なしでもお試しいただけます。"
        },
        {
            question: "どのような支払い方法に対応していますか？",
            answer: "クレジットカード（Visa、Mastercard、American Express）、銀行振込、PayPalに対応しています。"
        },
        {
            question: "返金ポリシーについて教えてください",
            answer: "ご利用開始から30日以内であれば、全額返金が可能です。お客様満足を最優先に考えております。"
        }
    ];

    return (
        <Layout
            title="料金プラン"
            description="あなたのビジネスに最適な料金プランをご用意しています。スモールビジネスから大企業まで対応可能です。"
        >
            <div className="container mx-auto px-4 py-12">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        シンプルな料金体系
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        あなたのビジネスに最適なプランをお選びいただけます。いつでもアップグレード可能です。
                    </p>

                    <div className="inline-flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                        <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium">月額</button>
                        <button className="px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 font-medium">年額（20%オフ）</button>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {plans.map((plan, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={100 * index}
                            className="h-full"
                        >
                            <div
                                className={`
                  h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all
                  ${plan.highlighted
                                        ? 'border-2 border-blue-500 dark:border-blue-400 scale-105 z-10'
                                        : 'border border-gray-200 dark:border-gray-700'}
                `}
                            >
                                <div className={`
                  p-8 bg-white dark:bg-gray-800 relative
                  ${plan.highlighted ? 'bg-blue-50 dark:bg-gray-700' : ''}
                `}>
                                    {plan.badge && (
                                        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                            {plan.badge}
                                        </span>
                                    )}

                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-4xl font-bold">¥{plan.price}</span>
                                        {plan.priceUnit && <span className="text-gray-500 ml-2 dark:text-gray-400">{plan.priceUnit}</span>}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {plan.description}
                                    </p>
                                    <Link href={plan.ctaLink}>
                                        <a className={`
                      block w-full py-3 rounded-lg font-semibold transition-colors text-center
                      ${plan.highlighted
                                                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                                : 'border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700'}
                    `}>
                                            {plan.ctaText}
                                        </a>
                                    </Link>
                                </div>

                                <div className="p-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                            >
                                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">お見積りやご質問がございますか？</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            お客様のビジネスに最適なプランをご提案いたします。
                        </p>
                        <Link href="/contact">
                            <a className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                                お問い合わせ
                            </a>
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </Layout>
    );
}