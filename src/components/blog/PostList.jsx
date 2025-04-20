import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

export default function PostList({ posts }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <AnimatedSection
                        key={post.id}
                        animation="fade-up"
                        delay={100 * index}
                        className="h-full"
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <a className="h-full block">
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
                                </Card>
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
    );
}