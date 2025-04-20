import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

const testimonials = [
    {
        content: "このプラットフォームを導入してから業務効率が50%以上向上しました。特に自動化機能は素晴らしく、以前は手作業で行っていた多くのタスクが今では自動で完了します。",
        author: "田中 健太",
        title: "株式会社テックイノベーション 代表取締役",
        image: "/images/testimonials/person1.jpg"
    },
    {
        content: "使いやすいインターフェースと強力な分析機能の組み合わせが最高です。導入前は複数のツールを使い分けていましたが、今はこれ一つで全てをカバーできています。",
        author: "佐藤 美咲",
        title: "グローバルマーケット株式会社 マーケティング部長",
        image: "/images/testimonials/person2.jpg"
    },
    {
        content: "サポートの質の高さに感動しています。技術的な問題があっても迅速かつ的確に対応してくれるため、安心して業務に集中できます。",
        author: "鈴木 拓也",
        title: "NextLevel Tech CTO",
        image: "/images/testimonials/person3.jpg"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        顧客の声
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        多くの企業様に導入いただき、ビジネスの成長をサポートしています。
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={100 * index}
                            className="h-full"
                        >
                            <Card className="h-full p-8 flex flex-col">
                                <div className="mb-6">
                                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                                    {testimonial.content}
                                </p>

                                <div className="flex items-center">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="mt-16 text-center">
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="w-40 h-20 md:w-48 md:h-24 relative grayscale transition hover:grayscale-0">
                                <Image
                                    src={`/images/logos/client-${num}.png`}
                                    alt={`クライアントロゴ ${num}`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}