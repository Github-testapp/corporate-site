// components/PricingSection.jsx
import { CheckIcon } from '@heroicons/react/solid'

const plans = [
    {
        name: "Basic",
        price: "5,000",
        description: "中小企業向けの基本機能パッケージ",
        features: [
            "5ユーザーまで",
            "基本的な分析機能",
            "標準サポート",
            "月次レポート",
            "1GBストレージ"
        ],
        highlighted: false,
        ctaText: "今すぐ始める"
    },
    {
        name: "Pro",
        price: "15,000",
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
        ctaText: "14日間無料トライアル"
    },
    {
        name: "Enterprise",
        price: "要問合せ",
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
        ctaText: "お問い合わせ"
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        シンプルな料金プラン
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        あなたのビジネスに最適なプランをお選びいただけます。いつでもアップグレード可能です。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all
                ${plan.highlighted
                                    ? 'border-2 border-blue-500 dark:border-blue-400 scale-105 z-10'
                                    : 'border border-gray-200 dark:border-gray-700'}
              `}
                        >
                            <div className={`
                p-8 bg-white dark:bg-gray-800
                ${plan.highlighted ? 'bg-blue-50 dark:bg-gray-700' : ''}
              `}>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-bold">¥{plan.price}</span>
                                    {plan.name !== "Enterprise" && <span className="text-gray-500 ml-2">/月</span>}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {plan.description}
                                </p>
                                <button className={`
                  w-full py-3 rounded-lg font-semibold transition-colors
                  ${plan.highlighted
                                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                        : 'border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700'}
                `}>
                                    {plan.ctaText}
                                </button>
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
                    ))}
                </div>
            </div>
        </section>
    );
}