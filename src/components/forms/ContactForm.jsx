import { useState } from 'react';
import * as yup from 'yup';
import Link from 'next/link';
import Input from './FormElements/Input';
import TextArea from './FormElements/TextArea';
import Checkbox from './FormElements/Checkbox';
import Button from './FormElements/Button';
import useForm from '../../hooks/useForm';

// バリデーションスキーマ
const schema = yup.object().shape({
    name: yup.string().required('お名前は必須です'),
    email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    message: yup.string().required('お問い合わせ内容は必須です'),
    privacy: yup.boolean().oneOf([true], 'プライバシーポリシーに同意してください'),
});

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        company: '',
        message: '',
        privacy: false,
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
    } = useForm(initialValues, schema);

    const onSubmit = async (formData) => {
        // ここでフォームデータの送信処理を行う
        // 例: API呼び出し

        // 送信成功のシミュレーション
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 送信成功
        setIsSubmitted(true);
        resetForm();
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-3">
                    お問い合わせありがとうございます
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    内容を確認次第、担当者より折り返しご連絡いたします。
                </p>
                <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                >
                    新しいお問い合わせを作成
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                    id="name"
                    name="name"
                    label="お名前"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    required
                />

                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="メールアドレス"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                    required
                />
            </div>

            <Input
                id="company"
                name="company"
                label="会社名"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mb-6"
            />

            <TextArea
                id="message"
                name="message"
                label="お問い合わせ内容"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && errors.message}
                required
                rows={5}
            />

            <Checkbox
                id="privacy"
                name="privacy"
                label={(
                    <>
                        <span className="mr-1">プライバシーポリシーに同意します</span>
                        <Link href="/privacy-policy">
                            <a className="text-blue-500 hover:underline">
                                プライバシーポリシーを読む
                            </a>
                        </Link>
                    </>
                )}
                checked={values.privacy}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.privacy && errors.privacy}
                className="mt-4 mb-6"
            />

            <Button
                type="submit"
                fullWidth
                size="lg"
                isLoading={isSubmitting}
            >
                お問い合わせを送信
            </Button>
        </form>
    );
}