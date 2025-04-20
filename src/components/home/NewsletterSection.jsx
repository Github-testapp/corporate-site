import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';
import Input from '../forms/FormElements/Input';
import Button from '../forms/FormElements/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('メールアドレスを入力してください');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('有効なメールアドレスを入力してください');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // ここでAPIリクエストを行う
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('エラーが発生しました。後でもう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-blue-500 dark:bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              最新情報をお届けします
            </h2>
            <p className="text-lg text-blue-100">
              製品のアップデート情報やお役立ち情報をメールでお届けします。いつでも配信を停止できます。
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            {isSubmitted ? (
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  登録ありがとうございます！
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  まもなく確認メールが届きます。メール内のリンクをクリックして登録を完了してください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <Input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    placeholder="メールアドレスを入力"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="w-full bg-white dark:bg-gray-700 border-0"
                    aria-label="メールアドレス"
                  />
                </div>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="whitespace-nowrap bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  登録する
                </Button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection className="text-center mt-6 text-sm text-blue-100">
            <p>
              登録することで、当社の
              <Link href="/privacy-policy">
                <a className="underline hover:text-white">プライバシーポリシー</a>
              </Link>
              に同意したことになります。
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}