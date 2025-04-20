import Layout from '../components/common/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import ContactForm from '../components/forms/ContactForm';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { siteConfig } from '../../config/site';

export default function Contact() {
    return (
        <Layout
            title="お問い合わせ"
            description="製品に関するご質問や導入のご相談はこちらからお気軽にどうぞ。"
        >
            <div className="container mx-auto px-4 py-12">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        お問い合わせ
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        製品に関するご質問や導入のご相談はこちらからお気軽にどうぞ。
                        専門のスタッフが丁寧にご対応いたします。
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <AnimatedSection
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                            animation="fade-up"
                        >
                            <ContactForm />
                        </AnimatedSection>
                    </div>

                    <div>
                        <AnimatedSection
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                            animation="fade-up"
                            delay={200}
                        >
                            <h2 className="text-2xl font-bold mb-6">お問い合わせ先</h2>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <MailIcon className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">メールアドレス</h3>
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

                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">電話番号</h3>
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
                                        <LocationMarkerIcon className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">所在地</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                                            {siteConfig.contact.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection
                            className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                            animation="fade-up"
                            delay={300}
                        >
                            <div className="aspect-video relative">
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
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </Layout>
    );
}