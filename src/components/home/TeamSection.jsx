import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

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

export default function TeamSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        チームの紹介
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        私たちは業界のエキスパートで構成された多様なチームです。お客様のビジネス成功に向けて全力でサポートします。
                    </p>
                </AnimatedSection>

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
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-0.178 0-0.355-0.012-0.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357 0.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605 0.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v0.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853 0.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                )}
                                                {platform === 'linkedin' && (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504 0.5 0.092 0.682-0.217 0.682-0.483 0-0.237-0.008-0.868-0.013-1.703-2.782 0.605-3.369-1.343-3.369-1.343-0.454-1.158-1.11-1.466-1.11-1.466-0.908-0.62 0.069-0.608 0.069-0.608 1.003 0.07 1.531 1.032 1.531 1.032 0.892 1.53 2.341 1.088 2.91 0.832 0.092-0.647 0.35-1.088 0.636-1.338-2.22-0.253-4.555-1.113-4.555-4.951 0-1.093 0.39-1.988 1.029-2.688-0.103-0.253-0.446-1.272 0.098-2.65 0 0 0.84-0.27 2.75 1.026A9.564 9.564 0 0112 6.844c0.85 0.004 1.705 0.115 2.504 0.337 1.909-1.296 2.747-1.027 2.747-1.027 0.546 1.379 0.202 2.398 0.1 2.651 0.64 0.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943 0.359 0.309 0.678 0.92 0.678 1.855 0 1.338-0.012 2.419-0.012 2.747 0 0.268 0.18 0.58 0.688 0.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {platform === 'github' && (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-0.966 0-1.75-0.79-1.75-1.764s0.784-1.764 1.75-1.764 1.75 0.79 1.75 1.764-0.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
            </div>
        </section>
    );
}