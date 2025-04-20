import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

const latestPosts = [
    {
        id: 1,
        title: "SaaSビジネスにおけるカスタマーサクセスの重要性",
        excerpt: "顧客の成功を中心に据えたアプローチが、長期的な成長と顧客満足度向上につながる理由を解説します。",
        image: "/images/blog/post1.jpg",
        date: "2023年5月15日",
        readTime: "5分",
        slug: "importance-of-customer-success"
    },
    {
        id: 2,
        title: "データドリブン意思決定のためのダッシュボード設計術",
        excerpt: "効果的なデータ可視化とダッシュボード設計のベストプラクティスについて詳しく解説します。",
        image: "/images/blog/post2.jpg",
        date: "2023年5月10日",
        readTime: "7分",
        slug: "dashboard-design-for-data-driven-decisions"
    },
    {
        id: 3,
        title: "APIファースト開発アプローチの利点と実装方法",
        excerpt: "APIファースト開発がもたらす柔軟性とスケーラビリティ、そして実際の実装方法について解説します。",
        image: "/images/blog/post3.jpg",
        date: "2023年5月5日",
        readTime: "6分",
        slug: "api-first-development-approach"
    }
];

export default function BlogSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        最新のブログ記事
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        業界のトレンドや当社の製品に関する最新情報をお届けします。
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <AnimatedSection
                            key={post.id}
                            animation="fade-up"
                            delay={100 * index}
                            className="h-full"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <a>
                                    <Card className="h-full overflow-hidden hover:cursor-pointer">
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <div className="flex items-center mr-4">
                                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <ClockIcon className="w-4 h-4 mr-1" />
                                                    <span>{post.readTime}読む</span>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-xl mb-2 hover:text-blue-500 transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                {post.excerpt}
                                            </p>

                                            <p className="text-blue-500 font-medium">
                                                記事を読む →
                                            </p>
                                        </div>
                                    </Card>
                                </a>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="text-center mt-12">
                    <Link href="/blog">
                        <a className="btn-secondary inline-block">
                            全ての記事を見る
                        </a>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}