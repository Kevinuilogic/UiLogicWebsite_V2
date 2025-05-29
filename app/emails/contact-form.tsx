import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Img
              src="https://uilogic.io/logo.png"
              width="180"
              height="60"
              alt="UI Logic"
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={heading}>New Contact Form Submission</Heading>

            {/* Contact Info Card */}
            <Section style={card}>
              <Section style={infoSection}>
                <Text style={label}>From</Text>
                <Text style={value}>{name}</Text>
              </Section>

              <Hr style={divider} />

              <Section style={infoSection}>
                <Text style={label}>Email</Text>
                <Text style={value}>
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </Text>
              </Section>

              {phone && (
                <>
                  <Hr style={divider} />
                  <Section style={infoSection}>
                    <Text style={label}>Phone</Text>
                    <Text style={value}>{phone}</Text>
                  </Section>
                </>
              )}

              {subject && (
                <>
                  <Hr style={divider} />
                  <Section style={infoSection}>
                    <Text style={label}>Subject</Text>
                    <Text style={value}>{subject}</Text>
                  </Section>
                </>
              )}
            </Section>

            {/* Message Card */}
            <Section style={messageCard}>
              <Text style={messageLabel}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Action Button */}
            <Section style={actionSection}>
              <Link href={`mailto:${email}`} style={actionButton}>
                Reply to {name}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              This email was sent from the contact form on UI Logic's website.
            </Text>
            <Text style={copyrightText}>
              © {new Date().getFullYear()} UI Logic. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
};

const header = {
  padding: "32px 48px 0",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
};

const logo = {
  margin: "0 auto",
};

const content = {
  padding: "32px 48px",
};

const heading = {
  fontSize: "28px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#0b0f1a",
  marginBottom: "32px",
  textAlign: "center" as const,
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "24px",
  border: "1px solid #e2e8f0",
};

const infoSection = {
  marginBottom: "16px",
};

const label = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#64748b",
  fontWeight: "500",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
};

const value = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#0b0f1a",
  margin: "4px 0 0",
  fontWeight: "500",
};

const link = {
  color: "#4c7572",
  textDecoration: "none",
  fontWeight: "500",
};

const divider = {
  borderColor: "#e2e8f0",
  margin: "16px 0",
};

const messageCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "32px",
  border: "1px solid #e2e8f0",
};

const messageLabel = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#64748b",
  fontWeight: "500",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 12px",
};

const messageText = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#0b0f1a",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const actionSection = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const actionButton = {
  backgroundColor: "#4c7572",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  display: "inline-block",
};

const footer = {
  padding: "32px 48px",
  backgroundColor: "#f8fafc",
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
};

const footerDivider = {
  borderColor: "#e2e8f0",
  margin: "0 0 24px",
};

const footerText = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#64748b",
  margin: "0 0 8px",
  textAlign: "center" as const,
};

const copyrightText = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#94a3b8",
  margin: "0",
  textAlign: "center" as const,
};

export default ContactFormEmail;
