import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface PasswordResetEmailProps {
  userEmail: string;
  resetUrl: string;
  requestTime: string;
}

const PasswordResetEmail = ({userEmail, resetUrl, requestTime}: PasswordResetEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your password - Action required within 1 hour</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[580px] mx-auto px-[40px] py-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Reset Your Password
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                We received a request to reset your password for The Company
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hello,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Someone requested a password reset for your account associated with <strong>{userEmail}</strong>. If this was you, click the button below to create a new password.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Reset My Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[24px] m-0">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all mb-[32px] m-0">
                {resetUrl}
              </Text>

              {/* Security Warning */}
              <Section className="bg-red-50 border-l-[4px] border-red-500 p-[24px] mb-[24px]">
                <Heading className="text-[18px] font-semibold text-red-800 m-0 mb-[12px]">
                  ⚠️ Important Security Information
                </Heading>
                <Text className="text-[14px] text-red-700 m-0 mb-[8px]">
                  • This password reset link expires in 1 hour for your security
                </Text>
                <Text className="text-[14px] text-red-700 m-0 mb-[8px]">
                  • If you didn't request this reset, please ignore this email
                </Text>
                <Text className="text-[14px] text-red-700 m-0 mb-[8px]">
                  • Never share this reset link with anyone
                </Text>
                <Text className="text-[14px] text-red-700 m-0">
                  • Consider changing your password if you suspect unauthorized access
                </Text>
              </Section>

              {/* Alternative Action */}
              <Section className="bg-gray-50 rounded-[8px] p-[24px] mb-[24px]">
                <Heading className="text-[16px] font-semibold text-gray-900 m-0 mb-[12px]">
                  Didn't request this reset?
                </Heading>
                <Text className="text-[14px] text-gray-700 m-0 mb-[12px]">
                  If you didn't request a password reset, your account is still secure. You can safely ignore this email, and your password will remain unchanged.
                </Text>
                <Text className="text-[14px] text-gray-700 m-0">
                  However, if you're concerned about unauthorized access, please contact our support team immediately.
                </Text>
              </Section>

              <Text className="text-[16px] text-gray-700 m-0">
                Need help? Our support team is here to assist you with any questions or concerns.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] text-center">
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                © {new Date().getFullYear()} The Company. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                123 Business Street, Suite 100, Alexandria, EG 21500
              </Text>
              <Text className="text-[12px] text-gray-500 m-0">
                <a href="#" className="text-gray-500 underline">Contact Support</a> | 
                <a href="#" className="text-gray-500 underline ml-[8px]">Security Center</a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PasswordResetEmail.PreviewProps = {
  userEmail: "thekinglion130@gmail.com",
  resetUrl: "https://yourapp.com/reset-password?token=xyz789abc123",
  requestTime: new Date().toLocaleString(),
};

export default PasswordResetEmail;