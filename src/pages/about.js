import React from 'react';
import Image from 'next/image';
import Layout from '../components/common/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import { MapIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { siteConfig } from '../../config/site';

export default function About() {
    const team = [
        {
            name: "山田 太郎",
            role: "代表取締役CEO",
            bio: "テクノロジー業界で15年以上の経験を持ち、複数のスタートアップの創業と成長をリードしてきました。",
            image: "/images/team/ceo.jpg",
            social: {
                twitter: "https://twitter.com/example",
                linkedin: "https://linkedin.com/in/example",
            }
        },
        {
            name: "鈴木 花子",
            role: "最高技術責任者(CTO)",
            bio: "エンタープライズソフトウェア開発のスペシャリスト。大規模システムのアーキテクチャ設計と実装を得意としています。",
            image: "/images/team/cto.jpg",
            social: {
                twitter: "https://twitter.com/example",
                linkedin: "https://linkedin.com/in/example",
                github: "https://github.com/example",
            }
        },
        {
            name: "佐藤 健",
            role: "最高製品責任者(CPO)",
            bio: "ユーザー中心設計の専門家。複数の成功したSaaS製品の設計と開発プロセスをリードしてきました。",
            image: "/images/team/cpo.jpg",
            social: {
                twitter: "https://twitter.com/example",
                linkedin: "https://linkedin.com/in/example",
            }
        },
        {
            name: "高橋 直子",
            role: "マーケティング責任者(CMO)",
            bio: "B2Bマーケティングのエキスパート。データドリブンなアプローチでブランド認知と顧客獲得を実現します。",
            image: "/images/team/cmo.jpg",
            social: {
                twitter: "https://twitter.com/example",
                linkedin: "https://linkedin.com/in/example",
            }
        },
    ];

    const timeline = [
        {
            year: "2018",
            title: "会社設立",
            description: "SaaS企業名の前身となる会社を創業。ビジネスプロセス効率化の可能性を追求。"
        },
        {
            year: "2019",
            title: "初期バージョンリリース",
            description: "初のプロダクトβ版をリリース。限定顧客へのプライベートベータを開始。"
        },
        {
            year: "2020",
            title: "シリーズAラウンド調達",
            description: "5億円の資金調達に成功。プロダクト開発とチーム拡大に投資。"
        },
        {
            year: "2021",
            title: "正式版リリース",
            description: "製品の正式版をリリース。初の1,000社の顧客を獲得。"
        },
        {
            year: "2022",
            title: "国際展開",
            description: "アジア太平洋地域への展開を開始。多言語対応を実装。"
        },
        {
            year: "2023",
            title: "シリーズBラウンド調達",
            description: "20億円の追加資金調達。AI機能の開発とグローバル展開を加速。"
        },
        {
            year: "2024",
            title: "エンタープライズ版ローンチ",
            description: "大企業向けのエンタープライズソリューションをローンチ。Fortune 500の顧客を獲得。"
        }
    ];

    const values = [
        {
            title: "顧客中心主義",
            description: "すべての意思決定は顧客の成功を最優先に考え、常に顧客のフィードバックを製品開発に活かします。"
        },
        {
            title: "革新と挑戦",
            description: "現状に満足せず、常に新しいアイデアを追求し、失敗を恐れずに挑戦し続けます。"
        },
        {
            title: "透明性と信頼",
            description: "社内外とのコミュニケーションにおいて透明性を重視し、信頼関係を構築します。"
        },
        {
            title: "多様性の尊重",
            description: "異なる背景や視点を持つ人々が集まることで、より創造的な解決策が生まれると信じています。"
        },
        {
            title: "持続可能な成長",
            description: "短期的な利益だけでなく、長期的な視点で持続可能なビジネスモデルを追求します。"
        }
    ];

    return (
        <Layout
            title="会社情報"
            description="私たちの会社のビジョン、ミッション、チームメンバーについてご紹介します。"
        >
            <div className="container mx-auto px-4 py-12">
                {/* ヒーローセクション */}
                <AnimatedSection className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            私たちのビジョン
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                            テクノロジーの力でビジネスをより簡単に、より効率的に、そしてより人間らしくすることを目指しています。
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            SaaS企業名は、2018年の設立以来、企業がデータを活用し、プロセスを最適化し、チームの協力を促進するための革新的なソリューションを開発してきました。私たちは、テクノロジーがビジネスの成功に不可欠であると同時に、人間中心のアプローチが真の価値を生み出すと信じています。
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about/office.jpg"
                                alt="オフィス風景"
                                layout="fill"
                                objectFit="cover"
                                className="z-10 relative"
                            />
                        </div>
                        <div className="absolute -z-10 top-0 right-0 w-full h-full bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
                    </div>
                </AnimatedSection>

                {/* 企業理念 */}
                <AnimatedSection className="mb-24 text-center">
                    <h2 className="text-3xl font-bold mb-12">企業理念</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-500">ミッション</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                ビジネスプロセスを効率化し、人々がより創造的で意味のある仕事に集中できるようにする。
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-green-500">ビジョン</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                すべての企業がテクノロジーの恩恵を最大限に活用できる世界を創造する。
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-purple-500">バリュー</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                顧客中心、革新と挑戦、透明性と信頼、多様性の尊重、持続可能な成長。
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 会社の歴史 */}
                <AnimatedSection className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">会社の歴史</h2>

                    <div className="relative">
                        {/* タイムライン中央線 */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                        }`}
                                >
                                    <AnimatedSection
                                        className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                                        animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                                        delay={index * 100}
                                    >
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                        </div>
                                    </AnimatedSection>

                                    <div className="w-2/12 flex justify-center">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                            {item.year}
                                        </div>
                                    </div>

                                    <div className="w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* 企業価値観 */}
                <AnimatedSection className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">私たちの価値観</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fade-up"
                                delay={index * 100}
                            >
                                <Card className="h-full p-6">
                                    <h3 className="text-xl font-bold mb-3 text-blue-500">{value.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>

                {/* チーム紹介 */}
                <AnimatedSection className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">チームの紹介</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fade-up"
                                delay={100 * index}
                                className="h-full"
                            >
                                <Card className="h-full overflow-hidden">
                                    <div className="relative h-64 w-full">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                                        <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>

                                        <div className="flex gap-4">
                                            {Object.entries(member.social).map(([platform, url]) => (
                                                <a
                                                    key={platform}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                                                    aria-label={platform}
                                                >
                                                    {platform === 'twitter' && (
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                        </svg>
                                                    )}
                                                    {platform === 'linkedin' && (
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    )}
                                                    {platform === 'github' && (
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                        </svg>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>

                {/* オフィス情報 */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-3xl font-bold mb-12 text-center">オフィス情報</h2>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                                <div className="aspect-video relative w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477921255468!2d139.70070925104056!3d35.65858868010245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1653394869169!5m2!1sja!2sjp"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <Card className="h-full p-8">
                                <h3 className="text-2xl font-bold mb-6">お問い合わせ先</h3>

                                <div className="space-y-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <MapIcon className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium">所在地</h4>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                {siteConfig.contact.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <PhoneIcon className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium">電話番号</h4>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                <a
                                                    href={`tel:${siteConfig.contact.phone}`}
                                                    className="hover:text-blue-500"
                                                >
                                                    {siteConfig.contact.phone}
                                                </a>
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                平日 9:00〜18:00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <MailIcon className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium">メールアドレス</h4>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                <a
                                                    href={`mailto:${siteConfig.contact.email}`}
                                                    className="hover:text-blue-500"
                                                >
                                                    {siteConfig.contact.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link href="/contact">
                                        <a className="inline-block w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-center transition-colors">
                                            お問い合わせはこちら
                                        </a>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 採用情報へのリンク */}
                <AnimatedSection className="bg-blue-500 dark:bg-blue-600 text-white rounded-xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">一緒に働きませんか？</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        私たちは常に情熱的で才能あるチームメンバーを募集しています。
                        私たちのミッションとビジョンに共感いただける方は、ぜひご連絡ください。
                    </p>
                    <Link href="/contact">
                        <a className="inline-block py-4 px-8 bg-white text-blue-500 hover:bg-gray-100 font-bold rounded-lg transition-colors">
                            採用情報を見る
                        </a>
                    </Link>
                </AnimatedSection>
            </div>
        </Layout>
    );
}