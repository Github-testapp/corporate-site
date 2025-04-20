import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';
import AnimatedSection from '../ui/AnimatedSection';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
            {/* 背景のグラデーション要素 */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800 -z-10" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl -z-10" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <AnimatedSection className="w-full md:w-1/2 space-y-6" animation="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            あなたのビジネスを<span className="text-blue-500">次のレベル</span>へ
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            革新的なSaaSソリューションで業務効率を劇的に改善。スタートアップから大企業まで、あらゆるビジネスに対応します。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact">
                                <a className="btn-primary flex items-center justify-center">
                                    無料デモを申し込む
                                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                                </a>
                            </Link>

                            <Link href="/product">
                                <a className="btn-secondary flex items-center justify-center">
                                    詳細を確認する
                                </a>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="w-full md:w-1/2 relative" animation="fade-up" delay={200}>
                        <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl border dark:border-gray-700">
                            <Image
                                src="/images/hero/dashboard.jpg"
                                alt="製品ダッシュボード"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        <div className="absolute -z-10 top-1/3 right-1/3 w-full h-full bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}