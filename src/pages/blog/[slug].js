import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/common/Layout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { CalendarIcon, ClockIcon, UserIcon, TagIcon } from '@heroicons/react/outline';

// ブログ記事データ（実際には外部ファイルやAPIから取得）
const blogPosts = [
    {
        id: 1,
        title: "SaaSビジネスにおけるカスタマーサクセスの重要性",
        excerpt: "顧客の成功を中心に据えたアプローチが、長期的な成長と顧客満足度向上につながる理由を解説します。",
        content: `
      # SaaSビジネスにおけるカスタマーサクセスの重要性
      
      SaaS（Software as a Service）ビジネスモデルの普及に伴い、「カスタマーサクセス」という概念がますます重要になっています。従来の「カスタマーサポート」が問題解決に焦点を当てていたのに対し、カスタマーサクセスは顧客が製品を通じて目標を達成できるよう積極的にサポートする取り組みです。
      
      ## カスタマーサクセスとは
      
      カスタマーサクセスとは、顧客が製品やサービスを通じて期待する成果を確実に得られるよう支援するプロセスです。これは単なる顧客満足度の向上だけでなく、顧客のビジネス成功に直接貢献することを目指しています。
      
      ## なぜSaaSビジネスでカスタマーサクセスが重要なのか
      
      ### 1. サブスクリプションモデルの特性
      
      SaaSビジネスの収益は、継続的な契約更新に大きく依存しています。顧客が製品から価値を得られないと感じれば、解約してしまうリスクがあります。カスタマーサクセスは顧客の継続利用を促進し、解約率（チャーン）を低減します。
      
      ### 2. 顧客生涯価値（LTV）の向上
      
      既存顧客との関係を強化し、アップセルやクロスセルの機会を創出することで、顧客一人あたりの生涯価値を高めることができます。カスタマーサクセスチームは、顧客の成長に合わせて適切な提案を行うことができます。
      
      ### 3. 顧客推奨の促進
      
      成功体験を得た顧客は、自然と製品の推奨者となります。口コミやレビューを通じて新規顧客の獲得コストを削減し、信頼性の高い紹介を得ることができます。
    `,
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
        content: `
      # データドリブン意思決定のためのダッシュボード設計術
      
      ビジネスにおけるデータ活用の重要性が高まる中、効果的なダッシュボード設計は意思決定の質と速度を大きく左右します。本記事では、ユーザーにとって価値のあるダッシュボードを設計するためのポイントについて解説します。
      
      ## 効果的なダッシュボードの特徴
      
      ### 1. 目的志向の設計
      
      ダッシュボードは特定の意思決定や業務目標をサポートするために設計されるべきです。「誰が」「どのような決定」を「どのようなデータに基づいて」行うのかを明確にしましょう。
      
      ### 2. 情報の階層化
      
      最も重要なKPI（重要業績評価指標）を目立つ位置に配置し、詳細データは必要に応じてドリルダウンできる構造にします。情報過多を避け、ユーザーの認知負荷を軽減することが重要です。
    `,
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
];

// Markdownをパースする関数（実際にはmarked.jsなどのライブラリを使う）
const parseMarkdown = (markdown) => {
    // 実際のプロダクションでは、marked.js や remark などのライブラリを使用
    // ここではシンプルな実装として、段落とヘッダーのみ処理
    return markdown
        .split('\n\n')
        .map(block => {
            if (block.startsWith('# ')) {
                return `<h1 class="text-4xl font-bold mb-6 mt-8">${block.substring(2)}</h1>`;
            } else if (block.startsWith('## ')) {
                return `<h2 class="text-3xl font-bold mb-4 mt-8">${block.substring(3)}</h2>`;
            } else if (block.startsWith('### ')) {
                return `<h3 class="text-2xl font-bold mb-4 mt-6">${block.substring(4)}</h3>`;
            } else if (block.startsWith('- ')) {
                const items = block.split('\n').map(line =>
                    `<li class="ml-6 mb-2 list-disc">${line.substring(2)}</li>`
                ).join('');
                return `<ul class="mb-4">${items}</ul>`;
            } else {
                return `<p class="mb-4">${block}</p>`;
            }
        })
        .join('');
};

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;

    // 該当する記事を取得
    const post = blogPosts.find(post => post.slug === slug);

    // 関連記事を取得
    const relatedPosts = post
        ? blogPosts
            .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
            .slice(0, 3)
        : [];

    if (router.isFallback) {
        return (
            <Layout title="読み込み中...">
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center">
                        <p className="text-xl">記事を読み込んでいます...</p>
                    </div>
                </div>
            </Layout>
        );
    }

    if (!post) {
        return (
            <Layout title="記事が見つかりません">
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-6">記事が見つかりません</h1>
                        <p className="text-xl mb-8">お探しの記事は存在しないか、削除された可能性があります。</p>
                        <Link href="/blog">
                            <a className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                                ブログ一覧に戻る
                            </a>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout
            title={post.title}
            description={post.excerpt}
            image={post.image}
            path={`/blog/${post.slug}`}
        >
            <div className="container mx-auto px-4 py-12">
                <article>
                    <AnimatedSection className="mb-12">
                        <div className="max-w-4xl mx-auto">
                            {/* ヘッダー */}
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

                            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                                <div className="flex items-center mr-6 mb-2">
                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center mr-6 mb-2">
                                    <ClockIcon className="w-4 h-4 mr-1" />
                                    <span>{post.readTime}読む</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <UserIcon className="w-4 h-4 mr-1" />
                                    <span>{post.author.name}</span>
                                </div>
                            </div>

                            {/* アイキャッチ画像 */}
                            <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* 記事本文 */}
                    <AnimatedSection className="mb-12">
                        <div className="max-w-3xl mx-auto">
                            <div
                                className="prose prose-lg prose-blue dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
                            />
                        </div>
                    </AnimatedSection>

                    {/* 著者情報 */}
                    <AnimatedSection className="mb-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={post.author.image}
                                            alt={post.author.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{post.author.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* タグとシェア */}
                    <AnimatedSection className="mb-16">
                        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="mb-4 md:mb-0">
                                <div className="flex items-center flex-wrap">
                                    <TagIcon className="w-5 h-5 text-gray-500 mr-2" />
                                    {post.tags.map(tag => (
                                        <Link key={tag} href={`/blog?tag=${tag}`}>
                                            <a className="mr-2 mb-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-500">
                                                {tag}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="mr-2 text-gray-500">シェア:</span>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://example.com/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 mr-4"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://example.com/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 mr-4"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://example.com/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </article>

                {/* 関連記事 */}
                {relatedPosts.length > 0 && (
                    <AnimatedSection className="mb-16">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8">関連記事</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                                        <a className="block h-full">
                                            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full transition-all hover:-translate-y-2 hover:shadow-xl">
                                                <div className="relative h-48 w-full">
                                                    <Image
                                                        src={relatedPost.image}
                                                        alt={relatedPost.title}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </div>

                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                                        {relatedPost.excerpt}
                                                    </p>
                                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                        <CalendarIcon className="w-4 h-4 mr-1" />
                                                        <span className="mr-3">{relatedPost.date}</span>
                                                        <ClockIcon className="w-4 h-4 mr-1" />
                                                        <span>{relatedPost.readTime}読む</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                )}

                {/* CTAセクション */}
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto bg-blue-500 dark:bg-blue-600 text-white rounded-xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">製品について詳しく知りたいですか？</h2>
                        <p className="text-xl mb-8">
                            無料デモを体験して、あなたのビジネスにどのように役立てるか確認しましょう。
                        </p>
                        <Link href="/contact">
                            <a className="inline-block px-8 py-4 bg-white text-blue-500 hover:bg-gray-100 font-bold rounded-lg transition-colors">
                                無料デモを申し込む
                            </a>
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </Layout>
    );
}

// この関数はビルド時に実行され、動的ルーティングのパスを生成
export async function getStaticPaths() {
    // 実際の実装では、APIやCMSからデータを取得
    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: true, // 未生成のパスは404ではなくフォールバック
    };
}

// 各ページのデータを事前生成
export async function getStaticProps({ params }) {
    // 該当する記事を取得（実際はAPIやCMSから）
    const post = blogPosts.find((post) => post.slug === params.slug);

    // 記事が見つからない場合
    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
        // 定期的に再生成（秒単位）
        revalidate: 60 * 60 * 24, // 24時間
    };
}