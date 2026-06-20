import * as React from "react";
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
} from "@react-email/components";

interface UserVerificationEmailProps {
  userEmail: string;
  verificationUrl: string;
}

const UserVerificationEmail = ({
  userEmail,
  verificationUrl,
}: UserVerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Verify your email address to complete your account setup
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[580px] mx-auto px-[40px] py-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to The Company! Please verify your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Thanks for signing up with <strong>{userEmail}</strong>! To complete your account setup and ensure
                you receive important updates, please verify your email address
                by clicking the button below.
              </Text>

              {/* Verification Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[24px] m-0">
                If the button above doesn&apos;t work, you can copy and paste this
                link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all mb-[24px] m-0">
                {verificationUrl}
              </Text>

              {/* Security Information */}
              <Section className="bg-gray-50 rounded-[8px] p-[24px] mb-[24px]">
                <Heading className="text-[18px] font-semibold text-gray-900 m-0 mb-[12px]">
                  Security Notice
                </Heading>
                <Text className="text-[14px] text-gray-700 m-0 mb-[8px]">
                  • This verification link will expire in 24 hours
                </Text>
                <Text className="text-[14px] text-gray-700 m-0 mb-[8px]">
                  • If you didn&apos;t create an account, you can safely ignore this
                  email
                </Text>
                <Text className="text-[14px] text-gray-700 m-0">
                  • Never share this verification link with others
                </Text>
              </Section>

              <Text className="text-[16px] text-gray-700 m-0">
                If you have any questions or need assistance, feel free to
                contact our support team.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] text-center">
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                © {new Date().getFullYear()} The Company. All rights
                reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                123 Business Street, Suite 100, Alexandria, EG 21500
              </Text>
              <Text className="text-[12px] text-gray-500 m-0">
                <a href="#" className="text-gray-500 underline">
                  Unsubscribe
                </a>{" "}
                |
                <a href="#" className="text-gray-500 underline ml-[8px]">
                  Privacy Policy
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

UserVerificationEmail.PreviewProps = {
  userEmail: "adham@adham.com",
  verificationUrl: "https://yourapp.com/verify?token=abc123xyz789",
  companyName: "Your Company",
};

export default UserVerificationEmail;
