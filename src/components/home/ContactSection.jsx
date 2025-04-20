import AnimatedSection from '../ui/AnimatedSection';
import ContactForm from '../forms/ContactForm';

export default function ContactSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900" id="contact">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            お問い合わせ
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            製品に関するご質問や導入のご相談はこちらからお気軽にどうぞ。
                        </p>
                    </AnimatedSection>

                    <AnimatedSection
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                        animation="fade-up"
                    >
                        <ContactForm />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}