import React from 'react';
import Layout from '../components/common/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function PrivacyPolicy() {
    return (
        <Layout
            title="プライバシーポリシー"
            description="当社のプライバシーポリシーについてご説明します。お客様の個人情報の取り扱いと保護について。"
        >
            <div className="container mx-auto px-4 py-12">
                <AnimatedSection className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>当社は、お客様の個人情報の保護を最優先事項と考えています。本プライバシーポリシーでは、当社のサービス利用時に収集される情報とその取り扱いについて説明します。</p>

                        <h2>1. 収集する情報</h2>
                        <p>当社は、以下の情報を収集することがあります：</p>
                        <ul>
                            <li>お名前、メールアドレス、電話番号などの連絡先情報</li>
                            <li>会社名、役職などの業務関連情報</li>
                            <li>サービス利用履歴、アクセスログなどの利用情報</li>
                            <li>デバイス情報、IPアドレス、ブラウザ情報などの技術情報</li>
                        </ul>

                        <h2>2. 情報の利用目的</h2>
                        <p>収集した情報は、以下の目的で利用されます：</p>
                        <ul>
                            <li>サービスの提供および改善</li>
                            <li>カスタマーサポートの提供</li>
                            <li>新機能や更新情報のお知らせ</li>
                            <li>セキュリティおよび不正利用の防止</li>
                        </ul>

                        <h2>3. 情報の共有</h2>
                        <p>当社は、以下の場合を除き、お客様の個人情報を第三者と共有しません：</p>
                        <ul>
                            <li>お客様の同意がある場合</li>
                            <li>法的要請に従う必要がある場合</li>
                            <li>サービス提供に必要なパートナー企業（適切な秘密保持契約の下で共有）</li>
                        </ul>

                        <h2>4. データセキュリティ</h2>
                        <p>当社は、お客様の個人情報を保護するために、業界標準のセキュリティ対策を実施しています。データは暗号化され、アクセス制限が設けられています。</p>

                        <h2>5. お客様の権利</h2>
                        <p>お客様には以下の権利があります：</p>
                        <ul>
                            <li>個人情報へのアクセス請求</li>
                            <li>個人情報の訂正・削除の請求</li>
                            <li>個人情報の利用停止の請求</li>
                            <li>個人情報の持ち運び（データポータビリティ）</li>
                        </ul>

                        <h2>6. Cookieの使用</h2>
                        <p>当社のウェブサイトでは、サービス向上のためにCookieを使用しています。ブラウザの設定によりCookieの使用を制限することができますが、一部の機能が利用できなくなる可能性があります。</p>

                        <h2>7. 本ポリシーの変更</h2>
                        <p>当社は、必要に応じて本プライバシーポリシーを更新することがあります。重要な変更がある場合は、ウェブサイト上で通知します。</p>

                        <h2>8. お問い合わせ</h2>
                        <p>プライバシーに関するご質問やご懸念がある場合は、以下の連絡先までお問い合わせください：</p>
                        <p>
                            メール: privacy@example.com<br />
                            電話: 03-1234-5678<br />
                            住所: 東京都渋谷区〇〇 1-2-3
                        </p>

                        <p className="text-sm text-gray-500 mt-8">最終更新日: 2023年4月1日</p>
                    </div>
                </AnimatedSection>
            </div>
        </Layout>
    );
}