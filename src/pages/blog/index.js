import { useState } from 'react';
import Layout from '../../components/common/Layout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, SearchIcon } from '@heroicons/react/outline';

// ブログ記事データ
const blogPosts = [
    {
        id: 1,
        title: "SaaSビジネスにおけるカスタマーサクセスの重要性",
        excerpt: "顧客の成功を中心に据えたアプローチが、長期的な成長と顧客満足度向上につながる理由を解説します。",
        image: "/images/blog/post1.jpg",
        date: "2023年5月15日",
        readTime: "5分",
        author: {
            name: "山田 太郎",
            role: "カスタマーサクセス責任者",
            image: "/images/team/ceo.jpg"
        },
        category: "カスタマーサクセス",
        slug: "importance-of-customer-success",
        tags: ["カスタマーサクセス", "SaaS", "顧客体験"]
    },
    {
        id: 2,
        title: "データドリブン意思決定のためのダッシュボード設計術",
        excerpt: "効果的なデータ可視化とダッシュボード設計のベストプラクティスについて詳しく解説します。",
        image: "/images/blog/post2.jpg",
        date: "2023年5月10日",
        readTime: "7分",
        author: {
            name: "佐藤 美咲",
            role: "データアナリスト",
            image: "/images/team/cmo.jpg"
        },
        category: "データ分析",
        slug: "dashboard-design-for-data-driven-decisions",
        tags: ["データ分析", "ダッシュボード", "データ可視化"]
    },
    {
        id: 3,
        title: "APIファースト開発アプローチの利点と実装方法",
        excerpt: "APIファースト開発がもたらす柔軟性とスケーラビリティ、そして実際の実装方法について解説します。",
        image: "/images/blog/post3.jpg",
        date: "2023年5月5日",
        readTime: "6分",
        author: {
            name: "鈴木 花子",
            role: "最高技術責任者",
            image: "/images/team/cto.jpg"
        },
        category: "開発",
        slug: "api-first-development-approach",
        tags: ["API", "開発手法", "バックエンド"]
    }
];

export default function Blog() {
    const [category, setCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // カテゴリーでフィルタリング
    const filteredByCategory = category === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === category);

    // 検索語でさらにフィルタリング
    const filteredPosts = searchTerm === ''
        ? filteredByCategory
        : filteredByCategory.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );

    // カテゴリーの一覧を取得
    const categories = [
        { id: 'all', name: '全て' },
        ...Array.from(new Set(blogPosts.map(post => post.category)))
            .map(cat => ({ id: cat, name: cat }))
    ];

    // 人気のタグを取得
    const allTags = blogPosts.flatMap(post => post.tags);
    const tagCounts = allTags.reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

    const popularTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([tag]) => tag);

    return (
        <Layout
            title="ブログ"
            description="業界のトレンドや当社の製品に関する最新情報をお届けします。"
        >
            <div className="container mx-auto px-4 py-12">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        ブログ
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        業界のトレンドや当社の製品に関する最新情報をお届けします。
                    </p>
                </AnimatedSection>

                {/* 検索とフィルター */}
                <AnimatedSection className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* 検索ボックス */}
                        <div className="relative w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="記事を検索..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>

                        {/* カテゴリーフィルター */}
                        <div className="w-full md:w-2/3 overflow-x-auto">
                            <div className="flex space-x-2 pb-2 min-w-max">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                      ${category === cat.id
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                            }
                    `}
                                        onClick={() => setCategory(cat.id)}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 人気タグ */}
                    <div className="mt-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">人気のタグ:</p>
                        <div className="flex flex-wrap gap-2">
                            {popularTags.map(tag => (
                                <button
                                    key={tag}
                                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-500"
                                    onClick={() => setSearchTerm(tag)}
                                >
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* 記事リスト */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <AnimatedSection
                                key={post.id}
                                animation="fade-up"
                                delay={100}
                                className="h-full"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <a className="h-full block">
                                        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full transition-all hover:-translate-y-2 hover:shadow-xl">
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

                                                <h2 className="font-bold text-xl mb-2 hover:text-blue-500 transition-colors">
                                                    {post.title}
                                                </h2>

                                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                    {post.excerpt}
                                                </p>

                                                <p className="text-blue-500 font-medium">
                                                    記事を読む →
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </AnimatedSection>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400">
                                記事が見つかりませんでした。
                            </p>
                        </div>
                    )}
                </div>

                {/* ニュースレターサインアップ */}
                <AnimatedSection className="mt-24 bg-blue-50 dark:bg-blue-900 rounded-xl p-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">最新の記事をメールでお届けします</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        SaaS業界のトレンドや製品のアップデート情報、お役立ちコンテンツを定期的にお届けします。いつでも配信を停止できます。
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="メールアドレスを入力"
                                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors sm:whitespace-nowrap">
                                登録する
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            登録することで、当社の
                            <Link href="/privacy-policy">
                                <a className="text-blue-500 hover:underline">プライバシーポリシー</a>
                            </Link>
                            に同意したことになります。
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </Layout>
    );
}